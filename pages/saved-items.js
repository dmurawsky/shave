import Layout from '../components/Layout'
import SavedItemsPage from '../components/SavedItemsPage'

export default ({pathname}) => (
  <Layout path={pathname} index="PRODUCTS">
    <SavedItemsPage />
  </Layout>
)
