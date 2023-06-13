import { useState, useEffect } from 'react';
import { TouchableOpacity, View, StyleSheet, Text, FlatList} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import { AntDesign, Feather } from '@expo/vector-icons';
import {
    requestForegroundPermissionsAsync,
    getCurrentPositionAsync,
    LocationObject,
    watchPositionAsync,
    LocationAccuracy
} from 'expo-location'; 

import { styles } from './styles';


const tabelaRestaurantes = [
    {
        id: 1,
        title: 'Bon Apetit',
        distancia: '4',
        horario: '11:00  -  15:00',
    },
    {
        id: 2,
        title: 'Bimbos',
        distancia: '8',
        horario: '11:00  -  15:00',
    },
    {
        id: 3,
        title: 'Tempero de Casa',
        distancia: '10',
        horario: '11:00  -  15:00',
    },
    {
        id: 4,
        title: 'Beira Rio',
        distancia: '5',
        horario: '11:00  -  15:00',
    },
    {
        id: 5,
        title: 'Marisol',
        distancia: '6',
        horario: '11:00  -  15:00',
    },
    {
        id: 6,
        title: 'Burbom',
        distancia: '1',
        horario: '11:00  -  15:00',
    }
];

export default function Localization() {
    const [location, setLocation] = useState<LocationObject | null>(null);

    async function requestLocationPermissions() {
       const { granted } = await requestForegroundPermissionsAsync();
            if (granted) {
                const currentPosition = await getCurrentPositionAsync();
                setLocation(currentPosition);

                console.log("Localização atual =>", currentPosition);
            }
        }
 
    useEffect(() => {
        requestLocationPermissions();
    }, []);

    useEffect(() => {
        watchPositionAsync({
           accuracy: LocationAccuracy.Highest,
           timeInterval: 1000,
           distanceInterval: 1 
        }, (response) => {
            console.log("Nova localização!",response);
            setLocation(response);
        });
    }, []);

    
    const Item = ({ title, distancia, horario }) => {
        return (
            <View style={styles.lista}>
                <Text style={styles.text}>{title}  - {distancia}Km</Text>
                <Text style={styles.text2}>{horario}</Text>
            </View>
        );
    };

const renderItem = ({ item }) => <Item title={item.title} distancia={item.distancia} horario={item.horario} />;
    return (
        <View style={styles.container}>
            {
                location &&
                <MapView
                style={styles.map}
                initialRegion={{
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                    latitudeDelta: 0.002,
                    longitudeDelta: 0.002
                }}
                >
                    <Marker
                    coordinate={{
                        latitude: location.coords.latitude,
                        longitude: location.coords.longitude,
                    }}
                    />
                </MapView>
            }
            <View style={styles.container}>
            <Text style={styles.title}>Ultimas movimentações</Text>

            <FlatList
            style={styles.list}
            data={tabelaRestaurantes}
            keyExtractor={ (item) => String(item.id)}
            showsVerticalScrollIndicator={false}
            renderItem={renderItem}
            />  
            </View>
            
        </View>
    );
    
}
