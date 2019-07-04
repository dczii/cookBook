import { GET_DATA, ADD_DATA } from '../types';
import { takeLatest, put, call } from "redux-saga/effects";
import firebase from 'react-native-firebase';

import { getDataSuccessful } from '../../redux/action'

function* getDataSaga(param) {
  try {
    let result = firebase.database().ref('Recipes/').once('value', function (snapshot) {
      return snapshot.val();
    });
    yield put(getDataSuccessful(result));
  } catch (error) {
    console.log(error)
  }
}

function addNewRecipe(param) {
  try {
    firebase.database().ref('Recipes/').push({
        title: 'Veggies',
        ingredients: ['fry','cook','serve'],
        instructions: ['pan','oil','done'],
        imageUrl: 'http://i.imgur.com/FSfvsQl.jpg'
    }).then((data)=>{
        //success callback
        console.log('data ' , data)
    }).catch((error)=>{
        //error callback
        console.log('error ' , error)
    });
  } catch (error) {
    console.log(error)
  }
}

export function* watchGlobal() {
  yield takeLatest(GET_DATA, getDataSaga);
  yield takeLatest(ADD_DATA, addNewRecipe);
}