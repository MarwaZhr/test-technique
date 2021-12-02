import 'tailwindcss/tailwind.css';
import Layout from '../components/layout.js';
import { AppProvider } from '../utils/context.js';

function MyApp({ Component, pageProps }) {
  return (
  <AppProvider>
  <Layout>
    <Component {...pageProps} />
  </Layout>
  </AppProvider>
  )
}

export default MyApp
