import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

import { MotiView, AnimatePresence, MotiText } from 'moti'

export default function Moviments({ data }) {
    const [showValue, setShowValue] = useState(false);
    return (
        <TouchableOpacity style={styles.container} onPress={() => setShowValue(!showValue)}>
            <Text style={styles.data}>{data.date} </Text>

            <View style={styles.content}>
                <Text style={styles.label}>{data.label}</Text>

                {showValue ? (
                    <AnimatePresence exitBeforeEnter>
                        <MotiText
                            style={data.type === 1 ? styles.value : styles.expenses}
                            from={{
                                
                            }}
                        >
                            {data.type === 1 ? `R$ ${data.value}` : `R$ -${data.value}`}
                        </MotiText>
                    </AnimatePresence>
                ) : (
                    <AnimatePresence exitBeforeEnter>
                    <MotiView style={styles.skeleton}>

                    </MotiView>
                    </AnimatePresence>
                )}
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 24,
        borderBottomWidth: 0.5,
        borderBottomColor: '#aba6a6',
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
        marginTop: 2,
    },
    data: {
        fontWeight: 'bold',
        fontSize: 16,
        color:'#fff'
    },
    label: {
        fontWeight: 'bold',
        fontSize: 16,
        color:'#fff'
    },
    value: {
        fontSize: 16,
        color: '#09ab2d',
        fontWeight: 'bold',
    },
    expenses: {
        fontSize: 16,
        color: '#e74c3c',
        fontWeight: 'bold',
    },
    skeleton: {
        marginTop: 6,
        width: 80,
        height: 10,
        backgroundColor: '#aba6a6',
        borderRadius: 8,
    }
})