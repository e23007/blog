import Hero from 'components/hero'
import Meta from 'components/meta'
import Container from 'components/container'
const Home = props => (
  <Container>
    <Hero {...props} />
  </Container>
)

export const getStaticProps = async contxt => ({
  props: {
    title: 'CUBE',
    subtitle: 'アウトプットしていくサイト',
    imageOn: 'true'
  }
})

export default Home
// <meta neme='description' content='アウトプットしていくサイト' />
//<meta property='og:description' content='アウトプットしていくサイト' />
