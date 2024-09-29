import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import AlbumCards from './components/AlbumCards';

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <FlatCards/>
          <ElevatedCards/>
          <AlbumCards/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
