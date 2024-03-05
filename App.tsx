import React from 'react';
import { useDispatch, Provider } from 'react-redux';
import store from './redux/store/store'
import MainScreen from './screen/MainScreen';
import { updateList } from './redux/actions/listActions';



const DATA = [
  {
    title: "First Item",
  },
  {
    title: "Second Item",
  },
  {
    title: "Third Item",
  },
  {
    title: "Fourth Item",
  },
];



export default function App() {
  return (
    <Provider store={store}>
      <MainScreen />
    </Provider>
  );
}


