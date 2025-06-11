import React, { useState } from 'react';
import { StyleSheet, Dimensions, View, Text } from 'react-native';
import MapView, { Marker, MapPressEvent } from 'react-native-maps';
import { useRouter } from 'expo-router';

export default function MapScreen() {
  const [markers, setMarkers] = useState([]);
  const router = useRouter();

  const handleMapPress = (e: MapPressEvent) => {
    const { latitude, longitude } = e.nativeEvent.coordinate;

    setMarkers(prev => [
      ...prev,
      {
        id: `${Date.now()}`,
        title: 'View Report',
        coordinate: { latitude, longitude },
      },
    ]);

    router.push({
      pathname: '/add',
      params: { lat: latitude.toString(), lng: longitude.toString() },
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Text style={styles.bannerText}>Tap map to report / respond to an incident</Text>
      </View>

      <MapView
        style={styles.map}
        onPress={handleMapPress}
        initialRegion={{
          latitude: 1.3521,
          longitude: 103.8198,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        {markers.map(marker => (
        <Marker
          key={marker.id}
          coordinate={marker.coordinate}
          title={marker.title}
          onCalloutPress={() => {
            const isEven = Math.random() < 0.5; 

            const commonParams = {
              title: marker.title,
              subtitle: marker.subtitle,
              about: marker.about,
              reporter: marker.reporter,
              image: marker.image,
            };

            router.push({
              pathname: isEven ? '../maptabs/fakereport1' : '../maptabs/fakereport2',
              params: commonParams,
            });
          }}
        />
))}

      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  banner: {
    position: 'absolute',
    zIndex: 1,
    top: 70,
    left: 10,
    backgroundColor: 'rgba(0,0,0,0.7)',
    padding: 30,
    width: '95%',
    borderRadius: 10,
    alignItems: 'center',
  },
  bannerText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
