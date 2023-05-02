import React from 'react'
import { routes } from './Navbar'



const Navlink = ({url,route}:routes) => {
  return (
    <button className='border-white border-2 rounded-lg p-2 text-xl capitalize'>{route}</button>
  )
}

export default Navlink