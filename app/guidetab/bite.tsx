import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { useLocalSearchParams, useNavigation } from 'expo-router';

export default function FirstAidArticle() {
  const { title } = useLocalSearchParams();
  const navigation = useNavigation();
    
      useLayoutEffect(() => {
        navigation.setOptions({
          title: 'Guides',
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: '#25292e',
        });
      }, [navigation]);

  return (
    <ScrollView style={styles.container}>
      <Image
        source={require('../../assets/images/cat-bite.jpg')}
        style={styles.image}
      />

      <View style={styles.content}>
        <Text style={styles.title}>First Aid Basics</Text>
        <Text style={styles.meta}>Skills • Updated June 2025</Text>

        <Text style={styles.paragraph}>
          Knowing first aid can save lives. In this guide, we’ll walk through essential first aid responses including CPR, wound care, and shock treatment. Understanding the basics is your first step to being prepared.
        </Text>

        <Text style={styles.subheading}>1. Assess the Situation</Text>
        <Text style={styles.paragraph}>
          Ensure the scene is safe for you and the victim. Do not rush into dangerous environments.
        </Text>

        <Text style={styles.subheading}>2. Call for Help</Text>
        <Text style={styles.paragraph}>
          Dial emergency services immediately. Provide location and nature of the injury clearly.
        </Text>

        <Text style={styles.subheading}>3. Start Basic First Aid</Text>
        <Text style={styles.paragraph}>
          Apply pressure to wounds, check breathing, and start CPR if necessary. Use gloves if available.
        </Text>

        <Text style={styles.subheading}>Pro Tip 💡</Text>
        <Text style={styles.tip}>
          Keep a first aid kit in your home, car, and workplace. Familiarise yourself with its contents regularly.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 200,
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 8,
  },
  meta: {
    fontSize: 12,
    color: '#777',
    marginBottom: 16,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 16,
    color: '#333',
  },
  subheading: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    marginTop: 16,
  },
  tip: {
    fontSize: 16,
    fontStyle: 'italic',
    backgroundColor: '#e6f7f7',
    padding: 12,
    borderRadius: 10,
    color: '#005a5a',
  },
});
