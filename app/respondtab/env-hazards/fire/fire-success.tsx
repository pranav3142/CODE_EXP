import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function FireSuccessScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <Stack.Screen options={{ title: 'Response Training' }} />

      <View style={styles.banner}>
        <Ionicons name="checkmark-circle" size={20} color="#2e7d32" />
        <View style={styles.bannerTextContainer}>
          <Text style={styles.bannerTitle}>Correct!</Text>
          <Text style={styles.bannerText}>Always ensure yours' and others' safety first by evacuating.</Text>
        </View>
        <Ionicons name="close" size={16} color="#4caf50" />
      </View>

      <Image
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Bangkok_fire_drill_market.jpg' }}
        style={styles.image}
      />

      <Text style={styles.heading}>Time to Evacuate!</Text>
      <Text style={styles.paragraph}>
        You will now try to <Text style={{ fontWeight: 'bold' }}>look for the closest evacuation route</Text>. You
        remember that you can do this by looking for a green “Exit” sign. Press “Next” to begin.
      </Text>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/respondtab/env-hazards/fire/fire-evacuation-step')}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  banner: {
    backgroundColor: '#e8f5e9',
    borderRadius: 12,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  bannerTextContainer: {
    flex: 1,
    marginLeft: 8,
    marginRight: 8,
  },
  bannerTitle: {
    fontWeight: '700',
    color: '#2e7d32',
    fontSize: 14,
    marginBottom: 2,
  },
  bannerText: {
    color: '#2e7d32',
    fontSize: 13,
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 10,
    marginBottom: 16,
  },
  heading: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 15,
    color: '#444',
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});