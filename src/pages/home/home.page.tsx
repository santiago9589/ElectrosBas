import servicios from "../../assets/servicios.jpg"
import ingreso from "../../assets/login.jpg"
import ubicacion from "../../assets/ubicacion.jpg"
import quienes from "../../assets/quienesSomos.jpg"
import HomeComponent from "../../components/homeComponent"
import { useState } from "react"


interface props { name: string, img: string, content: string }

const HomePage = () => {


  const [whoIsVisible, setWhoIsVisible] = useState<number>(0)

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


  const handleIncremental = (incremental: number) => {


    if (whoIsVisible === 0) {
      setWhoIsVisible(whoIsVisible + 1)
    } else {
      if (whoIsVisible < data.length - 1) {

        setWhoIsVisible(whoIsVisible + incremental)

      } else {
        setWhoIsVisible(whoIsVisible - 1)
      }
    }

  }


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
      <section className="mt-2 flex flex-col  box-border p-2 justify-between items-center h-[500px] w-full">
        <section className="w-1/2 h-full">
          {
            data.map((element, index) => {
              return (
                <HomeComponent key={element.name}
                  name={element.name}
                  content={element.content}
                  img={element.img}
                  isVisible={whoIsVisible === index}
                />
              )
            })
          }
        </section>
        <section className="flex space-x-8 items-center justify-between mt-4">
          <button className="border-2 border-black p-2 text-xl rounded-lg" onClick={() => handleIncremental(-1)}>Anterior</button>
          
          <button
            className="border-2 border-black p-2 text-xl rounded-lg" onClick={() => {
              handleIncremental(1)
            }}
          >Siguiente</button>

        </section>
      </section>

    </>
  )
}

export default HomePage

