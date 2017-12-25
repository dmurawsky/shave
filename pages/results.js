import Layout from '../layouts/HomeLayout'
import ResultsPage from '../components/ResultsPage'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../store'

const Results = ({ pathname }) => (
  <Layout path={pathname} index="PRODUCTS">
    <ResultsPage />
  </Layout>
)

export default withRedux(initStore)(Results)
