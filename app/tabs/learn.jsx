import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { images, icons } from '../../constants'; // Importing the images from the centralized file
import { useRouter } from 'expo-router'; // Import the useRouter hook for navigation

const Learn = () => {
  const router = useRouter(); // Initialize the router

  return (
    <View style={styles.container}>
      {/* Top NavBar */}
      <LinearGradient colors={['#9b05ff', '#ec00ff']} style={styles.navBar}>
        <View style={styles.navHeader}>
          <Text style={styles.title}>Learn</Text>
          {/* Navigate to Profile page on icon click */}
          <TouchableOpacity onPress={() => router.push('/profile')}>
            <Image source={icons.profile} style={styles.profileIcon} />
          </TouchableOpacity>
        </View>

        <View style={styles.iconContainer}>
          {/* Using the centralized icons from icons.js */}
          <Image source={icons.thaiflag} style={styles.icon} />
          <Image source={icons.fire} style={styles.icon} />
          <Image source={icons.heart} style={styles.icon} />
          <TouchableOpacity>
            <Image source={icons.search} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </LinearGradient>

      {/* Lesson Categories */}
      <ScrollView contentContainerStyle={styles.menu}>
        <TouchableOpacity style={styles.category}>
          <Image source={images.introduction} style={styles.iconImage} />
          <Text style={styles.categoryText}>Introduction</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.category, styles.fadedCategory]}>
          <Image source={images.greetings} style={styles.iconImage} />
          <Text style={{ fontSize: 18, color: '#555', marginLeft: 15 }}>Greetings and Formalities</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.category, styles.fadedCategory]}>
          <Image source={images.travel} style={styles.iconImage} />
          <Text style={{ fontSize: 18, color: '#555', marginLeft: 15 }}>Travel</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.category, styles.fadedCategory]}>
          <Image source={images.community} style={styles.iconImage} />
          <Text style={{ fontSize: 18, color: '#555', marginLeft: 15 }}>Community</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navBar: {
    paddingTop: 30,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  navHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Ensures the title and profile icon are on opposite ends
    alignItems: 'center',
  },
  title: {
    margin: 0,
    padding: 0,
    marginTop: -15,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
  },
  profileIcon: {
    margin: 0,
    padding: 0,
    width: 40,
    height: 40,
    marginTop: -20,
    borderRadius: 14,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20, // Pushes the icon container below the profile icon
    marginBottom: 1
  },
  icon: {
    width: 24,
    height: 24,
  },
  menu: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  category: {
    backgroundColor: '#f3e9ff',
    borderRadius: 10,
    width: '90%',
    paddingVertical: 20,
    paddingHorizontal: 15,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  fadedCategory: {
    backgroundColor: '#f3e9ff88', // Adjust the alpha for a faded effect
  },
  iconImage: {
    width: 40, // Adjust size for icon-like appearance
    height: 40,
    resizeMode: 'contain', // Ensure the image scales properly
  },
  categoryText: {
    fontSize: 18,
    color: 'black',
    marginLeft: 15,
  },
});

export default Learn;
