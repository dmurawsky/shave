import Head from 'next/head'
import PropTypes from 'prop-types'
import UserTestActions from './UserTestActions'

const AuthLayout = ({ children, title }) => (
  <div>
    <Head>
      <title>{title ? title : 'American Shave'}</title>
      <link
        rel="shortcut icon"
        type="image/x-icon"
        href="/static/assets/favicon.ico"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://fonts.googleapis.com/css?family=Oswald:300,400,500,600"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,700"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.5.3/css/bulma.min.css"
      />
      <link rel="stylesheet" type="text/css" href="/static/styles/global.css" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    {children}
    <UserTestActions />
    <style global jsx>{`
      #authLogo {
        width: 200px;
        margin: 0px auto 5px;
      }
      #authLogo img {
        width: 100%;
      }
      html,
      body,
      body > div:first-child,
      div#__next,
      div#__next > div,
      div#__next > div > div,
      #wrapper {
        height: 100%;
      }
      .center-table {
        height: 100%;
        width: 100%;
        display: table;
      }
      .center-cell {
        position: relative;
        display: table-cell;
        vertical-align: middle;
        text-align: center;
      }
    `}</style>
  </div>
)

AuthLayout.propTypes = {
  title: PropTypes.string,
}

export default AuthLayout
