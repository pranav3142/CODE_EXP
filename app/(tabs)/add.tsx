import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useRouter } from 'expo-router';


const router = useRouter();

const categories = [
  {
    title: 'Environmental Hazards',
    description: 'Crises that impact the environment and any people in the area',
  },
  {
    title: 'Medical Emergencies',
    description: 'Health crises that present great danger to a person or group of people',
  },
  {
    title: 'Suspicious Persons/Activities',
    description: 'Investigate persons or activities that may present a security threat',
  },
  {
    title: 'Public Disturbances/Crowd Control',
    description: 'Handle mass panics or otherwise crowds that spiral out of reasonable control',
  },
];

export default function RespondCategoryScreen() {

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: '',
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerTintColor: '#25292e',
    });
  }, [navigation]);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.progressBarBackground}>
        <View style={styles.progressBarFill} />
      </View>

      <Text style={styles.subtitle}>Pick a category</Text>
      <Text style={styles.description}>Select the category of scenario you’d like to train or specialise in.</Text>

      {categories.map((item, index) => (
        <TouchableOpacity key={index} style={styles.card} onPress={() => router.push(`/reporttab/${item.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`)}>

          <Text style={styles.cardTitle}>{item.title}</Text>
          <Text style={styles.cardText}>{item.description}</Text>
          <Ionicons name="chevron-forward" size={20} color="#999" style={styles.cardIcon} />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

export const options = {
  title: 'Response Training',
  headerBackTitleVisible: false,
};

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
    width: '40%',
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
  card: {
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    position: 'relative',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  cardText: {
    fontSize: 13,
    color: '#555',
  },
  cardIcon: {
    position: 'absolute',
    right: 16,
    top: 24,
  },
});