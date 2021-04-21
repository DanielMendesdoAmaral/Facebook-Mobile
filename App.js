import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import * as LocalAuthentication from 'expo-local-authentication'; //desinstalar

import ReactNativeBiometrics from 'react-native-biometrics'

export default function App() {
  const logar = () => {
    ReactNativeBiometrics
      .createKeys("Confirme sua digital")
      .then(result => {
        console.log(result)
      })
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <TouchableOpacity onPress={logar}>
        <Text>Logar</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
