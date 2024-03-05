import React from 'react'
import { TextInput, Modal, StyleSheet, SafeAreaView } from 'react-native'
import MainButton from './MainButton'
import { useDispatch, useSelector } from 'react-redux'
import { type RootState } from '../redux/types/types'
import { updateList } from '../redux/actions/listActions'

export interface IModal {
  isVisible: boolean
  closeModal: () => void
}

const ModalComponent = ({ isVisible, closeModal }: IModal) => {
  const dispatch = useDispatch()
  const [text, onChangeText] = React.useState('')
  const listArray = useSelector((state: RootState) => state.list.listArray)

  const addTaskHandler = () => {
    if (text.length > 0) {
      dispatch(updateList([
        ...listArray,
        {
          userId: 1,
          id: listArray?.length + 1,
          title: text,
          completed: false
        }
      ]))
      closeModal()
      onChangeText('')
    }
  }
  const closeMOdalHandler = () => {
    onChangeText('')
    closeModal()
  }
  return (
    <Modal
      visible={isVisible}
      animationType="fade"
      transparent={true}
      onRequestClose={() => { closeModal() }}
    >
      <SafeAreaView style={styles.container}>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
            />
          <MainButton title='Add Task' onPress={() => { addTaskHandler() }} />
          <MainButton title='Close' onPress={() => { closeMOdalHandler() }} />
      </SafeAreaView>
    </Modal>
  )
}

export default ModalComponent

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFF8E7'
  },
  input: {
    backgroundColor: '#FFCF5C33',
    borderColor: '#FFCF5C',
    borderWidth: 0.5,
    width: '90%',
    padding: 10,
    borderRadius: 12,
    alignItems: 'center'
  }
})
