import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Import LinearGradient
import { Link } from 'expo-router';
import { images, icons } from '../../constants/images';

export default function App() {
  return (
    
      <View style={styles.container}>
        
        <Link href="./tabs/learn" style={styles.link}>Get Started</Link>
        <Link href="./aboutpage" style={styles.link}>About this app</Link>
        <StatusBar style="auto" />
      </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontFamily: 'Jomhuria',
    fontSize: 80,
    marginBottom: 80,
    color: 'black', // Set text color to white
  },
  link: {
    fontSize: 18,
    marginVertical: 10,
    color: 'black', // Set link text color to white
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: -4
  },
  logo: {
    height: 155,
    width: 500,
  },
});
