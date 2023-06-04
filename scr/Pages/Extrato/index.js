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
    },
    {
        id: 4,
        label: 'Gratificação',
        value: '500,00',
        date: '01/05/2023',
        type: 1 // Crédito
    },
    {
        id: 5,
        label: 'Burbom',
        value: '20,00',
        date: '11/05/2023',
        type: 0 // Débito
    },
    {
        id: 6,
        label: 'Burbom',
        value: '21,00',
        date: '12/05/2023',
        type: 0 // Débito
    },
    {
        id: 7,
        label: 'Gratificação',
        value: '500,00',
        date: '01/05/2023',
        type: 1 // Crédito
    },
    {
        id: 8,
        label: 'Burbom',
        value: '20,00',
        date: '11/05/2023',
        type: 0 // Débito
    },
    {
        id: 9,
        label: 'Burbom',
        value: '21,00',
        date: '12/05/2023',
        type: 0 // Débito
    },
    {
        id: 10,
        label: 'Gratificação',
        value: '500,00',
        date: '01/05/2023',
        type: 1 // Crédito
    },
    {
        id: 11,
        label: 'Burbom',
        value: '20,00',
        date: '11/05/2023',
        type: 0 // Débito
    },
    {
        id: 12,
        label: 'Burbom',
        value: '21,00',
        date: '12/05/2023',
        type: 0 // Débito
    },
    {
        id: 13,
        label: 'Gratificação',
        value: '500,00',
        date: '01/05/2023',
        type: 1 // Crédito
    },
    {
        id: 14,
        label: 'Burbom',
        value: '20,00',
        date: '11/05/2023',
        type: 0 // Débito
    },
    {
        id: 15,
        label: 'Burbom',
        value: '21,00',
        date: '12/05/2023',
        type: 0 // Débito
    }
]

const Extrato = ({ navigation, route }) => {
    const telaSelecionada = route.params.telaSelecionada;
    console.log(telaSelecionada);

    return (
        <View style={styles.container}>
            {telaSelecionada === 1 && (
                <Text style={styles.title}>Descontos</Text>
            )}

            {telaSelecionada === 2 && (
                <Text style={styles.title}>Favoritos</Text>
            )}

            {telaSelecionada === 3 && (
                <Text style={styles.title}>Extrato</Text>
            )}

            <Search telaSelecionada={telaSelecionada} />
        </View>
    );
};

export default Extrato;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8000ff',
        color: '#FFF',
        marginTop: 0,
        paddingTop: 50,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#FFF',
        paddingBottom: 10,
        paddingLeft: 10,
    }
})