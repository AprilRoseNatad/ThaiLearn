import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation
import SignInButton from '../components/SignInButton';

export default function SignInScreen() {
  const navigation = useNavigation();
  const [passwordVisible, setPasswordVisible] = useState(false); // State for password visibility

  return (
    <View style={styles.container}>

      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={40} color="#6b00b3" />
      </TouchableOpacity>

      <Text style={styles.title}>SIGN IN</Text>

      {/* Input Container */}
      <View style={styles.inputContainer}>

        {/* Email Input with Icon on the Right */}
        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="Email"
            keyboardType="email-address"
            style={styles.input}
          />
          <Ionicons name="mail" size={20} color="#6b00b3" style={styles.iconRight} />
        </View>

        {/* Password Input with Show/Hide Toggle */}
        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="Password"
            secureTextEntry={!passwordVisible}
            style={styles.input}
          />
          <TouchableOpacity 
            style={styles.eyeIcon}
            onPress={() => setPasswordVisible(prevState => !prevState)}
          >
            <Ionicons 
              name={passwordVisible ? "eye-off" : "eye"} 
              size={20} 
              color="#6b00b3" 
            />
          </TouchableOpacity>
        </View>

      </View>

      {/* Sign In Button */}
      <SignInButton
        title="Sign In"
        handlePress={() => router.push('/tabs/learn')}
      />

      {/* Sign Up Text */}
      <Text style={styles.loginText}>
        Don't have an account?
        <TouchableOpacity onPress={() => navigation.navigate('sign-up')}>
          <Text style={styles.loginLink}> Sign Up</Text>
        </TouchableOpacity>
      </Text>

      <StatusBar backgroundColor="black" style="light" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#6b00b3',
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  iconRight: {
    marginLeft: 10,
  },
  input: {
    flex: 1,
    height: 50,
    paddingVertical: 10,
    fontSize: 16,
    color: '#333',
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
  },
  loginText: {
    marginTop: 15,
    fontSize: 14,
    color: '#666',
  },
  loginLink: {
    color: '#6b00b3',
    fontWeight: 'bold',
  },
  backButton: {
    position: 'absolute',
    top: 15,
    left: 20,
  },
});
