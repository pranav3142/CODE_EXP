import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Toast from 'react-native-toast-message';

export default function TabLayout() {
  return (
    <>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            height: 90,
            paddingBottom: 10,
            paddingTop: 10,
            backgroundColor: '#fff',
            borderTopWidth: 0.3,
            borderTopColor: '#ccc',
          },
        }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color }) => <Ionicons size={24} name="home" color={color} />,
          }}
        />
        <Tabs.Screen
          name="map"
          options={{
            title: 'Map',
            tabBarIcon: ({ color }) => <Ionicons size={24} name="map" color={color} />,
          }}
        />
        <Tabs.Screen
          name="add"
          options={{
            title: '',
            tabBarIcon: ({ color }) => (
              <View style={styles.centerTab}>
                <Ionicons name="add" size={32} color="white" />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="guides"
          options={{
            title: 'Guides',
            tabBarIcon: ({ color }) => <Ionicons size={24} name="book" color={color} />,
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            tabBarIcon: ({ color }) => <Ionicons size={24} name="person" color={color} />,
          }}
        />
      </Tabs>
      <Toast />
    </>
  );
}

const styles = StyleSheet.create({
  centerTab: {
    backgroundColor: '#007AFF',
    borderRadius: 35,
    width: 70,
    height: 70,
    marginTop: -10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
