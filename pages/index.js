import Hero from 'components/hero'
import Meta from 'components/meta'
import Container from 'components/container'
const Home = () => {
  return (
    <Container>
      <Meta />
      <Hero title='CUBE' subtitle='アウトプットしていくサイト' imageOn />
    </Container>
  )
}
export default Home
// <meta neme='description' content='アウトプットしていくサイト' />
//<meta property='og:description' content='アウトプットしていくサイト' />
