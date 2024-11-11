import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Importing Ionicons for the settings icon
import { images, icons } from '../constants';

const ProfilePage = () => {
  const handleLogout = () => {
    // Logic for handling logout (e.g., clear user data, navigate to login screen)
    console.log('Logout pressed');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Profile Picture Section */}
      <View style={styles.profileSection}>
        <Image
          source={require('../assets/images/furina1.jpg')} // Ensure the path is correct
          style={styles.profileImage}
        />
        <Text style={styles.name}>Furina</Text>
        <Text style={styles.email}>furina@gmail.com</Text>

        {/* Edit Profile and Settings Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.buttonText}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingsButton}>
            <Icon name="settings" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Statistics Section */}
      <Text style={styles.statsTitle}>Statistics</Text>
      <View style={styles.statsContainer}>
        <View style={styles.statsCardBox}>
          <View style={styles.statCard}>
            <Image source={icons.book} style={styles.icon} />
            <Text style={styles.statTitle}>Learning Progress</Text>
            <Text style={styles.statValue}>0%</Text>
          </View>
          <View style={styles.statCard}>
            <Image source={icons.fire} style={styles.icon} />
            <Text style={styles.statTitle}>Active Streak</Text>
            <Text style={styles.statValue}>0</Text>
          </View>
          <View style={styles.statCard}>
            <Image source={icons.heart} style={styles.icon} />
            <Text style={styles.statTitle}>XP Points</Text>
            <Text style={styles.statValue}>0</Text>
          </View>
        </View>
      </View>

      {/* Achievements Section */}
      <Text style={styles.achievementsTitle}>Achievements</Text>
      <View style={styles.achievementsContainer}>
        <View style={styles.achievementCard}>
          <Text style={styles.achievementTitle}>Committed Learner</Text>
          <Text style={styles.achievementDescription}>Reach 30 days streak</Text>
          <Text style={styles.achievementProgress}>0/10</Text>
        </View>
        <View style={styles.achievementCard}>
          <Text style={styles.achievementTitle}>Fast Learner</Text>
          <Text style={styles.achievementDescription}>Reach 20% learning progress</Text>
          <Text style={styles.achievementProgress}>0/10</Text>
        </View>
        <View style={styles.achievementCard}>
          <Text style={styles.achievementTitle}>Smart Learner</Text>
          <Text style={styles.achievementDescription}>Gain 100 XP points</Text>
          <Text style={styles.achievementProgress}>0/10</Text>
        </View>
      </View>

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1, // Allows the ScrollView to grow
    padding: 20,
    backgroundColor: '#fff',
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50, // Circular profile picture
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 16,
    color: '#777',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-between',
    width: '100%',
  },
  editButton: {
    flex: 1,
    backgroundColor: '#9b05ff',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginRight: 10,
  },
  settingsButton: {
    width: 50,
    backgroundColor: '#9b05ff',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 3
  },
  statsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  statsContainer: {
    marginBottom: 20,
    justifyContent: 'space-between'
  },
  statsCardBox: {
    // Background color for the stats box
    padding: 0,
    marginLeft: -17,
    borderRadius: 10,
    shadowRadius: 1,
    flexDirection: 'row',
  },
  statCard: {
    backgroundColor: '#f0f0f0',
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
    borderColor: '#9b05ff',
    borderWidth: 3,
    alignItems: 'center',
    width: 120,
    textAlign: 'center',
    marginLeft: 5
  },
  statTitle: {
    fontWeight: 'bold',
  },
  statValue: {
    fontSize: 18,
    color: '#6100ff',
  },
  achievementsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  achievementsContainer: {
    marginBottom: 20,
  },
  achievementCard: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  achievementTitle: {
    fontWeight: 'bold',
  },
  achievementDescription: {
    color: '#777',
  },
  achievementProgress: {
    fontWeight: 'bold',
    color: '#6100ff',
  },
  logoutButton: {
    backgroundColor: '#9b05ff', // Red color for logout
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
    fontWeight: 'bold',
    height: 50
  },
  logoutText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  }
});

export default ProfilePage;
