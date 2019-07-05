import { GET_DATA, ADD_DATA, UPDATE_DATA, DELETE_DATA } from '../types';
import { takeLatest, put, call } from "redux-saga/effects";
import firebase from 'react-native-firebase';

import {
  getData,
  getDataSuccessful,
  updateRecipeSuccessfull,
  addNewDataSuccessfull,
} from '../../redux/action'
import { Api } from './Api'

function* getRecipeList(param) {
  try {
    let result = yield call(Api.getFirebaseData)
    yield put(getDataSuccessful(result));
    
  } catch (error) {
    console.log(error)
  }
}

function* updateRecipe(param) {
  try {
    let result = yield call(Api.updateFirebaseData, param.payload)
    
    if(result) {
      yield call(getRecipeList)
      yield put(updateRecipeSuccessfull()); 
    }
  } catch (error) {
    console.log(error)
  }
}

function* addNewRecipe(param) {
  try {
    let result = yield call(Api.putFirebaseData, param)
    if(result) {
      yield call(getRecipeList)
      yield put(addNewDataSuccessfull(result));
    }
  } catch (error) {
    console.log(error)
  }
}

function* deleteRecipe(param) {
  try {
    let result = yield call(Api.deleteFirebaseData, param.payload)
    if(result) {
      yield call(getRecipeList)
    }
  } catch (error) {
    console.log(error)
  }
}

export function* watchGlobal() {
  yield takeLatest(GET_DATA, getRecipeList);
  yield takeLatest(ADD_DATA, addNewRecipe);
  yield takeLatest(UPDATE_DATA, updateRecipe);
  yield takeLatest(DELETE_DATA, deleteRecipe);
}