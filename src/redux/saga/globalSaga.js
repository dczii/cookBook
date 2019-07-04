import { GET_DATA, ADD_DATA, UPDATE_DATA } from '../types';
import { takeLatest, put, call } from "redux-saga/effects";
import firebase from 'react-native-firebase';

import { getData, getDataSuccessful,updateRecipeSuccessfull } from '../../redux/action'
import { Api } from './Api'

function* getDataSaga(param) {
  try {
    let result = yield call(Api.getFirebaseData)
    yield put(getDataSuccessful(result));
    
  } catch (error) {
    console.log(error)
  }
}

function* updateRecipeSaga(param) {
  try {
    let result = yield call(Api.updateFirebaseData, param.payload)
    
    if(result) {
      getData()
      yield put(updateRecipeSuccessfull()); 
    }
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
  yield takeLatest(UPDATE_DATA, updateRecipeSaga);
}