import '../styles/globals.css'
import Layout from "../components/layout/Layout";

function EventifyApp({ Component, pageProps }) {
  return <Layout><Component {...pageProps} /></Layout>
}

export default EventifyApp
