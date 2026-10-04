import { Routes, Route } from "react-router-dom"



function App() {
  
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Hero/>}/>
        <Route path="/about" element={<Benefits/>}/>
        <Route path="/servicies" element={<Security/>}/>
      </Routes>
    </>
  )
}

export default App
