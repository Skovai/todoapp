export interface ListState {
  listArray: Array<{
    userId: number
    id: number
    title: string
    completed: boolean
  }>
}

export interface IListData {
  userId: number
  id: number
  title: string
  completed: boolean
}

// Define the root state type
export interface RootState {
  list: ListState
}
