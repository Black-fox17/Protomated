import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from './sections/Main'
import { About } from './sections/about';
import {Contact} from './sections/contact';
import {CaseStudy} from './sections/casestudy'
import StudyInner from './components/study';
const App = () => {
  return ( 
    <>
      <Router>
        <Routes>
          <Route path = '/' element = {<Main/>} />
          <Route path = '/about' element = {<About/>} />
          <Route path = '/contact' element = {<Contact/>} />
          <Route path = '/case-study' element = {<CaseStudy/>} />
          <Route path = '/case-study/unique' element = {<StudyInner/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
