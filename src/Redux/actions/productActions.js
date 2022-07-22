import { ACTIONS } from '../constants/actionsTypes'

export const setProducts = (products) => {
  return {
    type: ACTIONS.SET_PRODUCTS,
    payload: products
  }
}

export const selectedProduct = (product) => {
  return {
    type: ACTIONS.SELECTED_PRODUCT,
    payload: product
  }
}

export const removeProduct = () => {
  return {
    type: ACTIONS.REMOVE_SELECTED_PRODUCT
  }
}
