import React, { useState, useLayoutEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { useNavigation } from '@react-navigation/native';


const options = [
  'Call the building manager',
  'Start evacuating',
  'Panic',
  'Wait and see'
];

const correctIndex = 1;

export default function FireHazardScenario() {
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();

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

  const handlePress = (index: number) => {
    setSelected(index);
    setSubmitted(true);
    if (index === correctIndex) {
      setTimeout(() => {
        router.push('/respondtab/env-hazards/fire/fire-success');
      }, 500);
    }
  };

  return (
    <>
      <ScrollView style={styles.container}>
        <Stack.Screen options={{ title: 'Response Training' }} />

        <Image
          source={require('../../../../assets/images/shoppingmallfire.jpg')}
          style={styles.image}
        />

        <Text style={styles.questionTitle}>Shopping Mall Fire!</Text>
        <Text style={styles.questionText}>
          You spotted a fire breaking out from a stall at an exhibition in a mall. What do you do first?
        </Text>

        {options.map((option, index) => {
          const isSelected = selected === index;
          const isWrong = submitted && isSelected && index !== correctIndex;

          return (
            <TouchableOpacity
              key={index}
              style={[styles.option, isSelected && styles.optionSelected, isWrong && styles.optionWrong]}
              onPress={() => handlePress(index)}>
              <Text style={styles.optionText}>{option}</Text>
              <View
                style={[styles.radio, isSelected && styles.radioSelected, isWrong && styles.radioWrong]}
              />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </>
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
  optionSelected: {
    borderColor: '#007AFF',
  },
  radioSelected: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
  },
  optionWrong: {
    borderColor: '#ff4d4d',
  },
  radioWrong: {
    backgroundColor: '#ff4d4d',
    borderColor: '#ff4d4d',
  },
});