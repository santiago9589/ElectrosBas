import React from 'react'
import Navlink from './navLink'
import logo from "../../public/logo.jpg"

export interface routes {
  url: string
  route: string
}

const Navbar = () => {

  const routes: routes[] = [
    {
      url: "/quienessomos",
      route: "quienes somos"
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

  ]

  return (
    <nav className='border-2 border-red-300 lg:col-span-6 row-span-4 lg:row-span-1 flex flex-col lg:flex-row justify-between items-center p-4'>
      <section className='w-full h-24 lg:h-fit lg:w-1/2 flex items-center space-x-8 box-border'>
        <img src={logo} className='h-32 w-32' />
        <h1 className='text-center text-4xl uppercase tracking-wider'>Electro Bas</h1>
      </section>
      <section className='flex flex-col lg:flex-row justify-between items-center flex-1 p-2'>
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