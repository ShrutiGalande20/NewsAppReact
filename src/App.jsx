import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import NewsBoard from './Components/NewsBoard'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Home from './Components/Home';
const App = () => {
  const [category, setCategory] = useState("general");
  return (
    <>
    {/* <Home/> */}
    <Navbar setCategory={setCategory}/>
    <NewsBoard category={category}/>
    </>
  )
}

export default App