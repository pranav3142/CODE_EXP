import React, { useLayoutEffect } from 'react';
import { ScrollView, View, Image, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { useNavigation } from '@react-navigation/native';

export default function StreetViewTraining() {
  const router = useRouter();

  const handlePressExit = () => {
    router.push('/respondtab/env-hazards/fire/fire-evacuation-step');
  };

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

  return (
    <ScrollView style={styles.container}>
      {/* Horizontal scrollable image */}
      <ScrollView horizontal contentContainerStyle={styles.imageScroll}>
        <View style={styles.imageWrapper}>
          <Image
            source={require('../../../../assets/images/mallpan2.png')}
            style={styles.image}
          />
          <TouchableOpacity
            onPress={handlePressExit}
            style={[styles.exitHotspot, { top: 180, left: 855 }]} 
          />
        </View>
      </ScrollView>

      {/* Text below the image */}
      <Text style={styles.instructions}>
         Find and tap the nearest exit sign to proceed with the fire evacuation.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  imageScroll: {
    paddingBottom: 10,
  },
  imageWrapper: {
    width: 1000, 
    height: 500,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 8,
  },
  exitHotspot: {
    position: 'absolute',
    width: 20,
    height: 20,
    backgroundColor: 'rgba(238, 243, 238, 0.2)', // Transparent in prod
    borderRadius: 6,
  },
  instructions: {
    marginTop: 30,
    fontSize: 16,
    color: '#333',
    lineHeight: 22,
  },
});
