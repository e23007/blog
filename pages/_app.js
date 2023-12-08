import '@/styles/globals.css'
import Layout from 'components/layout'
// import Script from 'next/script'
// import * as gtag from 'lib/grag'

// Font Awsomeの設定
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false

const App = ({ Component, pageProps }) => {
  return (
    <>
      {/* <Script
        strategy='afterInteractive'
        src={`https://www.googlemanager.com/gtag/js?id=${gtag.GA_MEASUREMENT_ID}`}
      />
      <Script
        id='gtag-init'
        strategy='afterInteractive'
        dangerouslySetInnerHTMLHTML={{
          __html: `window.dataLayer=window.dataLayer|| []; function gtag(){dataLayer.push(arguments);}
    gtag('config','${gtag.GA_MEASUREMENT_ID}')
    `
        }}
      /> */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
export default App
