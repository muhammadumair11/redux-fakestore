import { ACTIONS } from '../constants/actionsTypes'

const initialState = {
  products: []
}
export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTIONS.SET_PRODUCTS:
      return {
        ...state,
        products: payload
      }
    default:
      return state
  }
}

export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ACTIONS.SELECTED_PRODUCT:
      return {
        ...state,
        ...payload
      }
    case ACTIONS.REMOVE_SELECTED_PRODUCT:
      return {}
    default:
      return state
  }
}
