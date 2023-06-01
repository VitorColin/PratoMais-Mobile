import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { ListItem, SearchBar } from "react-native-elements";

import Moviments from '../../componentes/Moviments';

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

const Item = ({ title, date, value }) => {
    return (
        <View style={styles.item}>
            <Text style={styles.text}>{date}</Text>
            <Text style={styles.text}>{title}</Text>
            <Text style={styles.text}>{value}</Text>
        </View>
    );
};

// const renderItem = ({ item }) => <Item title={item.title} date={item.date} value={item.value} />;
const renderItem =  ({ item }) => <Moviments data={item} />;
class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            data: DATA,
            error: null,
            searchValue: "",
        };
        this.arrayholder = DATA;
    }

    searchFunction = (text) => {
        const updatedData = this.arrayholder.filter((item) => {
            const item_data = `${item.title.toUpperCase()})`;
            const text_data = text.toUpperCase();
            return item_data.indexOf(text_data) > -1;
        });
        this.setState({ data: updatedData, searchValue: text});
    };

    render() {
        return (
            <View style={styles.container}>
                <SearchBar
                    placeholder="..."
                    round
                    value={this.state.searchValue}
                    onChangeText={(text) => this.searchFunction(text)}
                    autoCorrect={false}
                />
                <FlatList
                    style={styles.list}
                    data={this.state.data}
                    value={this.state.value}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
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
        color: '#FFF'
    },
    item: {
        backgroundColor: "#000",
        padding: 20,
        marginVertical: 8,
    },
});