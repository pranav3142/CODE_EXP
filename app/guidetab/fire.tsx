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
                source={require('../../assets/images/fire.jpg')}
                style={styles.image}
            />

            <View style={styles.content}>
                <Text style={styles.title}>Spotted a Fire?</Text>
                <Text style={styles.meta}>Emergency Response • Updated May 2025</Text>

                <Text style={styles.paragraph}>
                    Fires can escalate in seconds. Quick, informed actions save lives. This guide outlines what to do if you spot a fire — from detection to evacuation.
                </Text>

                <Text style={styles.subheading}>1. Stay Calm and Evaluate</Text>
                <Text style={styles.paragraph}>
                    Don't panic. Quickly assess the size of the fire and your proximity to exits. Avoid taking unnecessary risks.
                </Text>

                <Text style={styles.subheading}>2. Alert Others and Sound the Alarm</Text>
                <Text style={styles.paragraph}>
                    Notify those around you and activate the nearest fire alarm if available. Every second counts.
                </Text>

                <Text style={styles.subheading}>3. Evacuate Immediately</Text>
                <Text style={styles.paragraph}>
                    Do not try to fight the fire unless it's very small and you're trained. Use marked evacuation routes and avoid elevators.
                </Text>

                <Text style={styles.subheading}>Pro Tip 💡</Text>
                <Text style={styles.tip}>
                    Familiarise yourself with the nearest exits wherever you go — malls, offices, schools. It could save your life.
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
