import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { FlashList } from '@shopify/flash-list'
import { type ListState } from '../redux/types/types'
import { AntDesign } from '@expo/vector-icons'
import { useDispatch } from 'react-redux'
import { updateList } from '../redux/actions/listActions'
import SmallButton from './SmallButton'

export interface ITaskList extends ListState {
}

const TaskList = ({ listArray }: ITaskList): JSX.Element => {
  const dispatch = useDispatch()
  const array = [...listArray]

  const onTaskDeleteHandler = (id: number) => {
    const newList = listArray.filter((task) => task.id !== id)
    dispatch(updateList([...newList]))
  }

  const onTaskCompleteHandler = (id: number) => {
    const newList = listArray.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    )
    dispatch(updateList([...newList]))
  }

  const onSortById = () => {
    array.sort((a, b) => a.id - b.id)
    dispatch(updateList(array))
  }

  const onSortByCompleted = () => {
    array.sort((a, b) => {
      if (a.completed === b.completed) {
        return a.id - b.id
      }
      return a.completed ? 1 : -1
    })
    dispatch(updateList(array))
  }

  return (
    <View style={styles.container}>
      <FlashList
        data={listArray}
        ListHeaderComponent={
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginVertical: 20 }}>
          <Text>Sort by:</Text>
            <View style={{ flexDirection: 'row' }}>
              <SmallButton title="Sort by id" onPress={() => { onSortById() }}/>
              <SmallButton title="Sort by completed" onPress={() => { onSortByCompleted() }}/>
            </View>
        </View>}
        renderItem={({ item }) =>
          <View style={styles.taskRowContainer}>
            <View style={styles.textContainer}>
              <Text style={item.completed ? { textDecorationLine: 'line-through', color: '#ccc' } : {}} numberOfLines={1} ellipsizeMode="tail">{item.title}</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity onPress={() => { onTaskCompleteHandler(item.id) }} style={styles.buttonContainer}>
                  <AntDesign name="check" size={24} color={item.completed ? 'red' : 'green'} />
                </TouchableOpacity>
              <TouchableOpacity onPress={() => { onTaskDeleteHandler(item.id) }} style={styles.buttonContainer}>
                <AntDesign name="close" size={24} color="red" />
              </TouchableOpacity>
            </View>
          </View>
        }
        estimatedItemSize={50}
      />
    </View>
  )
}

export default TaskList

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '5%'
  },
  taskRowContainer: {
    backgroundColor: '#FFE29D',
    width: '100%',
    padding: 10,
    borderRadius: 12,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textContainer: {
    width: '80%'
  },
  buttonsContainer: {
    flexDirection: 'row',
    width: '20%'
  },
  buttonContainer: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  smallButtonContainer: {
    backgroundColor: '#FFCF5C',
    padding: 10,
    borderRadius: 12,
    marginRight: 10,
    alignItems: 'center'
  }
})
