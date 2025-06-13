import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  LayoutAnimation,
  Switch,
} from 'react-native';
import Collapsible from 'react-native-collapsible';
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function ProfileScreen() {
  const [activeSections, setActiveSections] = useState({});

  const [settings, setSettings] = useState({
    pushAlerts: true,
    darkMode: false,
    notifications: true,
    language: 'English',
    dataSharing: true,
  });

  const toggleSection = (index) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setActiveSections((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const toggleSetting = (key) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const items = [
    {
      title: 'Important Contacts',
      renderContent: () => (
        <View>
          <Text style={styles.accordionContent}>Add or edit emergency contacts.</Text>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionButtonText}>Add New Contact</Text>
          </TouchableOpacity>
        </View>
      ),
    },
    {
      title: 'Devices',
      renderContent: () => (
        <View>
          <Text style={styles.accordionContent}>Connect and manage external devices.</Text>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionButtonText}>Link New Device</Text>
          </TouchableOpacity>
        </View>
      ),
    },
    {
      title: 'Notifications',
      renderContent: () => (
        <View>
          <View style={styles.switchRow}>
            <Text style={styles.accordionContent}>Enable or disable app notifications.</Text>
            <Switch
              value={settings.notifications}
              onValueChange={() => toggleSetting('notifications')}
            />
          </View>
          <View style={styles.switchRow}>
            <Text style={styles.accordionContent}>Receive safety alerts and updates.</Text>
            <Switch
              value={settings.pushAlerts}
              onValueChange={() => toggleSetting('pushAlerts')}
            />
          </View>
        </View>
      ),
    },
    {
      title: 'Appearance',
      renderContent: () => (
        <View style={styles.switchRow}>
          <Text style={styles.accordionContent}>Toggle dark mode on or off.</Text>
          <Switch
            value={settings.darkMode}
            onValueChange={() => toggleSetting('darkMode')}
          />
        </View>
      ),
    },
    {
      title: 'Language',
      renderContent: () => (
        <View>
          <Text style={styles.accordionContent}>Current language: {settings.language}</Text>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionButtonText}>Change Language</Text>
          </TouchableOpacity>
        </View>
      ),
    },
    {
      title: 'Privacy & Security',
      renderContent: () => (
        <View style={styles.switchRow}>
          <Text style={styles.accordionContent}>Send anonymised data to help us improve the app.</Text>
          <Switch
            value={settings.dataSharing}
            onValueChange={() => toggleSetting('dataSharing')}
          />
        </View>
      ),
    },
  ];

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
              {item.renderContent()}
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
    flex: 1,
    textAlign: 'left',
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
  actionButton: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginHorizontal: 24,
    marginBottom: 12,
    alignItems: 'center',
  },
  actionButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 8,
    backgroundColor: '#f9f9f9',
  },
});
