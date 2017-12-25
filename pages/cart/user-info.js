import Layout from '../../layouts/HomeLayout'
import SignUpForm from '../../components/SignUpForm'
import AddressForm from '../../components/AddressForm'
import Addresses from '../../components/Addresses'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../../store'
import CartSteps from '../../components/cart/CartSteps'
import Link from 'next/link'

const SignUp = ({ url }) => (
  <Layout
    path={url.pathname}
    index="PRODUCTS"
    title="User Info | American Shave">
    <div id="userInfoPage" className="content page">
      <CartSteps step={2} />
      <h1>
        Shipping Information
        <Link href="/cart/payment">
          <button className="button is-pulled-right">Continue</button>
        </Link>
      </h1>
      <hr />
      <SignUpForm navAfter="/cart/payment" />
      <Addresses addressType="selectedShippingAddress" />
      <AddressForm addressType="selectedShippingAddress" />
    </div>
  </Layout>
)

export default withRedux(initStore)(SignUp)
