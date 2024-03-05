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

export interface RootState {
  list: ListState
}
