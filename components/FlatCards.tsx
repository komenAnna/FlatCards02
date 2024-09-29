import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headerText}>FlatCards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
            <Text>Rema</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
            <Text>Asake</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
            <Text>Burna</Text>
        </View>
      </View>
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
    container:{
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        padding: 5,
    },
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        borderRadius: 10,
        marginHorizontal: 10,
        },
    cardOne: {
        backgroundColor:'red',
    },
    cardTwo: {
        backgroundColor:'red',
    },
    cardThree: {
        backgroundColor:'red',
    },
});
