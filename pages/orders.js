import Layout from '../components/Layout'
import OrdersList from '../components/OrdersList'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../store'

const Page = ({url}) => (
  <Layout path={url.pathname} index="PRODUCTS">
    <div className="content page">
      <OrdersList />
    </div>
  </Layout>
)

export default withRedux(initStore)(Page)
