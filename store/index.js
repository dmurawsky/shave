import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { initFirebase } from './firebase'

const initialState = {
  profile: null,
  cart: {
    items: {},
    count: 0,
    subtotal: 0,
  },
  products: {},
  brands: {},
  categories: {},
  settings: {},
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_PUBLIC':
      return {
        ...state,
        products: action.products,
        brands: action.brands,
        categories: action.categories,
      }
    case 'LOAD_PROFILE':
      return { ...state, profile: action.profile }
    case 'LOAD_CART':
      return { ...state, cart: action.cart }
    default:
      return state
  }
}

export const initStore = (state = initialState, { isServer }) => {
  const store = createStore(
    reducer,
    state,
    composeWithDevTools(applyMiddleware(thunkMiddleware)),
  )
  initFirebase(store.dispatch, isServer)
  return store
}
