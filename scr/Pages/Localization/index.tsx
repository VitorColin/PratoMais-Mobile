import { useState, useEffect } from 'react';
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native';
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
            <View>
                <TouchableOpacity><View style={styles.areaButton}>
                    <AntDesign name="like1" size={26} color="#8000ff" />
                </View>
                <Text>Favoritos</Text></TouchableOpacity>
            </View>
            
        </View>
    );
    
}
