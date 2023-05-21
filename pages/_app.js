// Root component that receives all components and looked first by Nextjs
import Layout from '../components/layout/Layout'
import '@/styles/globals.css'

// using Layout component as a wrapper around the whole app
export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
