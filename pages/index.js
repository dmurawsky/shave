import Layout from '../layouts/HomeLayout'
import HomePage from '../components/HomePage'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../store'

const Index = ({ url }) => (
  <Layout path={url.pathname} index="PRODUCTS">
    <HomePage />
  </Layout>
)

export default withRedux(initStore)(Index)
