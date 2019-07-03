import { GET_DATA } from '../types'

export const getData = payload => {
  return {
    tyoe: GET_DATA,
    payload,
  }
}