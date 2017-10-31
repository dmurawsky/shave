import Head from 'next/head'
import PropTypes from 'prop-types'
import {InstantSearch} from 'react-instantsearch/dom'
import Header from './Header'
import UserTestActions from './UserTestActions'

const Layout = ({children, path, title, index}) => (
  <div>
    <Head>
      <title>{title?title:'American Shave'}</title>
      <link rel='shortcut icon' type='image/x-icon' href='/static/assets/favicon.ico' />
      <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Oswald:300,400,500,600" />
      <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,700" />
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.5.3/css/bulma.min.css" />
      <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      <link rel="stylesheet" type="text/css" href="https://unpkg.com/react-instantsearch-theme-algolia@4.0.0/style.min.css" />
      <link rel="stylesheet" type="text/css" href="/static/styles/global.css" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <script src="/static/js/expand-select.js" />
    </Head>
    <div id="topAd">Advertisement</div>
    <InstantSearch
      appId="9GZ2V4X1CO"
      apiKey="7749a7e3064b4ec577e3c0be83687175"
      indexName={process.env.NODE_ENV==='production'?'prod_'+index:'dev_'+index}
    >
      <div id="wrapper">
        <Header />
        {children}
      </div>
    </InstantSearch>
    <UserTestActions />
  </div>
)

Layout.propTypes = {
  path: PropTypes.string,
  title: PropTypes.string,
  index: PropTypes.string.isRequired,
}

export default Layout;

// <script async src={'https://www.googletagmanager.com/gtag/js?id=UA-105877799-'+(process.env.NODE_ENV==='production'?'1':'2')}></script>
// <script dangerouslySetInnerHTML={{ __html: `
//   window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments)};gtag('js', new Date());gtag('config', 'UA-105877799-${process.env.NODE_ENV==='production'?'1':'2'}');
// `}} />
