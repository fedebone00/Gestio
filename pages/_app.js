require('../styles/globals.css');
const Head = require("next/head");

function MyApp({ Component, pageProps }) {
  <Head>
  <link rel="shortcut icon" href="/favicon.ico" />
  </Head>

  return <Component {...pageProps} />
}

module.exports = MyApp
