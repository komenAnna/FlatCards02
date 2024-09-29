import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headerText}>ElevatedCards</Text>
      <ScrollView horizontal style={styles.container}>
        <View style={[styles.card, styles.cardElevate]}>
            <Text>Calm Down</Text>
        </View>
        <View style={[styles.card, styles.cardElevate]}>
            <Text>Bandana</Text>
        </View>
        <View style={[styles.card, styles.cardElevate]}>
            <Text>City Boys</Text>
        </View>
        <View style={[styles.card, styles.cardElevate]}>
            <Text>Soundgasm</Text>
        </View>
        <View style={[styles.card, styles.cardElevate]}>
            <Text>Charm</Text>
        </View>
        <View style={[styles.card, styles.cardElevate]}>
            <Text>Omo Ope</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10,
      },
      container: {
        padding: 5,
      },
      card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        backgroundColor: '#ccc',
        borderRadius: 10,
        marginHorizontal: 10,
      },
      cardElevate: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 2,
      },
});
