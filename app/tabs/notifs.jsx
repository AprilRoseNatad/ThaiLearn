import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons'; // Import Ionicons for the X icon
import { useRouter } from 'expo-router'; // Import useRouter for navigation

// NotificationCard component for individual notifications
const NotificationCard = ({ message }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.notificationMessage}>{message}</Text>
    </View>
  );
};

const Notifs = () => {
  const router = useRouter(); // Get the router object for navigation

  const notifications = [
    "Want to save your progress? Sign in or Sign up now!",
    "Welcome to ThaiLearn! Please start your journey and enjoy the experience!",
  ];

  return (
    <View style={styles.container}>
      {/* Title Section with Close Icon */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Notifications</Text>
        <TouchableOpacity onPress={() => router.push('./learn')} style={styles.closeButton}>
          <Icon name="close" size={24} color="#9b05ff" />
        </TouchableOpacity>
      </View>

      {notifications.map((message, index) => (
        <NotificationCard key={index} message={message} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // White background
    padding: 16,
  },
  titleContainer: {
    flexDirection: 'row', // Align title and icon in a row
    justifyContent: 'space-between', // Space between title and icon
    alignItems: 'center', // Center items vertically
    marginBottom: 20, // Spacing below the title
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000', // Black title color
  },
  closeButton: {
    padding: 8, // Padding around the button
  },
  card: {
    backgroundColor: '#f0f0f0', // Dim white background color for the card (light gray)
    borderRadius: 8,
    padding: 20,
    marginVertical: 10,
    elevation: 3, // For shadow effect on Android
    shadowColor: '#000', // Shadow color for iOS
    shadowOffset: { width: 0, height: 2 }, // Shadow offset for iOS
    shadowOpacity: 0.3, // Shadow opacity for iOS
    shadowRadius: 4, // Shadow radius for iOS
  },
  notificationMessage: {
    fontSize: 16,
    color: '#000', // Black text color for better contrast
    textAlign: 'left', // Align text to the left
  },
});

export default Notifs;
