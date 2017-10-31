import Layout from '../components/Layout'
import SignInPage from '../components/SignInPage'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../store'

const SignIn = ({pathname}) => (
  <Layout path={pathname} index="PRODUCTS" title="Sign Up | American Shave">
    <SignInPage />
  </Layout>
)

export default withRedux(initStore)(SignIn)
