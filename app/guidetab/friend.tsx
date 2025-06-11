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
                source={require('../../assets/images/reaching.jpeg')}
                style={styles.image}
            />

            <View style={styles.content}>
                <Text style={styles.title}>Reaching Out to a Troubled Friend</Text>
                <Text style={styles.meta}>Emergency Prevention • Updated May 2025</Text>

                <Text style={styles.paragraph}>
                    Mental health is just as important as physical well-being. When you notice a friend struggling, your support can make a world of difference.
                </Text>

                <Text style={styles.subheading}>1. Look for Warning Signs</Text>
                <Text style={styles.paragraph}>
                    Isolation, mood swings, and expressions of hopelessness are red flags. Trust your gut if something feels off.
                </Text>

                <Text style={styles.subheading}>2. Start a Gentle Conversation</Text>
                <Text style={styles.paragraph}>
                    Approach them in private. Use non-judgmental language like “I’ve noticed you seem down lately. Want to talk about it?”
                </Text>

                <Text style={styles.subheading}>3. Encourage Professional Help</Text>
                <Text style={styles.paragraph}>
                    Offer to help them find a counsellor or go with them to an appointment. Don’t try to fix everything yourself.
                </Text>

                <Text style={styles.subheading}>Pro Tip 💡</Text>
                <Text style={styles.tip}>
                    Listening without offering solutions is more powerful than you think. Just being there counts.
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
