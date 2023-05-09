import React from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';

import {MotiView } from 'moti'

export default function Balance({saldo, gastos}) {
    return(
        <MotiView
        style={styles.container}
        from={{
            rotateX: '-100deg',
            opacity: 0,
        }}
        animate={{
            rotateX: '0deg',
            opacity: 1,
        }}
        transition={{
            type: 'timing',
            delay: 300,
            duration: 900,
        }}
        >
            <View style={styles.item}>
                <Text style={styles.itemTitle}>Saldo</Text>
                <View style={styles.content}>
                    <Text style={styles.currencySymbol}>R$</Text>
                    <Text style={styles.balance}>{saldo}</Text>
                </View>
            </View>

            <View style={styles.item}>
                <Text style={styles.itemTitle}>Gastos</Text>
                <View style={styles.content}>
                    <Text style={styles.currencySymbol}>R$</Text>
                    <Text style={styles.expense}>{gastos}</Text>
                </View>
            </View>
        </MotiView>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#000',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingStart: 18,
        paddingEnd: 18,
        marginTop: -24,
        marginStart: 14,
        marginEnd: 14,
        borderRadius: 4,
        paddingTop: 22,
        paddingBottom: 22,
        zIndex: 99,

    },
    itemTitle:{
        fontSize: 20,
        color: '#FFF',

    },
    content:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    currencySymbol:{
        color: '#FFF',
        marginRight: 6,
    },
    balance:{
        fontSize: 22,
        color: '#09ab2d',

    },
    expense: {
        fontSize: 22,
        color: '#E74E3C',
    }
})