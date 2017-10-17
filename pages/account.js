import withData from '../store/withData'
import Layout from '../components/Layout'
import Account from '../components/Account'

export default withData(({url}) => {
  return (
    <Layout path={url.pathname} index="PRODUCTS">
      <Account />
    </Layout>
  )
})
