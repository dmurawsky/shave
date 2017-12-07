import Layout from '../components/Layout'
import SecurityPage from '../components/SecurityPage'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../store'

const Page = ({ url }) => (
  <Layout
    path={url.pathname}
    index="PRODUCTS"
    title="Manage Your Security | American Shave">
    <SecurityPage />
  </Layout>
)

export default withRedux(initStore)(Page)
