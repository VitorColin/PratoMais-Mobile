import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons' 

export default function Actions(){
    return(
        <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
           
            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                <Feather name="percent" size={26} color="#8000ff" />
                </View>
                <Text style={styles.labelButton}>Descontos</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <AntDesign name="enviroment" size={26} color="#8000ff"/>
                </View>
                <Text style={styles.labelButton}>Localização</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <AntDesign name="like1" size={26} color="#8000ff"/>
                </View>
                <Text style={styles.labelButton}>Favoritos</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <AntDesign name="like1" size={26} color="#8000ff"/>
                </View>
                <Text style={styles.labelButton}>Extrato</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        maxHeight: 84,
        marginBottom: 14,
        marginTop: 18,
        paddingEnd: 14,
        paddingStart: 18,
    },
    actionButton:{
        alignItems: 'center',
        marginRight: 70,
    },
    areaButton:{
        backgroundColor: '#000',
        height: 40,
        width: 40,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    labelButton:{
        marginTop: 8,
        textAlign: 'center',
        fontWeight: 'bold',
        color:'#FFF'
    }
})