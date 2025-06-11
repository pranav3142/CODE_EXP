import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import Toast from 'react-native-toast-message';

export default function FireCallSuccessScreen() {
  const router = useRouter();

  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Your report was submitted!',
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
        source={require('../../../assets/images/shoppingmallfire.jpg')}
        style={styles.image}
      />

      <Text style={styles.heading}>Congratulations!</Text>
      <Text style={styles.paragraph}>Continue training in a diverse array of scenarios and you’ll be well equipped to handle any crisis that may befall you.</Text>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/')}>
        <Text style={styles.buttonText}>Home</Text>
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
    marginBottom: 12,
  },
  timer: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 24,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
