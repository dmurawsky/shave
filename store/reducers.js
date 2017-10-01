import {cart} from './initialState'

export default {
  cart: (state = cart, { type, item }) => {
    switch (type) {
      case 'UPSERT_ITEM':
        return {
          ...state,
          items: {
            ...state.items,
            [item.id]:item,
          },
        }
      default:
        return state
    }
  }
}
