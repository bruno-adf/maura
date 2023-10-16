import React from 'react'
import './Footer.css'
import { MdWhatsapp, MdOutlineCalendarMonth } from 'react-icons/md'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer-container'>
      <div className='buttons'>
        <Link to='http://wa.me/5516981106084'>
          <button className='icon-button'><MdWhatsapp color='#0075A2' size={'30px'}/></button>
        </Link>
        <Link to='https://pag.ae/7ZNoNRVEp'>
          <button className='icon-button'><MdOutlineCalendarMonth color='#0075A2' size={'30px'}/></button>
        </Link>
      </div>
      <div className='info'>
        <a style={{'color': 'white', 'fontWeight': 'light', 'fontSize': '0.8rem'}} href='mailto:mastercoachmaura@gmail.com'>mastercoachmaura@gmail.com</a>
      </div>
    </div>
  )
}

export default Footer