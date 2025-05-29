import { BrowserRouter, Routes, Route } from "react-router-dom"
import Skills from "./pages/Skills"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import Education from "./pages/Education"
import Resume from "./pages/Resume"
import Projects from "./pages/Projects"
import '@fontsource/inter/400.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';


function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Skills' element={<Skills/>}/>
          <Route path='/education' element={<Education/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/*' element={<NotFound />}/>
          <Route path='/resume' element={<Resume />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
