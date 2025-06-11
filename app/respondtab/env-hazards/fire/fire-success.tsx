import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Button } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import Toast from 'react-native-toast-message';

export default function FireSuccessScreen() {
  const router = useRouter();

  

  return (
    <ScrollView style={styles.container}>
      <Stack.Screen options={{ title: 'Response Training' }} />


      <Image
        source={require('../../../../assets/images/shoppingmallfire.jpg')}
        style={styles.image}
      />

      <Text style={styles.heading}>Time to Evacuate!</Text>
      <Text style={styles.paragraph}>
        You will now try to <Text style={{ fontWeight: 'bold' }}>look for the closest evacuation route</Text>. You
        remember that you can do this by looking for a green “Exit” sign. Press “Next” to begin.
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/respondtab/env-hazards/fire/fire-evacuation-step')}>
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
