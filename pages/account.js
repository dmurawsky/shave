import Layout from '../layouts/HomeLayout'
import Account from '../components/Account'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../store'
import { getPageSettings } from '../utils/settings'

class AccountPage extends React.Component {
  constructor(props, ctx) {
    super(props, ctx)
  }

  static async getInitialProps() {
    const settings = await getPageSettings('account')
    return { settings }
  }

  render() {
    const { pathname, settings } = this.props
    return (
      <Layout path={pathname} index="PRODUCTS" title="Account | American Shave">
        <Account settings={settings} />
      </Layout>
    )
  }
}

export default withRedux(initStore)(AccountPage)
