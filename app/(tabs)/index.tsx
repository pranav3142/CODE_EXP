import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerIcons}>
        <Ionicons name="search" size={24} color="black" />
        <Ionicons name="heart-outline" size={24} color="black" />
      </View>

      <Text style={styles.sectionTitle}>Recommended</Text>
      <Image
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/SAMU_First_Aid_training.jpg' }}
        style={styles.recommendImage}
      />
      <Text style={styles.imageLabel}>First Aid Basics</Text>

      <Text style={styles.sectionTitle}>What would you like to do today?</Text>

      <TouchableOpacity style={[styles.actionCard, { backgroundColor: '#41C5B9' }]}>
        <View style={styles.cardContent}>
          <View>
            <Text style={styles.cardTitle}>Respond</Text>
            <Text style={styles.cardDescription}>
              Test your ability to respond efficiently to crisis situations
            </Text>
          </View>
          <Ionicons name="arrow-forward" size={24} color="white" />
        </View>
        <Ionicons name="walk" size={80} color="white" style={styles.cardIcon} />
      </TouchableOpacity>

      <TouchableOpacity style={[styles.actionCard, { backgroundColor: '#F35C5C' }]}>
        <View style={styles.cardContent}>
          <View>
            <Text style={styles.cardTitle}>Report</Text>
            <Text style={styles.cardDescription}>
              Practice making accurate and concise crisis reports
            </Text>
          </View>
          <Ionicons name="arrow-forward" size={24} color="white" />
        </View>
        <Ionicons name="shield" size={80} color="white" style={styles.cardIcon} />
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  headerIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  recommendImage: {
    width: '100%',
    height: 180,
    borderRadius: 12,
  },
  imageLabel: {
    marginTop: 8,
    fontWeight: '600',
  },
  actionCard: {
    borderRadius: 16,
    padding: 16,
    marginVertical: 12,
    position: 'relative',
    overflow: 'hidden',
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 4,
  },
  cardDescription: {
    fontSize: 14,
    color: 'white',
    maxWidth: '80%',
  },
  cardIcon: {
    position: 'absolute',
    bottom: -10,
    right: -10,
  },
});