import { } from 'react'
import Narbar from './components/Narbar'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom';
import './index.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
    <Narbar />
     <main>
        <Outlet />
      </main>
    <Footer />
    </>
  )
}

export default App
