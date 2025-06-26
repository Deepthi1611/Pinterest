import './app.css'
import Gallery from './components/gallery/Gallery'
import LeftBar from './components/leftbar/Leftbar'
import Topbar from './components/topbar/Topbar'

const App = () => {
  return (
    <div className='app'>
      <LeftBar />
      <div className='content'>
        <Topbar />
        <Gallery />
      </div>
    </div>
  )
}

export default App