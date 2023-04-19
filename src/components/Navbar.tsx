import React from 'react'
import Navlink from './navLink'

const Navbar = () => {
  return (
    <nav className='border-2 border-red-300 lg:col-span-6 row-span-4 lg:row-span-1 flex flex-col lg:flex-row justify-between items-center p-4'>
        <h1 className=' w-full h-32 lg:h-fit lg:w-1/2 text-center'>Electro Bas</h1>
        <section className='flex flex-col lg:flex-row justify-between items-center flex-1'>
        <Navlink name='servicio'/>
        <Navlink name='servicio'/>
        <Navlink name='servicio'/>
        <Navlink name='servicio'/>
        <Navlink name='servicio'/>
        <Navlink name='servicio'/>
        <p>logo</p>
        </section>
        
      </nav>
  )
}

export default Navbar