import { useState, useEffect } from "react";
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
  FlatList,
  Button,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { AntDesign, Feather } from "@expo/vector-icons";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
  LocationObject,
  watchPositionAsync,
  LocationAccuracy,
} from "expo-location";
import axios from "axios";

import { styles } from "./styles";

const tabelaRestaurantes = [
  {
    id: 1,
    title: "Bon Apetit",
    distancia: "4",
    horario: "11:00  -  15:00",
    latitude: -26.494506137907184,
    longitude: -49.08182589813979,
  },
  {
    id: 2,
    title: "Bimbos",
    distancia: "8",
    horario: "11:00  -  15:00",
    latitude: -26.491368022932928,
    longitude: -49.08277756365694,
  },
  {
    id: 3,
    title: "Tempero de Casa",
    distancia: "10",
    horario: "11:00  -  15:00",
    latitude: -26.494506137907184,
    longitude: -49.08182589813979,
  },
  {
    id: 4,
    title: "Beira Rio",
    distancia: "5",
    horario: "11:00  -  15:00",
    latitude: -26.491368022932928,
    longitude: -49.08277756365694,
  },
  {
    id: 5,
    title: "Marisol",
    distancia: "6",
    horario: "11:00  -  15:00",
    latitude: -26.494506137907184,
    longitude: -49.08182589813979,
  },
  {
    id: 6,
    title: "Burbom",
    distancia: "1",
    horario: "11:00  -  15:00",
    latitude: -26.491368022932928,
    longitude: -49.08277756365694,
  },
];

export default function Localization() {
  const [location, setLocation] = useState<LocationObject | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const [initialRegion, setInitialRegion] = useState(null);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  async function requestLocationPermissions() {
    const { granted } = await requestForegroundPermissionsAsync();
    if (granted) {
      const currentPosition = await getCurrentPositionAsync();
      setLocation(currentPosition);
      //   console.log("Localização atual =>", currentPosition);
    }
  }

//   this.getEstabelecimento();

  useEffect(() => {
    requestLocationPermissions();
  }, []);

  useEffect(() => {
    watchPositionAsync(
      {
        accuracy: LocationAccuracy.Highest,
        timeInterval: 1000,
        distanceInterval: 1,
      },
      (response) => {
        console.log("Nova localização!", response);
        setLocation(response);
      }
    );
  }, []);

  const getEstabelecimento = async () => {
    try {
      const response = await axios.get(
        "http://10.10.119.85:8070/api/Estabelecimento?page=1&pageSize=10"
      );
      const data = response.data.rows;
      console.log(response.data.rows);
      setData(prevData => [...prevData, ...data]);
      setError(null);
    } catch (error) {
      console.error(error);
      // Atualizar o estado usando o hook useState
      setError('Error fetching data');
    }
  };

  const Item = ({ title, distancia, horario, latitude, longitude }) => {
    return (
      <TouchableOpacity
        onPress={() => handleLocationPress(latitude, longitude)}
      >
        <View style={styles.lista}>
          <Text style={styles.text}>
            {title} - {distancia}Km
          </Text>
          <Text style={styles.text2}>{horario}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderItem = ({ item }) => (
    <Item
      title={item.title}
      distancia={item.distancia}
      horario={item.horario}
      latitude={item.latitude}
      longitude={item.longitude}
    />
  );
  useEffect(() => {
    if (selectedLocation) {
      setInitialRegion({
        latitude: selectedLocation.latitude,
        longitude: selectedLocation.longitude,
        latitudeDelta: 0.002,
        longitudeDelta: 0.002,
      });
    }
  }, [selectedLocation]);

  const handleLocationPress = (latitude: number, longitude: number) => {
    setSelectedLocation({ latitude, longitude });
  

        getEstabelecimento();
    

  };
  const renderMarker = () => {
    if (selectedLocation) {
      console.log(selectedLocation.latitude);

      return <Marker coordinate={selectedLocation} />;
    }
    return null;
  };

  return (
    <View style={styles.container}>
      {location && (
        <MapView
          style={styles.map}
          //   -26.494506137907184, -49.08182589813979
          region={initialRegion}
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.002,
            longitudeDelta: 0.002,
          }}
          //   onPress={handleMapPress}
        >
          {renderMarker()}
        </MapView>
      )}
      <View style={styles.container}>
        <Text style={styles.title}>Restaurantes Conveniados</Text>
        <FlatList
          style={styles.list}
          data={tabelaRestaurantes}
          keyExtractor={(item) => String(item.id)}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
}
