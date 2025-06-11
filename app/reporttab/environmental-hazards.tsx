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

  const [selectedTypes, setSelectedTypes] = useState<string | null>(null);
  const [selectedInjuries, setSelectedInjuries] = useState<string[]>([]);
  const [selectedSeverity, setSelectedSeverity] = useState<string | null>(null);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const [isTypeDropdownOpen, setIsTypeDropdownOpen] = useState(true); 
  const [isInjuryDropdownOpen, setIsInjuryDropdownOpen] = useState(true);
  const [isSeverityDropdownOpen, setIsSeverityDropdownOpen] = useState(true);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(true);

  const reportTypes = ['FIRE', 'FLOOD', 'HAZARDEOUS MATERIAL', 'HEAT WARNING', 'OTHERS'];
  const injuryOptions = ['BURN', 'BLEEDING', 'FAINTING', 'STROKE', 'HEART ATTACK', 'SEIZURE', 'KNOCK ON HEAD', 'NIL'];
  const severities = ['MILD', 'MODERATE', 'SEVERE', 'CRITICAL'];
  const services = ['AMBULANCE', 'FIRE ENGINE', 'POLICE'];

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Report Training',
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerTintColor: '#25292e',
    });
  }, [navigation]);

  const toggleDropdown = (dropdown: string) => {
    switch (dropdown) {
      case 'type':
        setIsTypeDropdownOpen(!isTypeDropdownOpen);
        break;
      case 'injury':
        setIsInjuryDropdownOpen(!isInjuryDropdownOpen);
        break;
      case 'severity':
        setIsSeverityDropdownOpen(!isSeverityDropdownOpen);
        break;
      case 'services':
        setIsServicesDropdownOpen(!isServicesDropdownOpen);
        break;
      default:
        break;
    }
  };

  // --- Selection Handlers ---

  // Handler for single-selection dropdowns (Type, Severity)
  const handleSingleSelect = (
    value: string,
    setter: React.Dispatch<React.SetStateAction<string | null>>,
    dropdownCloser: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    setter(value); // Set the selected single value
    dropdownCloser(false); // Close the dropdown after selection for single-select
  };

  // Handler for multi-selection dropdowns (Injury, Services)
  const handleMultiSelect = (
    value: string,
    currentSelections: string[], // The current array of selected items
    setter: React.Dispatch<React.SetStateAction<string[]>> // The setter function for the array
  ) => {
    if (currentSelections.includes(value)) {
      // If the value is already selected, remove it (deselect)
      setter(currentSelections.filter((item) => item !== value));
    } else {
      // If the value is not selected, add it (select)
      setter([...currentSelections, value]);
    }
    // Dropdown remains open to allow for more selections; it closes only via toggleDropdown
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.progressBarBackground}>
        <View style={styles.progressBarFill} />
      </View>

      <Text style={styles.heading}>Fill in the details</Text>
      <Text style={styles.subheading}>
        Fill us in on the key details, and we’ll be right with you.
      </Text>

      {/* Type Dropdown (Single-select) */}
      <View style={styles.section}>
        <TouchableOpacity
          style={styles.dropdownHeader}
          onPress={() => toggleDropdown('type')}
        >
          <Text style={styles.sectionTitle}>Type</Text>
          <Ionicons
            name={isTypeDropdownOpen ? 'chevron-up' : 'chevron-down'}
            size={20}
            color="#999"
          />
        </TouchableOpacity>
        {isTypeDropdownOpen && (
          <View style={styles.typeButtonsContainer}>
            {reportTypes.map((type, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.typeButton,
                  // Apply selected style if the type matches the single selectedTypes
                  selectedTypes === type && styles.typeButtonSelected,
                ]}
                onPress={() =>
                  // Use handleSingleSelect for 'Type'
                  handleSingleSelect(type, setSelectedTypes, setIsTypeDropdownOpen)
                }
              >
                <Text
                  style={[
                    styles.typeButtonText,
                    // Apply selected text style if the type matches the single selectedTypes
                    selectedTypes === type && styles.typeButtonTextSelected,
                  ]}
                >
                  {type}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
        {/* Display selected type when dropdown is closed */}
        {selectedTypes && !isTypeDropdownOpen && (
          <Text style={styles.selectedOptionText}>
            Selected: {selectedTypes}
          </Text>
        )}
      </View>

      {/* Injury Dropdown (Multi-select) */}
      <View style={styles.section}>
        <TouchableOpacity
          style={styles.dropdownHeader}
          onPress={() => toggleDropdown('injury')}
        >
          <Text style={styles.sectionTitle}>Injury</Text>
          <Ionicons
            name={isInjuryDropdownOpen ? 'chevron-up' : 'chevron-down'}
            size={20}
            color="#999"
          />
        </TouchableOpacity>
        {isInjuryDropdownOpen && (
          <View style={styles.typeButtonsContainer}>
            {injuryOptions.map((inj, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.typeButton,
                  // Apply selected style if the injury is present in the selectedInjuries array
                  selectedInjuries.includes(inj) && styles.typeButtonSelected,
                ]}
                onPress={() =>
                  // Use handleMultiSelect for 'Injury'
                  handleMultiSelect(inj, selectedInjuries, setSelectedInjuries)
                }
              >
                <Text
                  style={[
                    styles.typeButtonText,
                    // Apply selected text style if the injury is present in the selectedInjuries array
                    selectedInjuries.includes(inj) && styles.typeButtonTextSelected,
                  ]}
                >
                  {inj}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
        {/* Display selected injuries when dropdown is closed */}
        {selectedInjuries.length > 0 && !isInjuryDropdownOpen && (
          <Text style={styles.selectedOptionText}>Selected: {selectedInjuries.join(', ')}</Text>
        )}
      </View>

      {/* Severity Dropdown (Single-select) */}
      <View style={styles.section}>
        <TouchableOpacity
          style={styles.dropdownHeader}
          onPress={() => toggleDropdown('severity')}
        >
          <Text style={styles.sectionTitle}>Severity</Text>
          <Ionicons
            name={isSeverityDropdownOpen ? 'chevron-up' : 'chevron-down'}
            size={20}
            color="#999"
          />
        </TouchableOpacity>
        {isSeverityDropdownOpen && (
          <View style={styles.typeButtonsContainer}>
            {severities.map((severity, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.typeButton,
                  // Apply selected style if the severity matches the single selectedSeverity
                  selectedSeverity === severity && styles.typeButtonSelected,
                ]}
                onPress={() =>
                  // Use handleSingleSelect for 'Severity'
                  handleSingleSelect(
                    severity,
                    setSelectedSeverity,
                    setIsSeverityDropdownOpen
                  )
                }
              >
                <Text
                  style={[
                    styles.typeButtonText,
                    // Apply selected text style if the severity matches the single selectedSeverity
                    selectedSeverity === severity &&
                      styles.typeButtonTextSelected,
                  ]}
                >
                  {severity}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
        {/* Display selected severity when dropdown is closed */}
        {selectedSeverity && !isSeverityDropdownOpen && (
          <Text style={styles.selectedOptionText}>Selected: {selectedSeverity}</Text>
        )}
      </View>

      {/* Services Required Dropdown (Multi-select) */}
      <View style={styles.section}>
        <TouchableOpacity
          style={styles.dropdownHeader}
          onPress={() => toggleDropdown('services')}
        >
          <Text style={styles.sectionTitle}>Services Required</Text>
          <Ionicons
            name={isServicesDropdownOpen ? 'chevron-up' : 'chevron-down'}
            size={20}
            color="#999"
          />
        </TouchableOpacity>
        {isServicesDropdownOpen && (
          <View style={styles.typeButtonsContainer}>
            {services.map((service, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.typeButton,
                  // Apply selected style if the service is present in the selectedServices array
                  selectedServices.includes(service) && styles.typeButtonSelected,
                ]}
                onPress={() =>
                  // Use handleMultiSelect for 'Services'
                  handleMultiSelect(service, selectedServices, setSelectedServices)
                }
              >
                <Text
                  style={[
                    styles.typeButtonText,
                    // Apply selected text style if the service is present in the selectedServices array
                    selectedServices.includes(service) && styles.typeButtonTextSelected,
                  ]}
                >
                  {service}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
        {/* Display selected services when dropdown is closed */}
        {selectedServices.length > 0 && !isServicesDropdownOpen && (
          <Text style={styles.selectedOptionText}>
            Selected: {selectedServices.join(', ')}
          </Text>
        )}
      </View>

      {/* Other Information Input */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Other information</Text>
        <TextInput
          style={styles.textInput}
          multiline={true}
          placeholder="Other hazards, location details, etc."
          placeholderTextColor="#999"
        />
      </View>

      {/* Submit Button */}
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
    color: '#333',
  },
  dropdownHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  typeButtonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginTop: 5,
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
  selectedOptionText: {
    marginTop: 10,
    fontSize: 16,
    color: '#007AFF',
    fontWeight: '600',
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