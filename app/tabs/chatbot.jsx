import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, View, Text, TouchableOpacity, TextInput, StyleSheet, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { icons } from '../../constants';

const initialMessages = [
  {
    id: '1',
    text: 'สวัสดีค่ะ!',
    transliteration: 'sà-wàt-dii kâ!',
    translation: 'Hello!',
    speakerIcon: true,
  },
];

const ChatBot = () => {
  const navigation = useNavigation(); // Get navigation object
  const [userInput, setUserInput] = useState(''); // To store the user's input
  const [chatHistory, setChatHistory] = useState(initialMessages); // Start with predefined messages
  const [userMessageCount, setUserMessageCount] = useState(0); // To keep track of user messages

  const handleSend = () => {
    if (userInput.trim()) {
      const newUserMessage = {
        id: `${chatHistory.length + 1}`,
        text: userInput,
        sender: 'user',
      };

      // Increment user message count
      const newMessageCount = userMessageCount + 1;
      setUserMessageCount(newMessageCount);

      const botResponse = getBotResponse(newMessageCount);
      const newBotMessage = {
        id: `${chatHistory.length + 2}`,
        text: botResponse.text,
        transliteration: botResponse.transliteration,
        translation: botResponse.translation,
        speakerIcon: true,
        sender: 'bot',
      };

      setChatHistory([...chatHistory, newUserMessage, newBotMessage]); // Add both user message and bot response
      setUserInput(''); // Clear input after sending
    }
  };

  const getBotResponse = (messageCount) => {
    // Return appropriate bot response based on message count
    if (messageCount === 1) {
      return {
        text: 'คุณสบายดีไหม?',
        transliteration: 'kun sa-baai-dii măi?',
        translation: 'How are you?',
      };
    } else if (messageCount === 2) {
      return {
        text: 'ฉันสบายดี ขอบคุณค่ะ',
        transliteration: 'chán sa-baai-dii khɔ̀ɔp-khun kâ',
        translation: "I'm fine. Thank you.",
      };
    }

    // Fallback response if needed
    return {
      text: 'ฉันไม่เข้าใจ',
      transliteration: 'chán mâi khâo-jai',
      translation: "I don't understand.",
    };
  };

  const handleBackPress = () => {
    navigation.navigate('learn'); // Navigate back to the learn page
  };

  const renderMessage = ({ item }) => {
    if (item.sender === 'user') {
      return (
        <View style={styles.userMessage}>
          <Text style={styles.userText}>{item.text}</Text>
        </View>
      );
    }

    return (
      <View style={styles.aiMessage}>
        <Text style={styles.aiText}>{item.text}</Text>
        {item.transliteration && <Text style={styles.transliteration}>{item.transliteration}</Text>}
        {item.translation && <Text style={styles.translation}>{item.translation}</Text>}
        {item.speakerIcon && (
          <View style={styles.iconsContainer}>
            <Image source={icons.speaker} style={styles.icon2} />
            <Image source={icons.snail} style={styles.icon2} />
          </View>
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Top NavBar */}
      <LinearGradient colors={['#9b05ff', '#ec00ff']} style={styles.navBar}>
        <View style={styles.navHeader}>
          <Text style={styles.title}>ChatBot</Text>
          <TouchableOpacity>
            <Image source={icons.profile} style={styles.profileIcon} />
          </TouchableOpacity>
        </View>

        <View style={styles.iconContainer}>
          <Image source={icons.thaiflag} style={styles.icon} />
          <Image source={icons.fire} style={styles.icon} />
          <Image source={icons.heart} style={styles.icon} />
          <TouchableOpacity>
            <Image source={icons.search} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </LinearGradient>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title2}>Greetings</Text>
        <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
          <Ionicons name="close" size={24} color="#9b05ff" />
        </TouchableOpacity>
      </View>

      {/* Chat Area */}
      <FlatList
        data={chatHistory}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id}
        style={styles.chatArea}
      />

      {/* Input Area */}
      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.micButton}>
          <Ionicons name="mic" size={32} color="#9b05ff" />
        </TouchableOpacity>

        <TextInput
          style={styles.input}
          placeholder="Type your message..."
          value={userInput}
          onChangeText={setUserInput}
          onSubmitEditing={handleSend}
        />

        <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
          <Ionicons name="send" color="#9b05ff" size={25} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  navBar: {
    paddingTop: 30,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  navHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: -15,
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
    marginBottom: 1,
  },
  icon: {
    width: 24,
    height: 24,
  },
  icon2: {
    width: 24,
    height: 24,
    justifyContent: 'space-between',
    marginRight: 13,
    marginTop: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Space between title and close icon
    padding: 16,
  },
  backButton: {
    marginLeft: 16,
  },
  title2: {
    fontSize: 24,
    color: 'black',
  },
  chatArea: {
    flex: 1,
    padding: 16,
  },
  aiMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 20, // Increased padding for bigger message area
    marginBottom: 20, // More spacing between messages
    borderLeftWidth: 6, // Increased the left border width for emphasis
    borderLeftColor: '#9b05ff',
  },
  aiText: {
    fontSize: 20, // Increased font size for better readability
    color: '#333',
  },
  transliteration: {
    fontSize: 16, // Increased font size for transliteration
    color: '#666',
  },
  translation: {
    fontSize: 16, // Increased font size for translation
    color: '#999',
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#9b05ff',
    borderRadius: 12, // Increased the border radius for more roundness
    padding: 15, // Increased padding for bigger user message container
    marginBottom: 20, // More spacing between messages
  },
  userText: {
    fontSize: 18, // Increased font size for user messages
    color: '#fff',
  },
  iconsContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#9b05ff',
    borderRadius: 12,
    padding: 10,
    marginHorizontal: 8,
    backgroundColor: '#f0f0f0',
  },
  micButton: {
    padding: 10,
  },
  sendButton: {
    padding: 10,
  },
});

export default ChatBot;

