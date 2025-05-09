import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from './sections/Main'
import { About } from './sections/about';
const App = () => {
  return ( 
    <>
      <Router>
        <Routes>
          <Route path = '/' element = {<Main/>} />
          <Route path = '/about' element = {<About/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
