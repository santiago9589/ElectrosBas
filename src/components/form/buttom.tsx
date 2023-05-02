import React from 'react'

interface props {
  name: string
}

const ButtomForm = ({ name }: props) => {
  return (
    <button
      type="submit"
      className='bg-green-600
    border-2 border-green-50
    rounded-lg
    p-4
    text-lg
    uppercase
    w-full
    '>
      {name}
    </button>
  )
}

export default ButtomForm