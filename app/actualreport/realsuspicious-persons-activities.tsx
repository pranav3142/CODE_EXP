// import React, { useLayoutEffect, useState } from 'react';
// import {
//   View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput,
// } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { useNavigation } from 'expo-router';

// const DROPDOWNS = {
  
//   severity: { title: 'Severity', data: ['MILD', 'MODERATE', 'SEVERE', 'CRITICAL'], multi: false },
//   services: { title: 'Services Required', data: ['AMBULANCE', 'FIRE ENGINE', 'POLICE'], multi: true },
// };

// export default function CreateReportScreen() {
//   const navigation = useNavigation();

//   const [dropdownsOpen, setDropdownsOpen] = useState(
//     Object.fromEntries(Object.keys(DROPDOWNS).map(k => [k, true]))
//   );

//   const [selected, setSelected] = useState(
//     Object.fromEntries(Object.keys(DROPDOWNS).map(k => [k, DROPDOWNS[k].multi ? [] : null]))
//   );

//   useLayoutEffect(() => {
//     navigation.setOptions({
//       title: 'Report',
//       headerStyle: { backgroundColor: '#fff' },
//       headerTintColor: '#25292e',
//     });
//   }, [navigation]);

//   const toggleDropdown = (key: string) =>
//     setDropdownsOpen(prev => ({ ...prev, [key]: !prev[key] }));

//   const handleSelect = (key: string, value: string) => {
//     const isMulti = DROPDOWNS[key].multi;
//     setSelected(prev => ({
//       ...prev,
//       [key]: isMulti
//         ? prev[key].includes(value)
//           ? prev[key].filter((v: string) => v !== value)
//           : [...prev[key], value]
//         : value,
//     }));
//     if (!isMulti) {
//       setDropdownsOpen(prev => ({ ...prev, [key]: false }));
//     }
//   };

//   const renderDropdown = (key: string) => {
//     const { title, data, multi } = DROPDOWNS[key];
//     const isOpen = dropdownsOpen[key];
//     const value = selected[key];

//     return (
//       <View style={styles.section} key={key}>
//         <TouchableOpacity style={styles.dropdownHeader} onPress={() => toggleDropdown(key)}>
//           <Text style={styles.sectionTitle}>{title}</Text>
//           <Ionicons name={isOpen ? 'chevron-up' : 'chevron-down'} size={20} color="#999" />
//         </TouchableOpacity>

//         {isOpen && (
//           <View style={styles.typeButtonsContainer}>
//             {data.map((item) => {
//               const isSelected = multi ? value.includes(item) : value === item;
//               return (
//                 <TouchableOpacity
//                   key={item}
//                   style={[styles.typeButton, isSelected && styles.typeButtonSelected]}
//                   onPress={() => handleSelect(key, item)}
//                 >
//                   <Text style={[styles.typeButtonText, isSelected && styles.typeButtonTextSelected]}>
//                     {item}
//                   </Text>
//                 </TouchableOpacity>
//               );
//             })}
//           </View>
//         )}

//         {!isOpen && value && (
//           <Text style={styles.selectedOptionText}>
//             Selected: {multi ? value.join(', ') : value}
//           </Text>
//         )}
//       </View>
//     );
//   };

//   return (
//     <ScrollView style={styles.container}>
      
//       <Text style={styles.heading}>Fill in the details</Text>
//       <Text style={styles.subheading}>Fill us in on the key details, and we’ll be right with you.</Text>

//       {Object.keys(DROPDOWNS).map(renderDropdown)}

//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Other information</Text>
//         <TextInput
//           style={styles.textInput}
//           multiline
//           placeholder="Other hazards, location details, etc."
//           placeholderTextColor="#999"
//         />
//       </View>

//       <TouchableOpacity style={styles.submitButton}>
//         <Text style={styles.submitButtonText}>Submit Report</Text>
//       </TouchableOpacity>
//       <View style={{ height: 50 }} />
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#fff', paddingHorizontal: 20, paddingTop: 10 },
//   progressBarBackground: { height: 6, backgroundColor: '#e5e5e5', borderRadius: 3, marginBottom: 20 },
//   progressBarFill: { height: 6, width: '70%', backgroundColor: '#007AFF', borderRadius: 3 },
//   heading: { fontSize: 24, fontWeight: 'bold', marginBottom: 8, color: '#333' },
//   subheading: { fontSize: 16, color: '#666', marginBottom: 30 },
//   section: { marginBottom: 25 },
//   sectionTitle: { fontSize: 18, fontWeight: '600', color: '#333' },
//   dropdownHeader: {
//     flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15,
//   },
//   typeButtonsContainer: { flexDirection: 'row', flexWrap: 'wrap', gap: 10, marginTop: 5 },
//   typeButton: { backgroundColor: '#E0E0E0', borderRadius: 20, paddingVertical: 8, paddingHorizontal: 15 },
//   typeButtonSelected: { backgroundColor: '#007AFF' },
//   typeButtonText: { color: '#333', fontWeight: '500' },
//   typeButtonTextSelected: { color: 'white' },
//   selectedOptionText: { marginTop: 10, fontSize: 16, color: '#007AFF', fontWeight: '600' },
//   textInput: {
//     minHeight: 120, backgroundColor: '#f9f9f9', borderRadius: 10, padding: 15,
//     fontSize: 16, lineHeight: 22, borderColor: '#e5e5e5', borderWidth: 1, textAlignVertical: 'top', color: '#333',
//   },
//   submitButton: {
//     backgroundColor: '#007AFF', borderRadius: 12, paddingVertical: 18,
//     alignItems: 'center', marginTop: 30,
//   },
//   submitButtonText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
// });
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRouter } from 'expo-router'; // Added useRouter
import React, { useLayoutEffect, useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

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
    router.push('../');
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView style={styles.container}>

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
                  placeholder="e.g., Chinese, Caucasian, Malay, Indian, etc."
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