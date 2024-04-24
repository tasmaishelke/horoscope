import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Registration from './pages/Registration'
import ErrorPage from './pages/ErrorPage'
import Kundli from './pages/kundli'
import {Route, Routes} from 'react-router-dom'

function Routing()
{
    return(
      <>
        <div className="container"> 
                <Routes>
                  <Route index element={<Home />} /> 
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/Registration" element={<Registration />} />   
                  <Route path="/kundli" element={<Kundli />} />             
                  <Route path="*" element={<ErrorPage />} />
                </Routes>
        </div>      
      </>
    )
}

export default Routing
