import { View, Image, Text, FlatList, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; 
import { images, icons } from '../../constants';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window'); // Get the screen dimensions

const dummyAccounts = [
  { id: '1', username: 'Yoko', score: 567, streak: 67 },
  { id: '2', username: 'Wan', score: 560, streak: 60 },
  { id: '3', username: 'Anda', score: 556, streak: 54 },
  { id: '4', username: 'Tan', score: 551, streak: 50 },
  { id: '5', username: 'Faye', score: 547, streak: 46 },
  { id: '6', username: 'Leo', score: 543, streak: 44 },
  { id: '7', username: 'Mira', score: 541, streak: 41 },
  { id: '8', username: 'Nina', score: 539, streak: 38 },
  { id: '9', username: 'Owen', score: 536, streak: 32 },
  { id: '10', username: 'Paul', score: 534, streak: 29 },
];

const Leaderboard = () => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.navigate('learn');
  };

  const renderTopUser = (item, rank) => (
    <View style={styles.otherContainer}>
      <View style={styles.rankContainer}>
        <Icon
          name="medal"
          size={24}
          color={rank === 1 ? 'gold' : rank === 2 ? 'silver' : '#cd7f32'}
        />
        <Text style={styles.rank}>{rank}. </Text>
      </View>
      <Text style={styles.username}>{item.username}</Text>
      <View style={styles.statsContainer}>
        <Image source={icons.heart} style={styles.icon} />
        <Text style={styles.score}>{item.score} points</Text>
        <Image source={icons.fire} style={styles.icon} />
        <Text style={styles.streak}>{item.streak} streak</Text>
      </View>
    </View>
  );

  const renderItem = ({ item, index }) => (
    <View style={styles.otherContainer}>
      <Text style={styles.rank}>{index + 4}. </Text>
      <Text style={styles.username}>{item.username}</Text>
      <View style={styles.statsContainer}>
        <Image source={icons.heart} style={styles.icon} />
        <Text style={styles.score}>{item.score} points</Text>
        <Image source={icons.fire} style={styles.icon} />
        <Text style={styles.streak}>{item.streak} streak</Text>
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Leaderboard</Text>
        <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
          <Icon name="close" size={24} color="#9b05ff" />
        </TouchableOpacity>
      </View>

      <View style={styles.topContainer}>
        {renderTopUser(dummyAccounts[0], 1)}
        {renderTopUser(dummyAccounts[1], 2)}
        {renderTopUser(dummyAccounts[2], 3)}
      </View>
      <FlatList
        data={dummyAccounts.slice(3)}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.list}
        scrollEnabled={false}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  topContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  otherContainer: {
    marginVertical: 10,
    width: width * 0.9, // Adjusting container size for mobile
    padding: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  statsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rankContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rank: {
    fontSize: 18,
    color: 'black',
    marginRight: 5,
  },
  username: {
    fontSize: 18,
    color: '#333',
    flex: 1,
    textAlign: 'left',
  },
  score: {
    fontSize: 18,
    color: '#9b05ff',
  },
  streak: {
    fontSize: 18,
    color: '#9b05ff',
  },
  icon: {
    height: 25,
    width: 25,
    marginRight: 3,
  },
});

export default Leaderboard;
