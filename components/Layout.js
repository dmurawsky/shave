import Head from 'next/head'
import PropTypes from 'prop-types'

const Layout = ({children, path, title}) => (
  <div>
    <Head>
      <title>{title?title:'American Shave'}</title>
      <link rel='shortcut icon' type='image/x-icon' href='/static/assets/favicon.ico' />
      <link href='https://fonts.googleapis.com/css?family=Assistant:200,300,400,600,700,800|Lora:400,400i,700,700i' rel='stylesheet' />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.5.3/css/bulma.min.css" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
      <link href='/static/styles/global.css' rel='stylesheet' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
    </Head>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="http://bulma.io">
          <img src="/static/assets/logo.png" alt="American Shave Logo" width="112" />
        </a>
        <button class="button navbar-burger"><span/><span/><span/></button>
      </div>
    </nav>
    {children}
  </div>
)

Layout.propTypes = {
  path: PropTypes.string,
  title: PropTypes.string,
}

export default Layout;

// <script async src={'https://www.googletagmanager.com/gtag/js?id=UA-105877799-'+(process.env.NODE_ENV==='production'?'1':'2')}></script>
// <script dangerouslySetInnerHTML={{ __html: `
//   window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments)};gtag('js', new Date());gtag('config', 'UA-105877799-${process.env.NODE_ENV==='production'?'1':'2'}');
// `}} />
