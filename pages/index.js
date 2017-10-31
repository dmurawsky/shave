import Layout from '../components/Layout'
import HomePage from '../components/HomePage'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../store'

const Index = ({pathname}) => (
  <Layout path={pathname} index="PRODUCTS">
    <HomePage />
  </Layout>
)

export default withRedux(initStore)(Index)
