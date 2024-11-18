import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { router } from 'expo-router'
import React from 'react'


const SignUpButton = ({title, handlePress, containerStyles, textStyles, isLoading}) => {
  return (
    <TouchableOpacity
             onPress={handlePress}
             activeOpacity={0.7}
             style={styles.signupbuttonstyle}
          >
              <Text style={styles.title}>
                  {title}
              </Text>
          </TouchableOpacity>
  )
}

export default SignUpButton

const styles = StyleSheet.create({
      
signupbuttonstyle: {
    backgroundColor: '#6b00b3',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
},
    
title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
}
})
    