import { useLocalSearchParams, useNavigation } from 'expo-router';
import React, { useLayoutEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function ReportDetailsScreen() {
  const { title, subtitle, about, reporter, image } = useLocalSearchParams();
  const navigation = useNavigation();
  const [showMoreDetails, setShowMoreDetails] = useState(false);


  useLayoutEffect(() => {
      navigation.setOptions({
        title: 'Report Details',
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerTintColor: '#25292e',
      });
    }, [navigation]);

  const toggleDetails = () => {
    setShowMoreDetails(prev => !prev);
  };
return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/susbag.png')}
        style={styles.image}
      />
      <View style={styles.card}>
        <Text style={styles.alert}>{'Suspicious Bag Alert!'}</Text>

        <View style={styles.section}>
          <Text style={styles.sectionLabel}>ABOUT</Text>
          <Text style={styles.body}>
            {about || 'Suspicious red bag was left unattended under a seat at the train station. '}
          </Text>
        </View>

        {/* The "See details" / "Hide details" button */}
        <TouchableOpacity style={styles.button} onPress={toggleDetails}>
          <Text style={styles.buttonText}>
            {showMoreDetails ? 'Hide details' : 'See details'}
          </Text>
        </TouchableOpacity>

        {/* Conditionally rendered sections */}
        {showMoreDetails && (
          <>
            <View style={styles.section}>
              <Text style={styles.sectionLabel}>Severity</Text>
              <Text style={styles.reporter}>{'Moderate'}</Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionLabel}>Services</Text>
              <Text style={styles.reporter}>{'Ambulance'}</Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionLabel}>Time</Text>
              <Text style={styles.reporter}>{'2:40pm'}</Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionLabel}>CREATED BY</Text>
              <Text style={styles.reporter}>{reporter || 'Abe Foo'}</Text>
            </View>
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  image: { width: '100%', height: 200, borderTopLeftRadius: 0, borderTopRightRadius: 0 },
  card: { margin: 20 },
  alert: { fontSize: 20, fontWeight: 'bold', marginTop: 10, marginBottom: 10 },
  subtitle: { fontSize: 16, color: 'gray', marginBottom: 15 },
  section: { marginBottom: 12 },
  sectionLabel: { fontSize: 12, color: 'gray', fontWeight: '600', marginBottom: 4 },
  body: { fontSize: 14, lineHeight: 20 },
  reporter: { fontSize: 14, fontWeight: '600', color: '#007AFF' },
  button: {
    marginTop: 10,
    borderColor: '#007AFF',
    borderWidth: 1,
    borderRadius: 12,
    paddingVertical: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: { color: '#007AFF', fontWeight: '600' },
});