import withData from '../store/withData'
import Layout from '../components/Layout'
import Results from '../components/Results'
import Footer from '../components/Footer'

export default withData(({url}) => {
  return (
    <Layout path={url.pathname} index="PRODUCTS">
      <Results />
    </Layout>
  )
})
