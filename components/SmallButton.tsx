import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

export interface ISmallButton {
  title: string
  onPress: () => void
}

const SmallButton = ({ title, onPress }: ISmallButton): JSX.Element => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <Text>{title}</Text>
    </TouchableOpacity>
  )
}

export default SmallButton

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#FFCF5C',
    padding: 10,
    borderRadius: 12,
    marginRight: 10,
    alignItems: 'center'
  }
})
