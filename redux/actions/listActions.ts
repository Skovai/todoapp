import { createAction } from '@reduxjs/toolkit'
import { type IListData, type ListState } from '../types/types'

export const updateList = createAction<IListData[]>('list/update')
export const fetchListRequest = createAction('FETCH_LIST_REQUEST')
export const fetchListSuccess = createAction<ListState>('FETCH_LIST_SUCCESS')
export const fetchListFailure = createAction<string>('FETCH_DATA_FAILURE')
