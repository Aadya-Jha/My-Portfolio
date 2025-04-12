import { BrowserRouter, Routes, Route } from "react-router-dom"
import Skills from "./pages/Skills"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Skills' element={<Skills/>}/>
          <Route path='/*' element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
