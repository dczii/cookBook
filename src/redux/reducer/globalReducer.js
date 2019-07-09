import {
  GET_DATA,
  GET_DATA_SUCCESSFUL,
  ADD_DATA,
  ADD_DATA_SUCCESSFULL,
  TRIGGER_MODAL,
  EDIT_DATA,
  UPDATE_DATA_SUCCESSFULL,
  LOGIN,
  REGISTER,
  LOGIN_SUCCESFULL,
  UPDATE_DATA
} from '../types'

  const initialState = {
      isLoading: false,
      openModal: false,
      recipesData: [],
      editData: {},
      modalView: '',
      user: {}
  }

export default (state = initialState, action) => {
  switch(action.type) {

      case GET_DATA:
        return { ...state, isLoading: true }
      case GET_DATA_SUCCESSFUL:
        return { ...state, isLoading: false, recipesData: action.payload }
      case ADD_DATA_SUCCESSFULL:
        return { ...state, openModal: false, modalView: '', isLoading: false }
      case TRIGGER_MODAL:
        return { ...state, ...action.payload }
      case LOGIN:
        return { ...state, isLoading: true }
      case REGISTER:
        return { ...state, isLoading: true }
      case ADD_DATA:
        return { ...state, isLoading: true }
      case UPDATE_DATA:
        return { ...state, isLoading: true }
      case LOGIN_SUCCESFULL:
        return { ...state, isLoading: false, user: action.payload }
      case EDIT_DATA:
        return { ...state, editData: action.payload }
      case UPDATE_DATA_SUCCESSFULL:
        return { ...state,  openModal: false, isLoading: false, editData: {} }
      default:
        return state;  
  }
}