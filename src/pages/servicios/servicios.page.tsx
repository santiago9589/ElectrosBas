import React from 'react'
import ButtonBack from '../../components/buttomBack'
import ServiciosComponent from '../../components/serviciosComponent'
import reparaciones from "../../assets/reparaciones.jpg"
import instalacion from "../../assets/instalacion.jpg"
import proyectos from "../../assets/proyectos.jpg"
import asesoramiento from "../../assets/asesoramiento.jpg"

interface props { name: string, img: string, content: string }

const ServiciosPage = () => {
    const data: props[] = [
        {
          name: "Reparaciones",
          img: reparaciones,
          content: " at aut asperiores labore placeat magni dolore quos "
        },
        {
          name: "Instalacion",
          img: instalacion,
          content: " at aut asperiores labore placeat magni dolore quos "
        },
        {
          name: "Proyectos",
          img: proyectos,
          content: " at aut asperiores labore placeat magni dolore quos "
        },
        {
            name: "Asesoramiento",
            img: asesoramiento,
            content: " at aut asperiores labore placeat magni dolore quos "
          }
      ]
    
      return (
        <>
          <h2 className="text-3xl tracking-wider text-center mt-2 uppercase">Servicios</h2>
          <section className="mt-2 flex box-border p-2 gap-4">
            {
              data.map((element) => {
                return (
                  <ServiciosComponent key={element.name} name={element.name} content={element.content} img={element.img} />
                )
              })
            }
          </section>
          <ButtonBack/>
        </>
      )
    }

export default ServiciosPage