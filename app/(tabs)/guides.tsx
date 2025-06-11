import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const guides = [
  {
    title: 'First Aid Basics',
    category: 'Skills',
    image: require('../../assets/images/firstaid.jpeg'),
    isNew: true,
    route: '../guidetab/firstaid',
  },  
  {
    title: 'Spotted a Fire?',
    category: 'Emergency Response',
    image: require('../../assets/images/fire.jpg'),
    route: '../guidetab/fire',
  },
  {
    title: 'Reaching out to a Troubled Friend',
    category: 'Emergency Prevention',
    image: require('../../assets/images/reaching.jpeg'),
    route: '../guidetab/friend',
  },
  {
    title: 'Handling an Animal Bite',
    category: 'Skills',
    image: require('../../assets/images/cat-bite.jpg'),
    route: '../guidetab/bite',
  },
];

export default function GuidesScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.headerIcons}>
        <Icon name="magnify" size={24} color="black" />
        <Icon name="heart-outline" size={24} color="black" />
      </View>

      <ScrollView style={styles.contentContainer}>
      {guides.map((guide, index) => (
        <TouchableOpacity key={index} style={styles.card} onPress={() => router.push(guide.route)}>
          <Image source={guide.image} style={styles.image} />
          {guide.isNew && <View style={styles.badge}><Text style={styles.badgeText}>NEW</Text></View>}
          <View style={styles.textContainer}>
            <Text style={styles.title}>{guide.title}</Text>
            <Text style={styles.category}>{guide.category}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  headerIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    paddingHorizontal: 16,
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
