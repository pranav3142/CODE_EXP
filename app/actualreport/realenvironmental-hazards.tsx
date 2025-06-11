import React, { useLayoutEffect, useState } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';

const DROPDOWNS = {
  type: { title: 'Type', data: ['FIRE', 'FLOOD', 'HAZARDEOUS MATERIAL', 'HEAT WARNING', 'OTHERS'], multi: false },
  injury: { title: 'Injury', data: ['BURN', 'BLEEDING', 'FAINTING', 'STROKE', 'HEART ATTACK', 'SEIZURE', 'KNOCK ON HEAD', 'NIL'], multi: true },
  severity: { title: 'Severity', data: ['MILD', 'MODERATE', 'SEVERE', 'CRITICAL'], multi: false },
  services: { title: 'Services Required', data: ['AMBULANCE', 'FIRE ENGINE', 'POLICE'], multi: true },
};

export default function CreateReportScreen() {
  const navigation = useNavigation();

  const [dropdownsOpen, setDropdownsOpen] = useState(
    Object.fromEntries(Object.keys(DROPDOWNS).map(k => [k, true]))
  );

  const [selected, setSelected] = useState(
    Object.fromEntries(Object.keys(DROPDOWNS).map(k => [k, DROPDOWNS[k].multi ? [] : null]))
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Report',
      headerStyle: { backgroundColor: '#fff' },
      headerTintColor: '#25292e',
    });
  }, [navigation]);

  const toggleDropdown = (key: string) =>
    setDropdownsOpen(prev => ({ ...prev, [key]: !prev[key] }));

  const handleSelect = (key: string, value: string) => {
    const isMulti = DROPDOWNS[key].multi;
    setSelected(prev => ({
      ...prev,
      [key]: isMulti
        ? prev[key].includes(value)
          ? prev[key].filter((v: string) => v !== value)
          : [...prev[key], value]
        : value,
    }));
    if (!isMulti) {
      setDropdownsOpen(prev => ({ ...prev, [key]: false }));
    }
  };

  const renderDropdown = (key: string) => {
    const { title, data, multi } = DROPDOWNS[key];
    const isOpen = dropdownsOpen[key];
    const value = selected[key];

    return (
      <View style={styles.section} key={key}>
        <TouchableOpacity style={styles.dropdownHeader} onPress={() => toggleDropdown(key)}>
          <Text style={styles.sectionTitle}>{title}</Text>
          <Ionicons name={isOpen ? 'chevron-up' : 'chevron-down'} size={20} color="#999" />
        </TouchableOpacity>

        {isOpen && (
          <View style={styles.typeButtonsContainer}>
            {data.map((item) => {
              const isSelected = multi ? value.includes(item) : value === item;
              return (
                <TouchableOpacity
                  key={item}
                  style={[styles.typeButton, isSelected && styles.typeButtonSelected]}
                  onPress={() => handleSelect(key, item)}
                >
                  <Text style={[styles.typeButtonText, isSelected && styles.typeButtonTextSelected]}>
                    {item}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        )}

        {!isOpen && value && (
          <Text style={styles.selectedOptionText}>
            Selected: {multi ? value.join(', ') : value}
          </Text>
        )}
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      
      <Text style={styles.heading}>Fill in the details</Text>
      <Text style={styles.subheading}>Fill us in on the key details, and we’ll be right with you.</Text>

      {Object.keys(DROPDOWNS).map(renderDropdown)}

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Other information</Text>
        <TextInput
          style={styles.textInput}
          multiline
          placeholder="Other hazards, location details, etc."
          placeholderTextColor="#999"
        />
      </View>

      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Submit Report</Text>
      </TouchableOpacity>
      <View style={{ height: 50 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingHorizontal: 20, paddingTop: 10 },
  progressBarBackground: { height: 6, backgroundColor: '#e5e5e5', borderRadius: 3, marginBottom: 20 },
  progressBarFill: { height: 6, width: '70%', backgroundColor: '#007AFF', borderRadius: 3 },
  heading: { fontSize: 24, fontWeight: 'bold', marginBottom: 8, color: '#333' },
  subheading: { fontSize: 16, color: '#666', marginBottom: 30 },
  section: { marginBottom: 25 },
  sectionTitle: { fontSize: 18, fontWeight: '600', color: '#333' },
  dropdownHeader: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15,
  },
  typeButtonsContainer: { flexDirection: 'row', flexWrap: 'wrap', gap: 10, marginTop: 5 },
  typeButton: { backgroundColor: '#E0E0E0', borderRadius: 20, paddingVertical: 8, paddingHorizontal: 15 },
  typeButtonSelected: { backgroundColor: '#007AFF' },
  typeButtonText: { color: '#333', fontWeight: '500' },
  typeButtonTextSelected: { color: 'white' },
  selectedOptionText: { marginTop: 10, fontSize: 16, color: '#007AFF', fontWeight: '600' },
  textInput: {
    minHeight: 120, backgroundColor: '#f9f9f9', borderRadius: 10, padding: 15,
    fontSize: 16, lineHeight: 22, borderColor: '#e5e5e5', borderWidth: 1, textAlignVertical: 'top', color: '#333',
  },
  submitButton: {
    backgroundColor: '#007AFF', borderRadius: 12, paddingVertical: 18,
    alignItems: 'center', marginTop: 30,
  },
  submitButtonText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
});
