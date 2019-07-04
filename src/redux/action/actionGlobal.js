import {
  GET_DATA,
  GET_DATA_SUCCESSFUL,
  ADD_DATA,
  ADD_DATA_SUCCESSFULL,
  TRIGGER_MODAL
} from '../types'

export const getData = payload => {
  return {
    type: GET_DATA,
    payload,
  }
}

export const getDataSuccessful = payload => {
  return {
    type: GET_DATA_SUCCESSFUL,
    payload,
  }
}

export const addNewData = payload => {
  return {
    type: ADD_DATA,
    payload,
  }
}

export const addNewDataSuccessfull = payload => {
  return {
    type: ADD_DATA_SUCCESSFULL,
    payload,
  }
}
export const triggerModal = payload => {
  return {
    type: TRIGGER_MODAL,
    payload,
  }
}