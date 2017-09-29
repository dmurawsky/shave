const stripe = require('stripe')(
  process.env.NODE_ENV==='production' ?
  process.env.STRIPE_SK_LIVE :
  'sk_test_ojJ0kQbOXWSbIPulgh6gc042'
)

module.exports = (token, cb) => {
  console.log(token);
  stripe.customers.create({
    email: token.email,
    description: token.email,
    source: token.id,
  })
  .then(({id}) => stripe.subscriptions.create({
    customer: id,
    items: [{ plan: 'basic'}],
  }))
  .then(()=>cb())
  .catch(err=>cb(err))
}
