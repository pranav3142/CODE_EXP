import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerIcons}>
        <Icon name="magnify" size={24} color="black" />
        <Icon name="heart-outline" size={24} color="black" />
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.sectionTitle}>Recommended</Text>
      </View>

      <View style={styles.recommendContainer}>
        <Image
          source={{ uri: 'https://i.ibb.co/XkjCZ9nL/mathurin-napoly-matnapo-5-K5gy-Pv-KC80-unsplash.jpg' }}
          style={styles.recommendImage}
        />
        <View style={styles.labelContainer}>
          <Text style={styles.imageLabel}>First Aid Basics</Text>
        </View>
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.sectionTitle}>What would you like to do today?</Text>

        <TouchableOpacity style={[styles.actionCard, { backgroundColor: '#3AC0A0' }]} onPress={() => router.push('../respondtab/cat')}>
          <View style={styles.cardContent}>
            <View>
              <Text style={styles.cardTitle}>Respond</Text>
              <Text style={styles.cardDescription}>
                Test your ability to respond efficiently to crisis situations
              </Text>
            </View>
            <Icon name="chevron-right" size={24} color="white" />
          </View>
          <Icon name="run" size={130} color="white" style={styles.cardIcon} />
        </TouchableOpacity>

        <TouchableOpacity style={[styles.actionCard, { backgroundColor: '#F35C5C' }]}>
          <View style={styles.cardContent}>
            <View>
              <Text style={styles.cardTitle}>Report</Text>
              <Text style={styles.cardDescription}>
                Practice making accurate and concise crisis reports
              </Text>
            </View>
            <Icon name="chevron-right" size={24} color="white" />
          </View>
          <Icon name="shield-star" size={130} color="white" style={styles.cardIcon} />
        </TouchableOpacity>
      </View>
    </ScrollView>
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
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 6,
  },
  recommendContainer: {
    flex: 1,
    paddingBottom: 15,
  },
  recommendImage: {
    width: '100%',
    height: 180,
  },
  imageLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  labelContainer: {
    position: 'absolute',
    bottom: 25,
    left: 16,
  },
  actionCard: {
    height: 120,
    borderRadius: 14,
    padding: 16,
    marginVertical: 12,
    position: 'relative',
    overflow: 'hidden',
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 4,
  },
  cardDescription: {
    fontSize: 16,
    color: 'white',
    maxWidth: '70%',
  },
  cardIcon: {
    position: 'absolute',
    bottom: -15,
    right: 40,
  },
});