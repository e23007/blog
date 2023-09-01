import Head from 'next/head'

//サイトに関する情報
import { siteMeta } from 'lib/constants'
const { siteTitle, siteDesc, siteUrl, siteLocal, siteType, siteIcon } = siteMeta

const Meta = ({ pageTitle }) => {
  //ページのタイトル
  const title = pageTitle ? `${pageTitle}|${siteTitle}` : siteTitle
  return (
    <Head>
      <title>{title}</title>
      <meta property='og:title' content={title} />
    </Head>
  )
}
export default Meta
