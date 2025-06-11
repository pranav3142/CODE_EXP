import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { useLocalSearchParams, useNavigation } from 'expo-router';

export default function FirstAidArticle() {
    const { title } = useLocalSearchParams();
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Guides',
            headerStyle: {
                backgroundColor: '#fff',
            },
            headerTintColor: '#25292e',
        });
    }, [navigation]);

    return (
        <ScrollView style={styles.container}>
            <Image
                source={require('../../assets/images/cat-bite.jpg')}
                style={styles.image}
            />

            <View style={styles.content}>
                <Text style={styles.title}>Handling an Animal Bite</Text>
                <Text style={styles.meta}>Skills • Updated April 2025</Text>

                <Text style={styles.paragraph}>
                    Animal bites can lead to infections and disease. Here’s what to do if you or someone else is bitten — even by a pet.
                </Text>

                <Text style={styles.subheading}>1. Clean the Wound Immediately</Text>
                <Text style={styles.paragraph}>
                    Rinse the bite under running water for several minutes. Use soap and water to clean the area thoroughly.
                </Text>

                <Text style={styles.subheading}>2. Stop the Bleeding</Text>
                <Text style={styles.paragraph}>
                    Apply gentle pressure with a clean cloth. If bleeding is severe, seek emergency help right away.
                </Text>

                <Text style={styles.subheading}>3. Seek Medical Attention</Text>
                <Text style={styles.paragraph}>
                    Even small bites can lead to infections like rabies or tetanus. A healthcare provider may prescribe antibiotics or vaccines.
                </Text>

                <Text style={styles.subheading}>Pro Tip 💡</Text>
                <Text style={styles.tip}>
                    Try to identify the animal and note its behavior. This info helps doctors determine the right treatment.
                </Text>

            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    image: {
        width: '100%',
        height: 200,
    },
    content: {
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        marginBottom: 8,
    },
    meta: {
        fontSize: 12,
        color: '#777',
        marginBottom: 16,
    },
    paragraph: {
        fontSize: 16,
        lineHeight: 24,
        marginBottom: 16,
        color: '#333',
    },
    subheading: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 8,
        marginTop: 16,
    },
    tip: {
        fontSize: 16,
        fontStyle: 'italic',
        backgroundColor: '#e6f7f7',
        padding: 12,
        borderRadius: 10,
        color: '#005a5a',
    },
});
