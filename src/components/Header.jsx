import React from 'react'
import './Header.css'
import { useLocation, Link } from 'react-router-dom'

function Header({linkA, linkB, titleA, titleB}) {

    const location = useLocation();
    console.log(location.pathname);

  return (
    <div className='container'>
        <Link className='linkA' to={linkA}>{titleA}</Link>
        <h3 className='title'>Maura Cristiani</h3>
        <Link className='linkB' to={linkB}>{titleB}</Link>
    </div>
  )
}

export default Header