import React from 'react'
import { routes } from './Navbar'
import { Link } from "react-router-dom";




const Navlink = ({ url, route }: routes) => {
  return (
    <Link to={url}>
      <button className='bg-slate-200 rounded-lg p-2 text-xl capitalize'>{route}</button>
    </Link>
  )
}

export default Navlink