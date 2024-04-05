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
          <img src={fourdots} alt='hamburger'></img>
        </div>
        <div className='office'>
          <button>Office</button>
        </div>
        <div className='windows'>
          <button>Windows</button>
        </div>
        <div className='support'>
          <button>Support</button>
        </div>
        <div className='microsoft'>
          <button>Microsoft 365</button>
        </div>
        <div className='hamburger'>
          <img src={hamburger} alt='hamburger'></img>
        </div>
        <div className='search'>
          <img src={search} alt='hamburger'></img>
        </div>
        <div className='cart'>
          <img src={cart} alt='hamburger'></img>
        </div>
      </div>
    </>
  )
}

export default App
