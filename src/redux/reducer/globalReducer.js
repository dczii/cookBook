import {
  GET_DATA,
  GET_DATA_SUCCESSFUL,
  ADD_DATA,
  ADD_DATA_SUCCESSFULL,
  TRIGGER_MODAL,
} from '../types'

  const initialState = {
      isLoading: false,
      openModal: false,
      recipesData: [],
  }

export default (state = initialState, action) => {
  switch(action.type) {

      case GET_DATA:
        return { ...state }
      case GET_DATA_SUCCESSFUL:
        return { ...state,  recipesData: action.payload }
      case TRIGGER_MODAL:
        return { ...state, openModal: action.payload }
      default:
        return state;  
  }
}