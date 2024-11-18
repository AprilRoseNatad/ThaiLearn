import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity, StyleSheet, } from 'react-native'

const CustomButton = ({title, handlePress, containerStyles, textStyles, isLoading}) => {
  return (
    <TouchableOpacity
       onPress={handlePress}
       activeOpacity={0.7}
       style={styles.custombuttonstyle}
    >
        <Text style={styles.title}>
            {title}
        </Text>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({

custombuttonstyle: {
    backgroundColor: '#6b00b3',
    marginTop: 50,
    height: 70,
    width: 220,
    borderRadius: 40,
},

title: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 14,
    fontSize: 29,
    fontWeight: 'medium',
}
})