import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

interface props {
  children: React.ReactNode
}

const LayoutComponent = ({ children }: props) => {
  return (
    <main className='grid  grid-cols-5 lg:grid-cols-6 grid-rows-5 h-screen w-full' >
      <Navbar />
      <section 
      className='bg-[url(/public/energia-verde-mano-sosteniendo-fondo-bombilla-ambiental.jpg)] bg-center bg-cover col-start-2 col-span-4  row-span-4 lg:col-span-6 lg:row-start-2 lg:row-end-5'>
        {children}
      </section>
      <Footer />
    </main>
  )
}

export default LayoutComponent