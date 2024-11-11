import React, { useEffect } from 'react';
import { Slot, Stack, SplashScreen } from 'expo-router';
import { useFonts } from 'expo-font';

SplashScreen.preventAutoHideAsync(); // Ensure the splash screen does not auto-hide

const AuthLayout = () => {
  // Load custom fonts
  
  return (
    <Stack>
      {/* Define the stack screens */}
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Slot /> {/* This renders the appropriate screen depending on the route */}
    </Stack>
  );
};

export default AuthLayout;