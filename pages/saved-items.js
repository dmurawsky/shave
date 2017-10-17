import withData from '../store/withData'
import Layout from '../components/Layout'
import SavedItemsPage from '../components/SavedItemsPage'

export default withData(({url}) => {
  return (
    <Layout path={url.pathname} index="PRODUCTS">
      <SavedItemsPage />
    </Layout>
  )
})
