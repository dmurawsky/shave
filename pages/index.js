import Layout from '../layouts/HomeLayout'
import HomePage from '../components/HomePage'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../store'
import { getPageSettings } from '../utils/settings'

class Index extends React.Component {
  constructor(props, ctx) {
    super(props, ctx)
  }

  static async getInitialProps() {
    const settings = await getPageSettings('index')
    return { settings }
  }

  render() {
    const { pathname, settings } = this.props
    return (
      <Layout path={pathname} index="PRODUCTS">
        <HomePage settings={settings} />
      </Layout>
    )
  }
}

export default withRedux(initStore)(Index)
