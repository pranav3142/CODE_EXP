import React, { useState ,useLayoutEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { useNavigation } from '@react-navigation/native';

const router = useRouter();



const options = [
  'Call the building manager',
  'Start evacuating',
  'Panic',
  'Wait and see'
];

export default function FireHazardScenario() {
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
    
  const [selected, setSelected] = useState(null);

  return (
    <ScrollView style={styles.container}>
      <Stack.Screen options={{ title: 'Response Training' }} />

      <Image
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Bangkok_fire_drill_market.jpg' }}
        style={styles.image}
      />

      <Text style={styles.questionTitle}>Shopping Mall Fire!</Text>
      <Text style={styles.questionText}>
        You spotted a fire breaking out from a stall at an exhibition in a mall. What do you do first?
      </Text>

      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.option, selected === index && styles.optionSelected]}
          onPress={() => setSelected(index)}>
          <Text style={styles.optionText}>{option}</Text>
          <View style={[styles.radio, selected === index && styles.radioSelected]} />
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
  image: {
    width: '100%',
    height: 180,
    borderRadius: 10,
    marginBottom: 16,
  },
  questionTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 8,
  },
  questionText: {
    fontSize: 15,
    color: '#444',
    marginBottom: 20,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 12,
    justifyContent: 'space-between',
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#999',
  },
  radioSelected: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
  },
  optionSelected: {
    borderColor: '#007AFF',
  },
});
