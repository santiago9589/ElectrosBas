import React from 'react'
import { props } from '../pages/quienes/quienes.page'

const QuienesSomosComponent = ({name,content,img}:props) => {
    return (
        <section key={name} className="border-2 shadow-xl border-black rounded-lg p-2 flex flex-col justify-between">
            <h3 className="text-center text-3xl">{name}</h3>
            <p className="text-justify w-full ">{content}</p>
            <section className="w-full h-72 p-2 overflow-hidden">
                <img
                    src={img}
                    alt="imagen"
                    className="w-full h-full"
                />
            </section>
        </section>
    )
}

export default QuienesSomosComponent