import { createReducer } from '@reduxjs/toolkit'
import { type ListState } from '../types/types'
import { fetchListFailure, fetchListRequest, fetchListSuccess, updateList } from '../actions/listActions'

const initialState: ListState = {
  listArray: []
}

const listReducer = createReducer(initialState, (builder) => {
  builder.addCase(updateList, (state, action) => {
    return { ...state, loading: false, listArray: action.payload }
  })
  builder.addCase(fetchListRequest, (state) => {
    return { ...state, loading: true, error: null }
  })
  // @ts-expect-error
  builder.addCase(fetchListSuccess, (state, action) => {
    return { ...state, loading: false, listArray: action.payload }
  })
  builder.addCase(fetchListFailure, (state, action) => {
    return { ...state, loading: false, error: action.payload }
  })
})

export default listReducer
