import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView,Button , FlatList, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Header from '../../componentes/Header';
import Balance from '../../componentes/Balance';
import Moviments from '../../componentes/Moviments';
import Actions from '../../componentes/Actions';

const list=[    
    {
        id: 1,
        label: 'Gratificação',
        value: '500,00',
        date: '01/05/2023',
        type: 1 // Crédito
    },
    {
        id: 2,
        label: 'Burbom',
        value: '20,00',
        date: '11/05/2023',
        type: 0 // Débito
    },
    {
        id: 3,
        label: 'Burbom',
        value: '21,00',
        date: '12/05/2023',
        type: 0 // Débito
    }
]

const Home = ({navigation})=>{
    return(
        <View style={styles.container}>
            <Header name="Vitor Colin"/>
            

            <Balance saldo="10.000,00" gastos="-100,00"/>
            
            <Actions navigation={navigation}/>
            <View  style={styles.container}>
            
            <Text style={styles.title}>Ultimas movimentações</Text>

            <FlatList
            style={styles.list}
            data={list}
            keyExtractor={ (item) => String(item.id)}
            showsVerticalScrollIndicator={false}
            renderItem={ ({ item }) => <Moviments data={item} />}
            />  
            </View>
           
            {/* <TouchableOpacity onPress={()=>{
                console.log(navigation)
                if (!!navigation){
                    console.log(navigation.navigate)
                    if (!!navigation.navigate){
                        navigation.navigate('Localization')
                    }
                }
            }}><Text>AQUI</Text></TouchableOpacity> */}
        </View>
    )
}
export default Home

const  styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#000',
        color:'#FFF',
        marginTop: 0
    },
    title:{
        fontSize: 30,
        fontWeight: 'bold',
        margin: 15,
        color:'#FFF'

    },
    list:{
        marginStart: 14,
        marginEnd: 14,
        color:'#FFF'
    }
})