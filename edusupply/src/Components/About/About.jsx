import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon'/>
      </div>
      <div className="about-right">
        <h3>ABOUT EDUSITY</h3>
        <h2>Nurturing Tomorrow's Leaders with Smarter Resource Management</h2>
        <p>EduSity is more than just an inventory tool — it's a step forward in empowering educational 
          institutions with efficiency, transparency, and innovation. Designed to support the dynamic environment of 
          schools and universities, EduSity ensures that essential educational provisions — from textbooks to 
          lab equipment — are always accounted for, accessible, and effectively managed.</p>
         <p>By integrating technology with purpose, our system aligns with your institution's mission to provide 
          quality education.EduSity enhances the learning environment by minimizing resource gaps, optimizing supply usage, 
           and reducing administrative overhead.</p>
         <p>Whether you're shaping the next generation of teachers, leaders, or changemakers, EduSity
          supports your journey by taking care of the essentials — so you can focus on what truly matters: education.</p>
      </div>
    </div>
  )
}

export default About
