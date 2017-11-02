import Layout from '../components/Layout'
import SignUpForm from '../components/SignUpForm'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../store'

const SignUp = ({pathname}) => (
  <Layout path={pathname} index="PRODUCTS" title="Sign Up | American Shave">
    <div id="signUpPage" className="content page">
      <h1>Sign Up</h1>
      <hr />
      <SignUpForm />
    </div>
  </Layout>
)

export default withRedux(initStore)(SignUp)
