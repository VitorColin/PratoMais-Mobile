import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { ListItem, SearchBar } from "react-native-elements";
import axios from 'axios';

import Moviments from '../../componentes/Moviments';

import { MotiView, AnimatePresence, MotiText } from 'moti'

const DATA = [
  {
    id: 1,
    title: 'Gratificação',
    value: '500,00',
    date: '01/05/2023',
    type: 1 // Crédito
  },
  {
    id: 2,
    title: 'Burbom',
    value: '20,00',
    date: '11/05/2023',
    type: 0 // Débito
  },
  {
    id: 3,
    title: 'Burbom',
    value: '21,00',
    date: '12/05/2023',
    type: 0 // Débito
  },
  {
    id: 4,
    title: 'Gratificação',
    value: '500,00',
    date: '01/05/2023',
    type: 1 // Crédito
  },
  {
    id: 5,
    title: 'Burbom',
    value: '20,00',
    date: '11/05/2023',
    type: 0 // Débito
  },
  {
    id: 6,
    title: 'Burbom',
    value: '21,00',
    date: '12/05/2023',
    type: 0 // Débito
  }
];

const Item = ({ title, date, value, type }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.text}>{date}</Text>
      <View style={styles.titleValueContainer}>
        <Text style={styles.text2}>{title}</Text>
        <MotiText
          style={type === 1 ? styles.value : styles.expenses}
          from={{}}
        >
          {type === 1 ? `R$ ${value}` : `R$ ${value}`}
        </MotiText>
      </View>
    </View>
  );
};

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: [],
      error: null,
      searchValue: "",
    };
    this.arrayholder = [];
  }

  getConsumo = async (color) => {
    console.log('getConsumo');
    try {
      const response = await axios.get('http://10.10.119.85:8070/api/Usuario/1/consumo?page=1&pageSize=10');
      const data = response.data.rows;
      console.log(response.data.rows);
      this.setState(prevState => ({
        data: [...prevState.data, ...data],
        error: null,
        consumoColor: color
      }));
    } catch (error) {
      console.error(error);
      this.setState({
        error: 'Error fetching data',
      });
    }
  }

  getDeposito = async (color) => {
    console.log('getDeposito');
    try {
      const response = await axios.get('http://10.10.119.85:8070/api/Usuario/1/deposito?page=1&pageSize=10');
      const data = response.data.rows;
      console.log(data);
      this.setState(prevState => ({
        data: [...prevState.data, ...data],
        error: null,
        depositoColor: color
      }));
    } catch (error) {
      console.error(error);
      this.setState({
        error: 'Error fetching data',
      });
    }
  }


  componentDidMount() {
    console.log('componentDidMount');
    this.getConsumo('red');
    this.getDeposito('green');
  }

  searchFunction = (text) => {
    const { telaSelecionada } = this.props;
    const updatedData = this.arrayholder.filter((item) => {
      const item_data = item.estabelecimento?.nome?.toUpperCase() || ''; // Defina um valor padrão caso item.title seja undefined
      const text_data = text.toUpperCase();
      return item_data.indexOf(text_data) > -1; // Substitua indexOf por includes
    });

    let filteredData = updatedData;

    if (telaSelecionada === 'Favoritos') {
      filteredData = updatedData.filter((item) => item.isFavorite);
    } else if (telaSelecionada === 'Descontos') {
      filteredData = updatedData.filter((item) => item.hasDiscount);
    }

    this.setState({ data: filteredData, searchValue: text });
  };


  renderItem = ({ item }) => (
    <Item
      title={item.estabelecimento?.nome}
      value={item.valor}
  
    />
  );

  render() {
    return (
      <View style={styles.container}>
        <SearchBar
          placeholder="..."
          round
          value={this.state.searchValue}
          onChangeText={(text) => this.searchFunction(text)}
          autoCorrect={false}
          containerStyle={styles.searchInput}
          inputContainerStyle={styles.searchInput}
        />
        <FlatList
          style={styles.list}
          data={this.state.data}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    );
  }
}

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    marginTop: 0,

  },
  list: {
    fontSize: 30,
    fontWeight: 'bold',
    backgroundColor: '#000',
  },
  text: {
    backgroundColor: '#000',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
  text2: {
    backgroundColor: '#000',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
  value: {
    backgroundColor: '#000',
    fontWeight: 'bold',
    fontSize: 16,
    color: '#09ab2d',
    fontWeight: 'bold',
  },
  expenses: {
    fontSize: 16,
    color: '#e74c3c',
    fontWeight: 'bold',
  },
  item: {
    backgroundColor: "#000",
    padding: 20,
    marginVertical: 8,
  },
  titleValueContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchInput: {
    backgroundColor: '#000',
  },
});