import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from './sections/Main'
import { About } from './sections/about';
import {Contact} from './sections/contact'
const App = () => {
  return ( 
    <>
      <Router>
        <Routes>
          <Route path = '/' element = {<Main/>} />
          <Route path = '/about' element = {<About/>} />
          <Route path = '/contact' element = {<Contact/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
