import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const guides = [
  {
    title: 'First Aid Basics',
    category: 'Skills',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/SAMU_First_Aid_training.jpg',
    isNew: true,
    route: 'guide-first-aid',
  },
  {
    title: 'Spotted a Fire?',
    category: 'Emergency Response',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Building_on_Fire.jpg',
    route: 'guide-fire',
  },
  {
    title: 'Reaching out to a Troubled Friend',
    category: 'Emergency Prevention',
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Hand_in_Pool.jpg',
    route: 'guide-friend',
  },
];

export default function GuidesScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerIcons}>
        <Ionicons name="search" size={24} color="black" />
        <Ionicons name="heart-outline" size={24} color="black" />
      </View>

      {guides.map((guide, index) => (
        <TouchableOpacity key={index} style={styles.card} onPress={() => router.push(guide.route)}>
          <Image source={{ uri: guide.image }} style={styles.image} />
          {guide.isNew && <View style={styles.badge}><Text style={styles.badgeText}>NEW</Text></View>}
          <View style={styles.textContainer}>
            <Text style={styles.title}>{guide.title}</Text>
            <Text style={styles.category}>{guide.category}</Text>
          </View>
        </TouchableOpacity>
      ))}
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
  card: {
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 16,
    backgroundColor: '#f9f9f9',
  },
  image: {
    width: '100%',
    height: 160,
  },
  textContainer: {
    padding: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  category: {
    fontSize: 14,
    color: '#666',
  },
  badge: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#007AFF',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  badgeText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
});
