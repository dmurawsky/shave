import withData from '../store/withData'
import Layout from '../components/Layout'
import HomePage from '../components/HomePage'

export default withData(({url}) => {
  return (
    <Layout path={url.pathname} index="PRODUCTS">
      <HomePage />
    </Layout>
  )
})
