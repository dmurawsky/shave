import { database, auth } from 'firebase'

export const increment = id => {
  database()
    .ref(`users/${auth().currentUser.uid}/cart/items/${id}`)
    .transaction(qty => (qty ? qty + 1 : 1))
}

export const decrement = id => {
  database()
    .ref(`users/${auth().currentUser.uid}/cart/items/${id}`)
    .transaction(qty => (qty > 1 ? qty - 1 : null))
}

export const removeFromCart = id => {
  database()
    .ref(`users/${auth().currentUser.uid}/cart/items/${id}`)
    .remove()
}
