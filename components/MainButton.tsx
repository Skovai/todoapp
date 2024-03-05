import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

export interface IMainButton {
  title: string
  onPress: () => void
}

const MainButton = ({ title, onPress }: IMainButton): JSX.Element => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}

export default MainButton

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#FFCF5C',
    width: '90%',
    paddingVertical: 10,
    borderRadius: 12,
    alignItems: 'center',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  buttonText: {
    fontSize: 18
  }
})
