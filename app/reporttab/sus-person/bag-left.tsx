import React, { useLayoutEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRouter } from 'expo-router'; // Added useRouter

const GENDER_OPTIONS = ['Male', 'Female'];

export default function UnattendedObjectDetailsScreen() {
  const navigation = useNavigation();
  const router = useRouter(); // Initialize useRouter

  const [objectDescription, setObjectDescription] = useState('');
  const [objectLocation, setObjectLocation] = useState('');
  const [otherInformation, setOtherInformation] = useState('');

  const [suspectPresent, setSuspectPresent] = useState<string | null>(null);

  const [gender, setGender] = useState<string | null>(null);
  const [attire, setAttire] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [race, setRace] = useState('');

  const [isGenderOpen, setIsGenderOpen] = useState(true);
  const [isAttireOpen, setIsAttireOpen] = useState(true);
  const [isHeightOpen, setIsHeightOpen] = useState(true);
  const [isWeightOpen, setIsWeightOpen] = useState(true);
  const [isAgeOpen, setIsAgeOpen] = useState(true);
  const [isRaceOpen, setIsRaceOpen] = useState(true);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Report Training",
      headerStyle: { backgroundColor: '#fff' },
      headerTintColor: '#25292e',
    });
  }, [navigation]);

  const toggleSuspectDetailSection = (section: string) => {
    switch (section) {
      case 'gender':
        setIsGenderOpen(!isGenderOpen);
        break;
      case 'attire':
        setIsAttireOpen(!isAttireOpen);
        break;
      case 'height':
        setIsHeightOpen(!isHeightOpen);
        break;
      case 'weight':
        setIsWeightOpen(!isWeightOpen);
        break;
      case 'age':
        setIsAgeOpen(!isAgeOpen);
        break;
      case 'race':
        setIsRaceOpen(!isRaceOpen);
        break;
    }
  };

  const handleSuspectSelect = (value: string) => {
    setSuspectPresent(value);
    if (value === 'No') {
      setGender(null);
      setAttire('');
      setHeight('');
      setWeight('');
      setAge('');
      setRace('');
      setIsGenderOpen(true);
      setIsAttireOpen(true);
      setIsHeightOpen(true);
      setIsWeightOpen(true);
      setIsAgeOpen(true);
      setIsRaceOpen(true);
    }
  };

  const handleGenderSelect = (value: string) => {
    setGender(value);
  };

  const handleSubmitReport = () => {
    console.log("Submitting Report:", {
      objectDescription,
      objectLocation,
      suspectPresent,
      gender: suspectPresent === 'Yes' ? gender : 'N/A',
      attire: suspectPresent === 'Yes' ? attire : 'N/A',
      height: suspectPresent === 'Yes' ? height : 'N/A',
      weight: suspectPresent === 'Yes' ? weight : 'N/A',
      age: suspectPresent === 'Yes' ? age : 'N/A',
      race: suspectPresent === 'Yes' ? race : 'N/A',
      otherInformation,
    });
    // Add the navigation route here
    router.push('/reporttab/sus-person/bag-success');
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView style={styles.container}>
        <Image
          source={require('../../../assets/images/unattendedbag.jpg')}
          style={styles.image}
        />

        <Text style={styles.mainTitle}>Suspicious object or person</Text>

        <View style={styles.headerBox}>
          <Text style={styles.headerText}>
            Give detail on the unattended object and/or suspect.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Object Description</Text>
          <TextInput
            style={styles.textInputMultiLine}
            multiline={true}
            placeholder="e.g., Black backpack, red suitcase, etc. Include any identifying marks or brands."
            placeholderTextColor="#999"
            value={objectDescription}
            onChangeText={setObjectDescription}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Object Location</Text>
          <TextInput
            style={styles.textInputMultiLine}
            multiline={true}
            placeholder="e.g., Near MRT exit, under a bench, specific unit number, etc."
            placeholderTextColor="#999"
            value={objectLocation}
            onChangeText={setObjectLocation}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Suspect</Text>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={[
                styles.typeButton,
                suspectPresent === 'Yes' && styles.typeButtonSelected,
              ]}
              onPress={() => handleSuspectSelect('Yes')}
            >
              <Text style={[
                styles.typeButtonText,
                suspectPresent === 'Yes' && styles.typeButtonTextSelected,
              ]}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.typeButton,
                suspectPresent === 'No' && styles.typeButtonSelected,
              ]}
              onPress={() => handleSuspectSelect('No')}
            >
              <Text style={[
                styles.typeButtonText,
                suspectPresent === 'No' && styles.typeButtonTextSelected,
              ]}>No</Text>
            </TouchableOpacity>
          </View>
        </View>

        {suspectPresent === 'Yes' && (
          <>
            <View style={styles.section}>
              <TouchableOpacity style={styles.dropdownHeader} onPress={() => toggleSuspectDetailSection('gender')}>
                <Text style={styles.sectionTitle}>Gender</Text>
                <Ionicons
                  name={isGenderOpen ? 'chevron-up' : 'chevron-down'}
                  size={20}
                  color="#999"
                />
              </TouchableOpacity>
              {isGenderOpen && (
                <View style={styles.buttonsContainer}>
                  {GENDER_OPTIONS.map((item) => {
                    const isSelected = gender === item;
                    return (
                      <TouchableOpacity
                        key={item}
                        style={[styles.typeButton, isSelected && styles.typeButtonSelected]}
                        onPress={() => handleGenderSelect(item)}
                      >
                        <Text style={[styles.typeButtonText, isSelected && styles.typeButtonTextSelected]}>
                          {item}
                        </Text>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              )}
            </View>

            <View style={styles.section}>
              <TouchableOpacity style={styles.dropdownHeader} onPress={() => toggleSuspectDetailSection('attire')}>
                <Text style={styles.sectionTitle}>Attire</Text>
                <Ionicons
                  name={isAttireOpen ? 'chevron-up' : 'chevron-down'}
                  size={20}
                  color="#999"
                />
              </TouchableOpacity>
              {isAttireOpen && (
                <TextInput
                  style={styles.textInputCompact}
                  placeholder="Red shirt, blue jeans, dark jacket, etc."
                  placeholderTextColor="#999"
                  value={attire}
                  onChangeText={setAttire}
                />
              )}
            </View>

            <View style={styles.section}>
              <TouchableOpacity style={styles.dropdownHeader} onPress={() => toggleSuspectDetailSection('height')}>
                <Text style={styles.sectionTitle}>Height</Text>
                <Ionicons
                  name={isHeightOpen ? 'chevron-up' : 'chevron-down'}
                  size={20}
                  color="#999"
                />
              </TouchableOpacity>
              {isHeightOpen && (
                <TextInput
                  style={styles.textInputCompact}
                  placeholder="e.g., 175cm, Tall, Average"
                  placeholderTextColor="#999"
                  value={height}
                  onChangeText={setHeight}
                  keyboardType="number-pad"
                />
              )}
            </View>

            <View style={styles.section}>
              <TouchableOpacity style={styles.dropdownHeader} onPress={() => toggleSuspectDetailSection('weight')}>
                <Text style={styles.sectionTitle}>Weight</Text>
                <Ionicons
                  name={isWeightOpen ? 'chevron-up' : 'chevron-down'}
                  size={20}
                  color="#999"
                />
              </TouchableOpacity>
              {isWeightOpen && (
                <TextInput
                  style={styles.textInputCompact}
                  placeholder="e.g., 70kg, Slim, Heavy"
                  placeholderTextColor="#999"
                  value={weight}
                  onChangeText={setWeight}
                  keyboardType="number-pad"
                />
              )}
            </View>

            <View style={styles.section}>
              <TouchableOpacity style={styles.dropdownHeader} onPress={() => toggleSuspectDetailSection('age')}>
                <Text style={styles.sectionTitle}>Age</Text>
                <Ionicons
                  name={isAgeOpen ? 'chevron-up' : 'chevron-down'}
                  size={20}
                  color="#999"
                />
              </TouchableOpacity>
              {isAgeOpen && (
                <TextInput
                  style={styles.textInputCompact}
                  placeholder="e.g., 30, Young, Elderly"
                  placeholderTextColor="#999"
                  value={age}
                  onChangeText={setAge}
                  keyboardType="number-pad"
                />
              )}
            </View>

            <View style={styles.section}>
              <TouchableOpacity style={styles.dropdownHeader} onPress={() => toggleSuspectDetailSection('race')}>
                <Text style={styles.sectionTitle}>Race</Text>
                <Ionicons
                  name={isRaceOpen ? 'chevron-up' : 'chevron-down'}
                  size={20}
                  color="#999"
                />
              </TouchableOpacity>
              {isRaceOpen && (
                <TextInput
                  style={styles.textInputCompact}
                  placeholder="e.g., Asian, Caucasian, Malay, Indian, etc."
                  placeholderTextColor="#999"
                  value={race}
                  onChangeText={setRace}
                />
              )}
            </View>
          </>
        )}

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Other information</Text>
          <TextInput
            style={styles.textInputMultiLine}
            multiline={true}
            placeholder="Additional details about the object, suspect's behavior, surrounding environment, or any other relevant information."
            placeholderTextColor="#999"
            value={otherInformation}
            onChangeText={setOtherInformation}
          />
        </View>

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmitReport}>
          <Text style={styles.submitButtonText}>Submit Report</Text>
        </TouchableOpacity>

        <View style={{ height: 50 }} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  mainTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'left',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 20,
    borderRadius: 8,
  },
  headerBox: {
    marginBottom: 15,
  },
  headerText: {
    fontSize: 15,
    color: '#333',
    lineHeight: 22,
    textAlign: 'left',
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  dropdownHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginTop: 5,
    marginBottom: 5,
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
  textInputCompact: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    borderColor: '#e5e5e5',
    borderWidth: 1,
    color: '#333',
    minHeight: 45,
  },
  textInputMultiLine: {
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