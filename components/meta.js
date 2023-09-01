import Head from 'next/head'

//サイトに関する情報
import { siteMeta } from 'lib/constants'
const { siteTitle, siteDesc, siteUrl, siteLocal, siteType, siteIcon } = siteMeta

const Meta = ({ pageTitle, pageDesc }) => {
  //ページのタイトル
  const title = pageTitle ? `${pageTitle}|${siteTitle}` : siteTitle
  const desc = pageDesc ?? siteDesc
  return (
    <Head>
      <title>{title}</title>
      <meta property='og:title' content={title} />
      <meta neme='description' content={desc} />
      <meta property='og:description' content={desc} />
    </Head>
  )
}
export default Meta
