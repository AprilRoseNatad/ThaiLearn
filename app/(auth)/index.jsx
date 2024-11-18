import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { Link, Redirect, router } from 'expo-router'; // Router for navigation
import { images } from '../../constants'; // Ensure paths to images are correct
import CustomButton from '../components/custombutton';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      
      {/* App Logos */}
      <Image source={images.textlogo} style={styles.textlogo} />
      <Image source={images.imagelogo} style={styles.imagelogo} />

      {/* App Description */}
      <Text style={styles.description1}>
        Discover the fun and easy way to learn Thai at your own pace
      </Text>
      <Image source={images.catchywords} style={styles.catchywords} />
    
      <CustomButton
        title="Get Started"
        handlePress={()=>router.push('/sign-in')}
        containerStyles="w-full mt-7">
      </CustomButton>

      <StatusBar backgroundColor="black" style="light" />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  textlogo: {
  },
  imagelogo: {
    height: 200,
    width: 200,
  },
  description1: {
    fontSize: 23,
    fontWeight: '500',
    color: '#6b00b3',
    textAlign: 'center',
    marginVertical: 20,
  },
  catchywords: {
    marginTop: 30,
    height: 40,
    width: 300,
  },
  getStartedButton: {
    marginTop: 40,
    backgroundColor: '#6b00b3',
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5, 
  },
  buttonText: {
    color: 'white', 
    fontSize: 23,
    fontWeight: '500',
    textAlign: 'center',
  },
});
