import React from 'react'

interface props{
    name:string
}

const Navlink = ({name}:props) => {
  return (
    <button className='border-2 border-black'>{name}</button>
  )
}

export default Navlink