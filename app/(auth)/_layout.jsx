import React, { useEffect } from 'react';
import { Slot, Stack, SplashScreen } from 'expo-router';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';

SplashScreen.preventAutoHideAsync(); // Ensure the splash screen does not auto-hide

const AuthLayout = () => {
  
  return (
    <Stack>
      {/* Define the stack screens */}
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="sign-up" options={{ headerShown: false }} />
      <Stack.Screen name="sign-in" options={{ headerShown: false }} />
      <Stack.Screen name="learn" options={{ headerShown: false }} />
      <Slot /> {/* This renders the appropriate screen depending on the route */}
    </Stack>
  );
};

export default AuthLayout;