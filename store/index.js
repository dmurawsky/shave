import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { initFirebase } from './firebase'

const initialState = {
  profile: null,
  cart: {
    items: []
  },
}

export const reducer = (
  state = initialState,
  {type, profile, cart, products}
) => {
  switch (type) {
    case 'LOAD_PRODUCTS':
      return {...state, products }
    case 'LOAD_PROFILE':
      return {...state, profile }
    case 'LOAD_CART':
      return {...state, cart }
    default:
      return state
  }
}

export const initStore = (state = initialState, {isServer}) => {
  const store = createStore(reducer, state, composeWithDevTools(applyMiddleware(thunkMiddleware)))
  initFirebase(store.dispatch, isServer)
  return store
}
