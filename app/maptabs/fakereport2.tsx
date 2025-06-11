import { useLocalSearchParams, useNavigation } from 'expo-router';
import React, { useLayoutEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function ReportDetailsScreen() {
  const { title, subtitle, about, reporter, image } = useLocalSearchParams();
    const navigation = useNavigation();
  

  useLayoutEffect(() => {
      navigation.setOptions({
        title: 'Create a Report',
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerTintColor: '#25292e',
      });
    }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/susbag.png')}
        style={styles.image}
      />
      <View style={styles.card}>
        <Text style={styles.alert}>{title || 'Suspicious Bag Alert!'}</Text>
        <Text style={styles.subtitle}>{subtitle || 'Unattended Bag'}</Text>

        <View style={styles.section}>
          <Text style={styles.sectionLabel}>ABOUT</Text>
          <Text style={styles.body}>
            {about || 'Black bag left unattended in the MRT'}
          </Text>
        </View>

        <View style={styles.section}>
                  <Text style={styles.sectionLabel}>Time</Text>
                  <Text style={styles.reporter}>{'5:20am'}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionLabel}>CREATED BY</Text>
          <Text style={styles.reporter}>{reporter || 'Abe'}</Text>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>See details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  image: { width: '100%', height: 200, borderTopLeftRadius: 0, borderTopRightRadius: 0 },
  card: { margin: 20 },
  alert: { fontSize: 20, fontWeight: 'bold', marginTop: 10 },
  subtitle: { fontSize: 16, color: 'gray', marginBottom: 15 },
  section: { marginBottom: 12 },
  sectionLabel: { fontSize: 12, color: 'gray', fontWeight: '600', marginBottom: 4 },
  body: { fontSize: 14, lineHeight: 20 },
  reporter: { fontSize: 14, fontWeight: '600', color: '#007AFF' },
  button: {
    marginTop: 16,
    borderColor: '#007AFF',
    borderWidth: 1,
    borderRadius: 12,
    paddingVertical: 10,
    alignItems: 'center',
  },
  buttonText: { color: '#007AFF', fontWeight: '600' },
});
