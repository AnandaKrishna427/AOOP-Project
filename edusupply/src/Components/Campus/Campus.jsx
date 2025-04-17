import React from 'react'
import './Campus.css'
import highlighters from '../../assets/highlighters.png'
import backpack from '../../assets/backpack.png'
import gelpens from '../../assets/gelpens.png'
import books from '../../assets/books.png'
import white_arrow from '../../assets/white-arrow.png'
import { Link } from 'react-router-dom';

const Campus = () => {
  return (
    <div className='campus'>
        <div className="gallery">
            <img src={highlighters} alt=""/>
            <img src={backpack} alt=""/>
            <img src={gelpens} alt=""/>
            <img src={books} alt=""/>
        </div>
        <Link to="/products">
        <button className='btn dark-btn'>See more here <img src={white_arrow} alt=""/></button>
        </Link>
    </div>
  )
}

export default Campus
