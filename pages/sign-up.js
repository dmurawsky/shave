import Layout from '../components/Layout'
import SignUpPage from '../components/SignUpPage'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../store'

const SignUp = ({pathname}) => (
  <Layout path={pathname} index="PRODUCTS" title="Sign Up | American Shave">
    <SignUpPage />
  </Layout>
)

export default withRedux(initStore)(SignUp)
