import { configureStore } from '@reduxjs/toolkit'
import listReducer from '../reducers/listReducers'
import rootSaga from '../sagas/sagas'
import createSagaMiddleware from '@redux-saga/core'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: {
    list: listReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware)
})

sagaMiddleware.run(rootSaga)

export default store
