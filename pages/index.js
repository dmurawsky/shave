import withData from '../apollo/withData'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Footer from '../components/Footer'

Index.getInitialProps = ({pathname}) => ({ path: pathname })

export default withData(props => (
  <Layout path={props.url.pathname}>
    <Header />
    <Footer />
  </Layout>
))
