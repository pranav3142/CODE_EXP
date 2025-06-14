import React, { useState } from 'react';
import { StyleSheet, Dimensions, View, Text } from 'react-native';
import MapView, { Marker, MapPressEvent } from 'react-native-maps';
import { useRouter } from 'expo-router';

export default function MapScreen() {
  const [markers, setMarkers] = useState([]);
  const [nextReportIsFakeReport1, setNextReportIsFakeReport1] = useState(true); // New state to alternate
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

    // Navigate to '/add' as before
    router.push({
      pathname: '/add',
      params: { lat: latitude.toString(), lng: longitude.toString() },
    });
  };

  const handleMarkerCalloutPress = (marker) => {
    const commonParams = {
      title: marker.title,
      subtitle: marker.subtitle,
      about: marker.about,
      reporter: marker.reporter,
      image: marker.image,
    };

    // Determine the next pathname based on the state
    const nextPathname = nextReportIsFakeReport1 ? '../maptabs/fakereport1' : '../maptabs/fakereport2';

    router.push({
      pathname: nextPathname,
      params: commonParams,
    });

    // Toggle the state for the next press
    setNextReportIsFakeReport1(prev => !prev);
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
          latitude: 1.3521, // Singapore's approximate center
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
            // Use the new handler for callout press
            onCalloutPress={() => handleMarkerCalloutPress(marker)}
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
    top: 70, // Adjusted for better visibility, might need further tuning based on header
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