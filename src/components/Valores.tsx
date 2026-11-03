const valores = [
  {
    nombre: "Fraternidad",
    imagen: "/imagenes/valor-fraternidad.svg",
    texto:
      "Compañerismo, amistad, respeto y sentido de comunidad para fortalecer los vínculos.",
  },
  {
    nombre: "Salud",
    imagen: "/imagenes/valor-salud.png",
    texto:
      "Bienestar físico y emocional a través del deporte, la recreación y hábitos saludables.",
  },
  {
    nombre: "Flexibilidad",
    imagen: "/imagenes/valor-flexibilidad.svg",
    texto:
      "Adaptación a distintas necesidades, intereses y formas de organización, y a los cambios del entorno.",
  },
  {
    nombre: "Diversión",
    imagen: "/imagenes/valor-diversion.svg",
    texto:
      "Experiencias agradables y motivadoras, con el disfrute como parte de cada actividad.",
  },
  {
    nombre: "Calidad",
    imagen: "",
    texto:
      "Servicios, instalaciones y atención que contribuyan a una experiencia satisfactoria.",
  },
  {
    nombre: "Seguridad",
    imagen: "",
    texto:
      "Condiciones y prácticas que cuiden a quienes participan de las actividades y a quienes trabajan en el club.",
  },
];

export default function Valores() {
  return (
    <section aria-labelledby="titulo-valores" className="valores">
      <div className="titulo-breve">
        <p className="etiqueta">LO QUE NOS UNE</p>
        <h2 id="titulo-valores">Seis valores, una forma de trabajar.</h2>
      </div>
      <div className="valores-grilla">
        {valores.map((valor) => (
          <article className="valor-tarjeta" key={valor.nombre}>
            {valor.imagen ? (
              <img src={valor.imagen} alt="" loading="lazy" />
            ) : (
              <div className="valor-icono" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  {valor.nombre === "Calidad" ? (
                    <>
                      <circle cx="12" cy="8" r="5" />
                      <path d="m8 12-2 10 6-3 6 3-2-10" />
                    </>
                  ) : (
                    <>
                      <path d="m12 2 8 3v6c0 5-8 11-8 11S4 16 4 11V5l8-3Z" />
                      <path d="m8 12 3 3 5-6" />
                    </>
                  )}
                </svg>
              </div>
            )}
            <h3>{valor.nombre}</h3>
            <p>{valor.texto}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
