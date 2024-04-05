import './App.css'
import hamburger from './assets/hamburger.svg'
import cart from './assets/cart.svg'
import fourdots from './assets/fourdots.svg'
import search from './assets/search.svg'


function App() {

  return (
    <>
      <div className='navbar'>
        <div className='fourdots'>
          {/* <img src={fourdots} alt='hamburger'></img> */}
        </div>
        <div className='office'>
          <p>Office</p>
        </div>
        <div className='windows'>
          <p>Windows</p>
        </div>
        <div className='support'>
          <p>Support</p>
        </div>
        <div className='microsoft'>
          <p>Microsoft 365</p>
        </div>
        <div className='hamburger'>
          {/* <img src={hamburger} alt='hamburger'></img> */}
        </div>
        <div className='search'>
          {/* <img src={search} alt='hamburger'></img> */}
        </div>
        <div className='cart'>
          {/* <img src={cart} alt='hamburger'></img> */}
        </div>
      </div>
    </>
  )
}

export default App
