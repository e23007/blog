import { getAllPosts } from 'lib/api'
import Hero from 'components/hero'
// import Meta from 'components/meta'
import Container from 'components/container'
import Posts from 'components/posts'
import { getPlaiceholder } from 'plaiceholder'
import Pagination from 'components/pagination'
// ローカルの代替アイキャッチ画像
import { eyecatchLocal } from 'lib/constants'
import { getImageBuffer } from 'lib/getImageBuffer'

const Home = ({ title, subtitle, imageOn, posts }) => (
  <Container>
    <Hero title={title} subtitle={subtitle} imageOn />
    <Posts posts={posts} />
    <Pagination nextUrl='/blog' nextText='More Posts' />
  </Container>
)

const getStaticProps = async contxt => {
  const posts = await getAllPosts(4)
  for (const post of posts) {
    if (!('eyecatch' in post)) {
      post.eyecatch = eyecatchLocal
    }
    const imageBuffer = await getImageBuffer(post.eyecatch.url)
    const { base64 } = await getPlaiceholder(imageBuffer)
    post.eyecatch.blurDataURL = base64
  }

  return {
    props: {
      title: 'CUBE',
      subtitle: 'アウトプットしていくサイト',
      imageOn: 'true',
      posts
    }
  }
}

export default Home
export { getStaticProps }
// <meta neme='description' content='アウトプットしていくサイト' />
// <meta property='og:description' content='アウトプットしていくサイト' />
