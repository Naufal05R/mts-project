import { Hero, About, Prime, Gallery, Share } from '../components'

const HomePage = () => {
  return (
    <div className='bg-cover bg-center bg-no-repeat text-black-200'>
      <Hero />
      <About />
      <Prime />
      <Gallery />
      <Share />
    </div>
  )
}

export default HomePage
