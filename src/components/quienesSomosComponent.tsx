import React from 'react'
import { props } from '../pages/quienes/quienes.page'

const QuienesSomosComponent = ({name,content,img}:props) => {
    return (
        <section key={name} className="border-2 border-white  rounded-lg p-2">
            <h3 className="w-full h-1/5 text-center text-4xl">{name}</h3>
            <p className="text-justify w-full h-2/5">{content}</p>
            <section className="w-full h-2/5">
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