import Layout from '../../components/Layout'
import ConfirmPage from '../../components/cart/ConfirmPage'
import withRedux from 'next-redux-wrapper'
import {initStore} from '../../store'


const Page = ({url}) => (
  <Layout path={url.pathname} index="PRODUCTS">
    <ConfirmPage />
  </Layout>
)

export default withRedux(initStore)(Page)
