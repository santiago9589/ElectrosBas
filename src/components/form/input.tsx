import React from 'react'

interface props {
    name: string
    type: string
    handleChange: (e: React.ChangeEvent) => void;
    value: string
    touched: boolean
    errors: string
}

const InputComponent = ({ name, type, handleChange, touched, errors, value }: props) => {
    return (
        <>
            <label className='text-4xl  text-black capitalize'>{name}</label>
            <input
                className='p-4 rounded-lg bg-slate-100 placeholder:text-slate-400  text-black'
                type={type}
                value={value}
                onChange={handleChange}
                name={name}
                placeholder={`ingrese ${name}`}
            />
            {touched && errors && (<div className='text-red-400 text-lg font-semibold '>{errors}</div>)}
        </>
    )
}


export default InputComponent