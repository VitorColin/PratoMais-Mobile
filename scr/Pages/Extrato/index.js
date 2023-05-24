import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Moviments from '../../componentes/Moviments';
import Actions from '../../componentes/Actions';
import Search from '../../componentes/SearchBar';

const list = [
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
        label: 'Burbom',
        value: '21,00',
        date: '12/05/2023',
        type: 0 // Débito
    }
]

const Extrato = ({ navigation }) => {
    return (
            <View style={styles.container}>

                <Text style={styles.title}>Extrato</Text>

                <Search/>

                {/* <FlatList
                    style={styles.list}
                    data={list}
                    keyExtractor={(item) => String(item.id)}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => <Moviments data={item} />}
                /> */}
            </View>
    )
}
export default Extrato

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        color: '#FFF',
        marginTop: 0
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        margin: 40,
        color: '#FFF'

    },
    list: {
        marginStart: 14,
        marginEnd: 14,
        color: '#FFF'
    }
})