import React from 'react'
import './Programs.css'
import books from '../../assets/books.png'
import school from '../../assets/school.png'
import lab from '../../assets/lab.png'
import program_icon_1 from '../../assets/program-icon-1.png'
import program_icon_2 from '../../assets/program-icon-2.png'
import program_icon_3 from '../../assets/program-icon-3.png'

const Programs = () => {
  return (
    <div className='programs'>
        <div className="program">
            <img src={books} alt=""/>
            <div className="caption">
                <img src={program_icon_1} alt=""/>
                <p>Educational Books</p>
            </div>
        </div>
        <div className="program">
            <img src={school} alt=""/>
            <div className="caption">
                <img src={program_icon_2} alt=""/>
                <p>School Supplies</p>
            </div>
        </div>
        <div className="program">
            <img src={lab} alt=""/>
            <div className="caption">
                <img src={program_icon_3} alt=""/>
                <p>Lab Equiment</p>
            </div>
        </div>
      
    </div>
  )
}

export default Programs
