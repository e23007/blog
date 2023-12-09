import Meta from 'components/meta'
import Container from 'components/container'
import Hero from 'components/hero'

const Custom404 = () => {
  return (
    <Container>
      <Meta pagetaitle='404 - Page not found' />
      <Hero title='404' subtitle='ページが見つかりません' />
    </Container>
  )
}
export default Custom404
