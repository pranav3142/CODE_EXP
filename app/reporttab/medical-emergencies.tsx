import React, { useLayoutEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from 'expo-router'; 

export default function CreateReportScreen() {
  const navigation = useNavigation();

  const [selectedType, setSelectedType] = useState<string | null>(null);

  const reportTypes = [
    'BURN',
    'BLEEDING',
    'FAINTING',
    'STROKE',
    'HEART ATTACK',
    'SEIZURE',
    'KNOCK ON HEAD',
  ];

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Create a Report',
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerTintColor: '#25292e',
      headerBackTitleVisible: false,
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: 16 }}>
          <Ionicons name="chevron-back" size={24} color="#25292e" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.progressBarBackground}>
        <View style={styles.progressBarFill} />
      </View>

      <Text style={styles.heading}>Fill in the details</Text>
      <Text style={styles.subheading}>
        Fill us in on the key details, and we’ll be right with you.
      </Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Type</Text>
        <Ionicons name="chevron-down" size={20} color="#999" style={styles.dropdownIcon} />
        <View style={styles.typeButtonsContainer}>
          {reportTypes.map((type, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.typeButton,
                selectedType === type && styles.typeButtonSelected,
              ]}
              onPress={() => setSelectedType(type)}
            >
              <Text
                style={[
                  styles.typeButtonText,
                  selectedType === type && styles.typeButtonTextSelected,
                ]}
              >
                {type}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Severity</Text>
        <Ionicons name="chevron-down" size={20} color="#999" style={styles.dropdownIcon} />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Services Required</Text>
        <Ionicons name="chevron-down" size={20} color="#999" style={styles.dropdownIcon} />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Other information</Text>
        <TextInput
          style={styles.textInput}
          multiline={true}
          placeholder="Accessories, behaviour, etc." //
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
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  progressBarBackground: {
    height: 6,
    backgroundColor: '#e5e5e5',
    borderRadius: 3,
    marginBottom: 20,
    width: '100%',
  },
  progressBarFill: {
    height: 6,
    width: '70%',
    backgroundColor: '#007AFF', 
    borderRadius: 3,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  subheading: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
  },
  section: {
    marginBottom: 25,
    position: 'relative',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
    color: '#333',
  },
  dropdownIcon: {
    position: 'absolute',
    right: 0,
    top: 0, 
  },
  typeButtonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  typeButton: {
    backgroundColor: '#E0E0E0', 
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
  typeButtonSelected: {
    backgroundColor: '#007AFF',
  },
  typeButtonText: {
    color: '#333',
    fontWeight: '500',
  },
  typeButtonTextSelected: {
    color: 'white',
  },
  textInput: {
    minHeight: 120,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    lineHeight: 22,
    borderColor: '#e5e5e5',
    borderWidth: 1,
    textAlignVertical: 'top',
    color: '#333',
  },
  submitButton: {
    backgroundColor: '#007AFF',
    borderRadius: 12,
    paddingVertical: 18,
    alignItems: 'center',
    marginTop: 30,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});