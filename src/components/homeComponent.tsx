import React from 'react'
import { Link } from 'react-router-dom'


interface props { name: string, img: string, content: string, isVisible: boolean }

const HomeComponent = ({ name, content, img, isVisible }: props) => {


    return (
        <Link to={`/${name}`}>
            <section key={name} className={` ${isVisible ? "visible" : "hidden"} border-2 shadow-xl border-black rounded-lg p-2 flex flex-col justify-between`}>
                <h3 className="text-center text-3xl uppercase">{name}</h3>
                <p className=" w-full text-center capitalize">{content}</p>
                <section className="w-full h-96 p-2 overflow-hidden">
                    <img
                        src={img}
                        alt="imagen"
                        className="w-full h-full"
                    />
                </section>
            </section>
        </Link>

    )
}

export default HomeComponent