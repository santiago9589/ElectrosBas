import React from 'react'
import Navlink from './navLink'
import { Link } from 'react-router-dom'

const ButtonBack = () => {
    return (
        <Link to={"/"}>
            <button className='bg-slate-100 border-2 border-green-50 rounded-xl p-4 text-2xl uppercase w-full'>REGRESAR</button>
        </Link>
    )
}

export default ButtonBack