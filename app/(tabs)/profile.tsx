import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  LayoutAnimation,
} from 'react-native';
import Collapsible from 'react-native-collapsible';
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const items = [
  { title: 'Important Contacts', content: 'Add or edit contacts that can be reached in emergencies.' },
  { title: 'Notices', content: 'Receive important alerts and safety updates in your area.' },
  { title: 'Devices', content: 'Manage connected devices or sensors.' },
  { title: 'Notifications', content: 'Customize how and when you receive alerts.' },
  { title: 'Appearance', content: 'Switch between light and dark mode.' },
  { title: 'Language', content: 'Set your preferred language.' },
  { title: 'Privacy & Security', content: 'Control your data sharing and security preferences.' },
];

export default function ProfileScreen() {
  const [activeSections, setActiveSections] = useState({});

  const toggleSection = (index) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setActiveSections((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerIcons}>
        <Icon name="heart-outline" size={24} color="black" />
      </View>
      <ScrollView style={styles.container}>
        <View style={styles.profileSection}>
          <View style={styles.avatarContainer}>
            <Image
              source={require('../../assets/images/cat-bite.jpg')}
              style={styles.avatar}
            />
            <TouchableOpacity style={styles.editIcon}>
              <Ionicons name="pencil" size={16} color="#fff" />
            </TouchableOpacity>
          </View>
          <Text style={styles.name}>Amos Loh</Text>
          <Text style={styles.username}>@holsoma</Text>
        </View>

        {items.map((item, index) => (
          <View key={index}>
            <TouchableOpacity style={styles.item} onPress={() => toggleSection(index)}>
              <Text style={styles.itemText}>{item.title}</Text>
              <Ionicons name={activeSections[index] ? 'chevron-up' : 'chevron-down'} size={20} color="#555" />
            </TouchableOpacity>
            <Collapsible collapsed={!activeSections[index]}>
              <Text style={styles.accordionContent}>{item.content}</Text>
            </Collapsible>
          </View>
        ))}

        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  headerIcons: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    marginBottom: 16,
    paddingHorizontal: 16,
    paddingTop: 60,
  },
  profileSection: { alignItems: 'center', padding: 24 },
  avatarContainer: { position: 'relative' },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#eee',
  },
  editIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#000',
    borderRadius: 12,
    padding: 4,
  },
  name: { fontSize: 20, fontWeight: '700', marginTop: 8 },
  username: { color: '#777', fontSize: 14 },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderBottomWidth: 0.5,
    borderColor: '#ddd',
    backgroundColor: '#fff',
  },
  itemText: { fontSize: 16, color: '#000' },
  accordionContent: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    backgroundColor: '#f9f9f9',
    fontSize: 14,
    color: '#444',
  },
  logoutButton: {
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  logoutText: {
    fontSize: 16,
    color: '#d00',
    fontWeight: '500',
  },
});
