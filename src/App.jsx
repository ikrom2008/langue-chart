import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'
import './i18n'
import { useEffect, useState } from 'react'
import Chart from './components/chart/Chart'
let url = "https://dummyjson.com/products?limit=190"
function App() {
  const [product,setProduct] = useState([])
  const fetchdata = async () => {
    try {
     const resp = await fetch(url)
     const data = await resp.json()
     setProduct(data)
    } catch (error) {
     console.log(error);
    }
   }
   useEffect(()=>{
       fetchdata()
   },[])
  return (
    <>
      <Routes>
        <Route path='/' element={
          <div className='container'>
            <Header />
            <Hero />
            <Main product={product} />
            <Footer />
          </div>
        } />
        <Route path='Chart' element={<Chart product={product} />} />
      </Routes>
    </>
  )
}

export default App
