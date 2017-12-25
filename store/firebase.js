import { initializeApp, apps, auth, database } from 'firebase'
const R = require('ramda')

const clientCreds = require('./clientCreds.json')

export const initFirebase = async (dispatch, isServer) => {
  let uid = null
  if (apps.length === 0) {
    initializeApp(clientCreds)
    const snap = await database()
      .ref('public')
      .once('value')
    const { brands, categories, products } = snap.val()
    if (products) {
      dispatch({ type: 'LOAD_PUBLIC', products, brands, categories })
      if (!isServer) {
        auth().onAuthStateChanged(user => {
          if (user) {
            uid = user.uid
            database()
              .ref(`users/${uid}/profile`)
              .on('value', snap => {
                const profile = snap.val()
                dispatch({ type: 'LOAD_PROFILE', profile })
              })
            database()
              .ref(`users/${uid}/cart`)
              .on('value', snap => {
                const cart = snap.val()
                dispatch({
                  type: 'LOAD_CART',
                  cart: formatCart(cart, products),
                })
              })
          } else {
            if (uid !== null) {
              database()
                .ref(`users/${uid}/profile`)
                .off('value')
              dispatch({ type: 'LOAD_PROFILE', profile: null })
              database()
                .ref(`users/${uid}/cart`)
                .off('value')
              dispatch({ type: 'LOAD_CART', cart: formatCart(null) })
              uid = null
            }
            auth().signInAnonymously()
          }
        })
      }
    }
  }
}

const formatCart = (cart, products) => {
  if (cart !== null && cart.items) {
    const vals = R.values(cart.items)
    const count = vals.reduce((prev, next) => prev + next, 0)
    const subtotal = R.values(
      R.mapObjIndexed(
        (val, key) => (products[key] ? val * products[key].price : 0),
        cart.items,
      ),
    ).reduce((prev, next) => prev + next, 0)
    return { ...cart, count, subtotal }
  } else {
    return { items: [], count: 0, subtotal: 0 }
  }
}
