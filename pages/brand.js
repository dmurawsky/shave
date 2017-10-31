import Layout from '../components/Layout'
import Results from '../components/Results'
import Footer from '../components/Footer'

export default ({pathname}) => (
  <Layout path={pathname} index="PRODUCTS">
    <Results />
  </Layout>
)
