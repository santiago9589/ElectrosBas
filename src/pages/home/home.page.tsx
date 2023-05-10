import servicios from "../../assets/servicios.jpg"
import ingreso from "../../assets/login.jpg"
import ubicacion from "../../assets/ubicacion.jpg"
import quienes from "../../assets/quienesSomos.jpg"
import HomeComponent from "../../components/homeComponent"
import { useState } from "react"


interface props { name: string, img: string, content: string }

const HomePage = () => {


  const [whoIsVisible, setWhoIsVisible] = useState<string>("servicios")

  const data: props[] = [
    {
      name: "servicios",
      img: servicios,
      content: " at aut asperiores labore placeat magni dolore quos tenetur"
    },
    {
      name: "ingreso",
      img: ingreso,
      content: " at aut asperiores labore placeat magni dolore quos tenetur"
    },
    {
      name: "ubicacion",
      img: ubicacion,
      content: " at aut asperiores labore placeat magni dolore quos tenetur"
    },
    {
      name: "quienessomos",
      img: quienes,
      content: " at aut asperiores labore placeat magni dolore quos tenetur"
    }

  ]

  return (
    <>
      <header className="p-2">
        <h2 className="text-4xl tracking-wider mb-2 text-justify">ElectroBas su empresa electrica de confianza</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Delectus, ipsum voluptatibus quia earum impedit illo, ipsam
          itaque porro nemo deleniti maiores ab! Fugiat voluptates unde
          harum doloremque, voluptatum quos enimipsum dolor sit amet, consectetur adipisicing elit.
          Delectus, ipsum voluptatibus quia earum impedit illo, ipsam
          itaque porro nemo deleniti maiores ab! Fugiat voluptates unde
          harum doloremque, voluptatum quos enim.</p>
      </header>
      <section className="mt-2 flex flex-col h-[570px] box-border p-2  w-full">
        <section className="w-1/2 h-full mx-auto">
          {
            data.map((element) => {
              return (
                <HomeComponent key={element.name}
                  name={element.name}
                  content={element.content}
                  img={element.img}
                  isVisible={whoIsVisible === element.name}
                />
              )
            })
          }
        </section>
        <section className="flex space-x-8 items-center justify-center mt-4">
          {
              data.map((element) => {
                console.log(element.name)
                return (
                  <section key={element.name} onClick={()=>setWhoIsVisible(element.name)} className={`${element.name === whoIsVisible ? "bg-slate-200" : ""  } flex items-center justify-center border-[0.5px] border-whiteReq w-12 h-12 rounded-full`}></section>
                )
              })
          }
          
        </section>
      </section>

    </>
  )
}

export default HomePage

