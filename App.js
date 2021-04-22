import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Router from "./router/homestartstack";
import {NavigationContainer} from "@react-navigation/native";
import { SafeAreaView } from 'react-native-safe-area-context';
export default function App() {
  return (
    
    <NavigationContainer>
      <StatusBar style="auto" />
      <SafeAreaView style={{flex: 1}}>
      <Router></Router>
    


      </SafeAreaView>

   


    </NavigationContainer>
    
  );
}


