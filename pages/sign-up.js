import AuthLayout from '../layouts/AuthLayout'
import SignUpPage from '../components/SignUpPage'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../store'

const SignUp = ({ pathname }) => (
  <AuthLayout path={pathname} index="PRODUCTS" title="Sign Up | American Shave">
    <SignUpPage />
  </AuthLayout>
)

export default withRedux(initStore)(SignUp)
