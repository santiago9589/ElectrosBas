import React from 'react'

interface props { name: string, img: string, content: string }

const ServiciosComponent = ({name,content,img}:props) => {
    return (
        <section key={name} className="border-2 shadow-xl border-black rounded-lg p-2 flex space-y-3 flex-col justify-between w-96">
            <h3 className="text-center text-3xl">{name}</h3>
            <p className="text-justify w-full ">{content}</p>
            <section className="w-full h-72 p-2 overflow-hidden">
                <img
                    src={img}
                    alt="imagen"
                    className="w-full h-full"
                />
            </section>
            <button className='border-2 border-black rounded-lg p-2 text-2xl'>Agendar turno</button>
        </section>
    )
}

export default ServiciosComponent