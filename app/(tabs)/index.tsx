import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Dimensions, ImageBackground, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Carousel from 'react-native-reanimated-carousel';

const { width: screenWidth } = Dimensions.get('window');

type RoutePath = any;

export default function HomeScreen() {
  const router = useRouter();
  const data: { title: string; path: RoutePath; image: any }[] = [
    { title: 'First Aid Basics', path: '../guidetab/firstaid', image: require('../../assets/images/firstaid.jpeg') },
    { title: 'Fire Safety', path: '../guidetab/fire', image: require('../../assets/images/fire.jpg') },
    { title: 'Reaching out to a troubled friend', path: '../guidetab/friend', image: require('../../assets/images/reaching.jpeg') },
    { title: 'Handling an Animal Bite', path: '../guidetab/bite', image: require('../../assets/images/cat-bite.jpg') }
  ];

  return (
    <View style={styles.container}>
      <View style={styles.headerIcons}>
        <Icon name="magnify" size={24} color="black" />
        <Icon name="heart-outline" size={24} color="black" />
      </View>

      <ScrollView style={styles.headerBuffer}>
        <View style={styles.contentContainer}>
          <Text style={styles.sectionTitle}>Recommended</Text>
        </View>

        <View style={{ alignItems: 'center', marginBottom: 24 }}>
          <Carousel

            width={screenWidth}
            height={220}
            data={data}
            mode="parallax"
            autoPlay={true}
            autoPlayInterval={1000}
            modeConfig={{
              parallaxScrollingScale: 0.9,
              parallaxScrollingOffset: 50,
              parallaxAdjacentItemScale: 0.75,
            }}
            scrollAnimationDuration={1500}
            renderItem={({ item, index, animationValue }) => {

              return (
                <ImageBackground source={item.image} style={styles.image} imageStyle={styles.imageRadius}>
                  <View style={styles.overlay}>
                    <Pressable onPress={() => router.push(item.path)} hitSlop={10}>
                      <Text style={styles.title}>{item.title}</Text>
                    </Pressable>
                  </View>
                </ImageBackground>

              );
            }}
          />
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

          <TouchableOpacity style={[styles.actionCard, { backgroundColor: '#F35C5C' }]} onPress={() => router.push('../reporttab/cat')}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
  },
  headerBuffer: {
    flex: 1,
  },
  headerIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 6,
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
  image: {
    width: '100%',
    height: 220,
    justifyContent: 'flex-end',
  },
  imageRadius: {
    borderRadius: 16,
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    padding: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});