import { Image, View, Text } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { icons } from '../../constants';
import { LinearGradient } from 'expo-linear-gradient';

const TabIcon = ({ icon, color, label }) => {
  return (
    <View style={{ alignItems: 'center' }}>
      <Image
        source={icon}
        resizeMode="contain"
        style={{ width: 27, height: 27, tintColor: color, marginTop: 15, marginLeft: -7 }}
      />
      <Text style={{ fontSize: 12, color, marginTop: 5, marginLeft: -7 }}>{label}</Text> 
    </View>
  );
};

const TabsLayout = ({ children }) => {
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={['#dd00ff', '#002cff']} // Blue to Indigo gradient
        style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: 85 }}
      />

      {children ? (
        children // Render passed children, e.g., profile content
      ) : (
        <Tabs
          screenOptions={{
            headerShown: false,
            tabBarStyle: {
              height: 80,
              borderTopWidth: 0,
              backgroundColor: 'transparent', // Make background transparent for gradient
              elevation: 0, // Remove shadow on Android
              shadowOpacity: 0, // Remove shadow on iOS
            },
            tabBarActiveTintColor: '#fff21e', // Active icon color
            tabBarInactiveTintColor: '#FFFFFF', // Inactive icon color
          }}
        >
          <Tabs.Screen
            name="learn"
            options={{
              title: '',
              tabBarIcon: ({ color }) => (
                <TabIcon icon={icons.learn} color={color} label="Learn" />
              ),
              headerShown: false,
            }}
          />
          <Tabs.Screen
            name="chatbot"
            options={{
              title: '',
              tabBarIcon: ({ color }) => (
                <TabIcon icon={icons.chatbot} color={color} label="ChatBot" />
              ),
              headerShown: false,
            }}
          />
          <Tabs.Screen
            name="notifs"
            options={{
              title: '',
              tabBarIcon: ({ color }) => (
                <TabIcon icon={icons.notifs} color={color} label="Notifs" />
              ),
              headerShown: false,
            }}
          />
          <Tabs.Screen
            name="leaderboard"
            options={{
              title: '',
              tabBarIcon: ({ color }) => (
                <TabIcon icon={icons.leaderboard} color={color} label="Leaderboard" />
              ),
              headerShown: false,
            }}
          />
        </Tabs>
      )}
    </View>
  );
};

export default TabsLayout;
