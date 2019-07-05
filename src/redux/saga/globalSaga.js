import { GET_DATA, ADD_DATA, UPDATE_DATA } from '../types';
import { takeLatest, put, call } from "redux-saga/effects";
import firebase from 'react-native-firebase';

import {
  getData,
  getDataSuccessful,
  updateRecipeSuccessfull,
  addNewDataSuccessfull,
} from '../../redux/action'
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
      yield call(getDataSaga)
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
      yield call(getDataSaga)
      yield put(addNewDataSuccessfull(result));
    }
    // yield put(addNewDataSuccessfull(result));
  } catch (error) {
    console.log(error)
  }
}

export function* watchGlobal() {
  yield takeLatest(GET_DATA, getDataSaga);
  yield takeLatest(ADD_DATA, addNewRecipe);
  yield takeLatest(UPDATE_DATA, updateRecipeSaga);
}