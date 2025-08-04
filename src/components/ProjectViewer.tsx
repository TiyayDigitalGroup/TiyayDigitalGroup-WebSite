import { useState } from "react"
import ImgRampal from "@/assets/rampal.png"
import ImgLuxuris from "@/assets/luxuris.png"
import ImgArnoldChrist from "@/assets/arnoldchrist.png"
import ImgFinanceClass from "@/assets/financeclass.png"

const ProjectViewer = () => {
  const [hoveredProject, setHoveredProject] = useState("rampal contadores")

  const proyectos = [
    {
      nombre: "rampal contadores",
      descripcion:
        "Una consultora legal que ofrece asesoría especializada y soluciones jurídicas a medida para proteger tus intereses.",
      imagen: ImgRampal,
    },
    {
      nombre: "luxuris dental",
      descripcion:
        "Especialidades odontológicas, explora casos reales y agenda tu cita  para conseguir la sonrisa que siempre has deseado.",
      imagen: ImgLuxuris,
    },
    {
      nombre: "arnold christ",
      descripcion:
        "Descubre en nuestra web las áreas de práctica, casos de éxito y cómo agendar tu asesoría legal personalizada.",
      imagen: ImgArnoldChrist,
    },
    {
      nombre: "Finance Class",
      descripcion:
        "Plataforma especializada en recursos educativos para profesores y alumnos",
      imagen: ImgFinanceClass,
    },
  ]

  const proyectoActivo = proyectos.find(p => p.nombre === hoveredProject)

  return (
    <section className="grid md:grid-cols-3  items-center justify-center max-w-10/12 gap-10">
      <div className=" shrink-0 flex flex-col gap-5">
        {proyectos.map((item) => (
          <div
            key={item.nombre}
            onMouseEnter={() => setHoveredProject(item.nombre)}
            className="transition-all duration-300 hover:scale-[1.02] cursor-pointer"
          >
            <h1 className="capitalize text-[#35C2DC] font-bold font-poppins text-2xl">
              {item.nombre}
            </h1>
            <p className="text-xs text-black/50">{item.descripcion}</p>
            <hr className="border-2 mt-2 border-[#2796aa]" />
          </div>
        ))}
      </div>

      <picture className="rounded-lg overflow-hidden aspect-[16/9] border border-[#2796aa] w-full transition-opacity duration-300 md:col-span-2">
        <img
          src={proyectoActivo?.imagen.src}
          alt={hoveredProject}
          className="w-full h-full object-cover"
        />
      </picture>
    </section>
  )
}

export default ProjectViewer
