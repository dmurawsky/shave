import AuthLayout from '../layouts/AuthLayout'
import SignInPage from '../components/SignInPage'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../store'

const SignIn = ({ pathname }) => (
  <AuthLayout path={pathname} index="PRODUCTS" title="Sign In | American Shave">
    <SignInPage />
  </AuthLayout>
)

export default withRedux(initStore)(SignIn)
