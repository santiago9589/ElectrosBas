import mision from "../../assets/buildings.jpg"
import vision from "../../assets/vision.jpg"
import obras from "../../assets/images.jpg"
import QuienesSomosComponent from "../../components/quienesSomosComponent"
import ButtonBack from "../../components/buttomBack"


interface props { name: string, img: string, content: string }

const QuienesSomosPage = () => {

  const data: props[] = [
    {
      name: "Mision",
      img: mision,
      content: " at aut asperiores labore placeat magni dolore quos tenetur quibusdam esse nulla tempora dolores possimus accusamus eaque, odit corrupti modi incidunt quam cumque eligendi? Minima perspiciatis enim ex? Dolorum ea odit, omnis fuga ut possimus autem cum sequi impedit dignissimos sit natus, asperiores reiciendis iste porro excepturi hic consequuntur obcaecati. Incidunt nesciunt nostrum blanditiis rerum soluta laudantium aperiam eum repudiandae dicta, mollitia quas adipisci porro voluptatibus. Eveniet minus eaque ad error quis aliquam tempore minima et voluptatum beatae inventore eum, libero aspernatur, natus omnis magnam illo commodi. Corporis, dolorem!"
    },
    {
      name: "Vision",
      img: vision,
      content: " at aut asperiores labore placeat magni dolore quos tenetur quibusdam esse nulla tempora dolores possimus accusamus eaque, odit corrupti modi incidunt quam cumque eligendi? Minima perspiciatis enim ex? Dolorum ea odit, omnis fuga ut possimus autem cum sequi impedit dignissimos sit natus, asperiores reiciendis iste porro excepturi hic consequuntur obcaecati. Incidunt nesciunt nostrum blanditiis rerum soluta laudantium aperiam eum repudiandae dicta, mollitia quas adipisci porro voluptatibus. Eveniet minus eaque ad error quis aliquam tempore minima et voluptatum beatae inventore eum, libero aspernatur, natus omnis magnam illo commodi. Corporis, dolorem!"
    },
    {
      name: "Proyectos",
      img: obras,
      content: " at aut asperiores labore placeat magni dolore quos tenetur quibusdam esse nulla tempora dolores possimus accusamus eaque, odit corrupti modi incidunt quam cumque eligendi? Minima perspiciatis enim ex? Dolorum ea odit, omnis fuga ut possimus autem cum sequi impedit dignissimos sit natus, asperiores reiciendis iste porro excepturi hic consequuntur obcaecati. Incidunt nesciunt nostrum blanditiis rerum soluta laudantium aperiam eum repudiandae dicta, mollitia quas adipisci porro voluptatibus. Eveniet minus eaque ad error quis aliquam tempore minima et voluptatum beatae inventore eum, libero aspernatur, natus omnis magnam illo commodi. Corporis, dolorem!"
    }
  ]

  return (
    <>
      <h2 className="text-3xl tracking-wider text-center mt-2 uppercase">quienes somos</h2>
      <section className="mt-2 flex flex-col lg:flex-row box-border p-2 gap-4">
        {
          data.map((element) => {
            return (
              <QuienesSomosComponent key={element.name} name={element.name} content={element.content} img={element.img} />
            )
          })
        }
      </section>
      <section className="w-1/2 mx-auto my-2">
        <ButtonBack />
      </section>
    </>
  )
}

export default QuienesSomosPage

