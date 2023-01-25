import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import StackNavigator from './StackNavigator';
import { MovieContext } from './Context';
export default function App() {
  return (
    <>
    <MovieContext>
     <StackNavigator />
      <StatusBar style="auto" />
      </MovieContext>
    </>
  );
}
