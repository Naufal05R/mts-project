import { HomePage } from './pages';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className='relative z-0 overflow-hidden bg-white'>
      <header className='block fixed top-0 w-full z-30'>
        <Navbar />
      </header>
      <HomePage />
      <Footer />
    </div>
  )
}

export default App
