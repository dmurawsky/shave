import Layout from '../../components/Layout'
import SignUpForm from '../../components/SignUpForm'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../../store'
import CartSteps from '../../components/cart/CartSteps'


const SignUp = ({url}) => (
  <Layout path={url.pathname} index="PRODUCTS" title="User Info | American Shave">
    <div id="userInfoPage" className="content page">
      <CartSteps step={2} />
      <h1>User Information</h1>
      <hr />
      <SignUpForm navAfter="/payment" />
    </div>
  </Layout>
)

export default withRedux(initStore)(SignUp)
