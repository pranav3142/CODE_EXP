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
        source={require('../../assets/images/firstaid.jpeg')}
        style={styles.image}
      />

      <View style={styles.content}>
        <Text style={styles.title}>First Aid Basics</Text>
        <Text style={styles.meta}>Skills • Updated June 2025</Text>

        <Text style={styles.paragraph}>
          Knowing first aid can save lives. In this guide, we’ll walk through essential first aid responses. Understanding the basics is your first step to being prepared.
        </Text>

        <Text style={styles.subheading}>1. Check for Danger</Text>
        <Text style={styles.paragraph}>
            Ensure that the surrounding is safe for you to approach the casualty.
        </Text>

        <Text style={styles.subheading}>2. Check for Response</Text>
        <Text style={styles.paragraph}>
            Tap firmly on the casualty’s shoulders, and ask, “Hello hello, are you ok?”
        </Text>

        <Text style={styles.subheading}>3. Shout for an Ambulance and AED</Text>
        <Text style={styles.paragraph}>
            Ask someone to call 995 for an ambulance, and ask someone else to get the nearest AED.
        </Text>

        <Text style={styles.subheading}>4. Check for Breathing</Text>
        <Text style={styles.paragraph}>
            Look for the rise and fall of the casualty’s chest.
        </Text>

        <Text style={styles.subheading}>5. Early CPR</Text>
        <Text style={styles.paragraph}>
            If the casualty is not breathing, breathing abnormally, or when you are in doubt, start CPR immediately. For every minute that nothing is done to resuscitate the victim, the chance of survival drops by 10%.
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
