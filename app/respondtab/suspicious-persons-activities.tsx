import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useRouter, Stack } from 'expo-router';


const router = useRouter();

const scenarios = [
  'Loitering in Restricted Area',
  'Unauthorized Photography',
  'Suspicious Bag or Package',
  'Disguised Identity',
  'Evasive Behavior',
  'Surprise me!'
];

export default function SuspiciousPersonsScreen() {

    const navigation = useNavigation();
    
      useLayoutEffect(() => {
        navigation.setOptions({
          title: 'Response Training',
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: '#25292e',
        });
      }, [navigation]);
      
  return (
    <ScrollView style={styles.container}>
      <Stack.Screen options={{ title: 'Response Training' }} />

      <View style={styles.progressBarBackground}>
        <View style={styles.progressBarFill} />
      </View>

      <Text style={styles.subtitle}>Pick a scenario</Text>
      <Text style={styles.description}>
        Select a specific scenario, or train your situation assessment skills by going in blind.
      </Text>

      {scenarios.map((scenario, index) => (
        <TouchableOpacity key={index} style={styles.scenarioButton}>
          <Text style={styles.buttonText}>{scenario}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  progressBarBackground: {
    height: 6,
    backgroundColor: '#e5e5e5',
    borderRadius: 3,
    marginBottom: 16,
  },
  progressBarFill: {
    height: 6,
    width: '100%',
    backgroundColor: '#007AFF',
    borderRadius: 3,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
  },
  scenarioButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  buttonText: {
    fontSize: 16,
    color: '#333',
  },
});