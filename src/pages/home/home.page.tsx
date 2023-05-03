import servicios from "../../../public/servicios.jpg"
import ingreso from "../../../public/login.jpg"
import ubicacion from "../../../public/ubicacion.jpg"
import quienes from "../../../public/quienesSomos.jpg"
import { props } from "../quienes/quienes.page"
import QuienesSomosComponent from "../../components/quienesSomosComponent"


const HomePage = () => {


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
      name: "quienes somos",
      img: quienes,
      content: " at aut asperiores labore placeat magni dolore quos tenetur"
    }

  ]


  return (
    <>
      <header className="p-2 text-slate-500">
        <h2 className="text-4xl tracking-wider mb-2 text-justify">ElectroBas su empresa electrica de confianza</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Delectus, ipsum voluptatibus quia earum impedit illo, ipsam
          itaque porro nemo deleniti maiores ab! Fugiat voluptates unde
          harum doloremque, voluptatum quos enimipsum dolor sit amet, consectetur adipisicing elit.
          Delectus, ipsum voluptatibus quia earum impedit illo, ipsam
          itaque porro nemo deleniti maiores ab! Fugiat voluptates unde
          harum doloremque, voluptatum quos enim.</p>
      </header>
      <section className="mt-2 flex box-border p-2 gap-4 justify-between">
      {
          data.map((element) => {
            return (
              <QuienesSomosComponent key={element.name} name={element.name} content={element.content} img={element.img}/>
            )
          })
        }
      </section>
    </>
  )
}

export default HomePage

