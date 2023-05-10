import React from 'react'
import Navlink from './navLink'
import logo from "../../src/assets/logo.jpg"


export interface routes {
  url: string
  route: string
}

const Navbar = () => {

  const routes: routes[] = [
    {
      url: "/quienessomos",
      route: "quienes"
    },
    {
      url: "/ubicacion",
      route: "ubicacion"
    },
    {
      url: "/ingreso",
      route: "ingreso"
    },
    {
      url: "/servicios",
      route: "servicios"
    },
    {
      url: "/",
      route: "home"
    },

  ]

  return (
    <nav className='lg:col-span-6 row-span-4 lg:row-span-1 flex flex-col lg:flex-row justify-between items-center p-4'>
      <section className='w-full h-48 lg:h-fit lg:w-1/2 flex flex-col justify-center lg:flex-row items-center space-x-8 box-border'>
        <img src={logo} className='h-48 w-48' />
        <h1 className='text-center hidden lg:block lg:text-5xl uppercase tracking-wider'>Electro Bas</h1>
      </section>
      <section className='flex flex-col lg:flex-row justify-between items-center flex-1 p-2 box-border lg:space-x-2'>
        {
          routes.map((route) => {
            return (
              <Navlink key={route.route} route={route.route} url={route.url} />
            )
          })
        }

      </section>

    </nav>
  )
}

export default Navbar