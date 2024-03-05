import { SafeAreaView, StyleSheet, View } from 'react-native'
import TaskList from '../components/TaskList'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchListRequest, updateList } from '../redux/actions/listActions'
import { type RootState } from '../redux/types/types'
import ModalComponent from '../components/Modal'
import MainButton from '../components/MainButton'

const MainScreen = () => {
  const dispatch = useDispatch()
  const [isModalVisible, setModalVisible] = React.useState(false)
  const listData = useSelector((state: RootState) => state.list)
  const openModal = () => {
    setModalVisible(true)
  }

  const closeModal = () => {
    setModalVisible(false)
  }

  React.useEffect(() => {
    dispatch(fetchListRequest())
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <TaskList listArray={listData.listArray} />
      <View style={{ alignItems: 'center' }}>
        <MainButton title='Add Task' onPress={() => { openModal() }} />
      </View>
      <ModalComponent isVisible={isModalVisible} closeModal={closeModal} />
    </SafeAreaView>
  )
}

export default MainScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8E7'
  }
})
