import Hero from 'components/hero'
import { getAllPosts } from 'lib/api'
import Meta from 'components/meta'
import Container from 'components/container'
import Posts from 'components/posts'
import { getPlaiceholder } from 'plaiceholder'
// ローカルの代替アイキャッチ画像
import { eyecatchLocal } from 'lib/constants'
import { getImageBuffer } from 'lib/getImageBuffer'

const Blog = ({ posts }) => {
  return (
    <Container>
      <Meta pageTitle='ブログ' pageDesc='ブログの記事一覧' />
      <Hero title='Blog' subtitle='Recent Posts' />
      <Posts posts={posts} />
    </Container>
  )
}

const getStaticProps = async () => {
  const posts = await getAllPosts(4)
  for (const post of posts) {
    // if (!post.hasOwnProperty('eyecatch')) {
    if (!('eyecatch' in post)) {
      post.eyecatch = eyecatchLocal
    }
    const imageBuffer = await getImageBuffer(post.eyecatch.url)
    const { base64 } = await getPlaiceholder(imageBuffer)
    post.eyecatch.blurDataURL = base64
  }
  return {
    props: { posts }
  }
}
export default Blog
export { getStaticProps }
