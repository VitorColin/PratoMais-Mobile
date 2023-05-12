import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList} from 'react-native';

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

export default function Home(){
    return(
        <View style={styles.container}>
            <Header name="Vitor Colin"/>
            
            <Balance saldo="10.000,00" gastos="-100,00"/>
            
            <Actions/>
            <Text style={styles.title}>Ultimas movimentações</Text>
            <FlatList
            style={styles.list}
            data={list}
            keyExtractor={ (item) => String(item.id)}
            showsVerticalScrollIndicator={false}
            renderItem={ ({ item }) => <Moviments data={item} />}
            />  
        </View>
    )
}

const  styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#000',
        color:'#FFF'
    },
    title:{
        fontSize: 30,
        fontWeight: 'bold',
        margin: 14,
        color:'#FFF'

    },
    list:{
        marginStart: 14,
        marginEnd: 14,
        color:'#FFF'
    }
})