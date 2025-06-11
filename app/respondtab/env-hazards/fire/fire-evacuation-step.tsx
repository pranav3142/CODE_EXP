import React, { useEffect, useState, useLayoutEffect } from 'react';
import { View, Text, StyleSheet, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import Toast from 'react-native-toast-message';
import { useNavigation } from '@react-navigation/native';


export default function FireEvacuationStepScreen() {
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);
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

  const handleSubmit = () => {
    if (input.trim() === '995') {
      router.push('/respondtab/env-hazards/fire/fire-call-success');
    } else {
      setError(true);
    }
  };

  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: 'You managed to evacuate quickly!',
      topOffset: 10,
    });
  };

  useEffect(() => {
    showToast();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Stack.Screen options={{ title: 'Response Training' }} />

      <Image
        source={require('../../../../assets/images/shoppingmallfire.jpg')}
        style={styles.image}
      />

      <Text style={styles.heading}>Safe at Last! What Now?</Text>
      <Text style={styles.paragraph}>
        You’ve managed to escape the building! Now, who do you call to best handle the situation? Enter their number below.
      </Text>

      <TextInput
        placeholder="Who to call?"
        style={styles.input}
        value={input}
        onChangeText={(text) => {
          setInput(text);
          setError(false);
        }}
        keyboardType="default"
      />

      <TouchableOpacity
        style={[styles.button, error && styles.buttonError]}
        onPress={handleSubmit}
      >
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
      <Toast />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  banner: {
    backgroundColor: '#e8f5e9',
    borderRadius: 12,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  bannerTextContainer: {
    flex: 1,
    marginLeft: 8,
    marginRight: 8,
  },
  bannerTitle: {
    fontWeight: '700',
    color: '#2e7d32',
    fontSize: 14,
    marginBottom: 2,
  },
  bannerText: {
    color: '#2e7d32',
    fontSize: 13,
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 10,
    marginBottom: 16,
  },
  heading: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 15,
    color: '#444',
    marginBottom: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#333',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
  },
  buttonError: {
    backgroundColor: '#ff4d4d',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
