import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Products from './Components/Products/Products'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
          <Title subTitle='OUR PRODUCTS' title='What We Offer'/>
          <Programs/>
          <About/>
          <Title subTitle='Gallery' title='Product photos'/>
          <Campus/>
          <Title subTitle='TESTIMONIALS' title='What Student Says'/>
          <Testimonials/>
          <Title subTitle='Contact Us' title='Get In touch'/>
          <Contact/>
          <Footer/>
      </div>
      
    </div>
  )
}

export default App
