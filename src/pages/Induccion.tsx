import { useState } from "react";
import Submenu from "../components/Submenu";

const opciones = [
  { id: "bienvenida", nombre: "Bienvenida" },
  { id: "llegada", nombre: "Tu primer día" },
  { id: "convivencia", nombre: "Día a día" },
  { id: "beneficios", nombre: "Beneficios" },
  { id: "desarrollo", nombre: "Desarrollo" },
] as const;
type Vista = (typeof opciones)[number]["id"];
const llegada = [
  [
    "Encuentro de bienvenida",
    "Conocé a tu líder y al equipo de Recursos Humanos.",
  ],
  [
    "Recorrido por las instalaciones",
    "Ubicá los espacios y servicios que vas a compartir.",
  ],
  [
    "Uniforme y credencial",
    "Recibí los elementos que te identifican como parte del equipo.",
  ],
  [
    "Presentación con tu equipo",
    "Conocé a tus compañerxs y cómo van a trabajar juntos.",
  ],
  [
    "Capacitación inicial",
    "Compartimos la cultura, las normas y los cuidados de seguridad.",
  ],
];
const pautas = [
  ["Puntualidad", "Respetá los horarios para que podamos coordinarnos."],
  ["Presentación", "Usá el uniforme y mantené una imagen prolija."],
  ["Comunicación", "Avisá las novedades o incidentes a tu responsable."],
  ["Seguridad e higiene", "Seguí los protocolos: nos cuidamos entre todos."],
  [
    "Cuidado del espacio",
    "Mantené las instalaciones y los materiales en buen estado.",
  ],
  [
    "Respeto y buena onda",
    "Tratemos con amabilidad a compañerxs, socios y clientes.",
  ],
];
const beneficios = [
  ["Reconocimiento", "Bonos por desempeño."],
  ["Disfrute", "Descuentos en gastronomía y actividades del club."],
  ["Movimiento", "Acceso gratuito al gimnasio."],
  ["Tu cumpleaños", "Un día libre para celebrarlo."],
  ["Flexibilidad", "Un día de home office por semana."],
  ["Salud", "Cobertura médica prepaga OSDE."],
  ["Familia", "Licencias por maternidad y paternidad extendidas."],
  ["Estudio", "Días de estudio adicionales."],
];

export default function Induccion() {
  const [vista, setVista] = useState<Vista>("bienvenida");
  const [completos, setCompletos] = useState<number[]>([]);
  return (
    <section aria-labelledby="titulo-induccion">
      <div className="encabezado-pagina">
        <div>
          <p className="etiqueta">MATERIAL DE INDUCCIÓN · ÁGORA CLUB</p>
          <h1 id="titulo-induccion" className="titulo-pagina">
            Tu lugar en el equipo empieza acá.
          </h1>
        </div>
        <p>Conocé lo que nos une y cómo vamos a acompañarte.</p>
      </div>
      <Submenu
        opciones={opciones}
        actual={vista}
        cambiar={setVista}
        etiqueta="Etapas de la inducción"
      />
      {vista === "bienvenida" && (
        <div className="bienvenida-induccion panel">
          <div>
            <p className="etiqueta">¡BIENVENIDX A NUESTRO EQUIPO!</p>
            <h2>Estamos felices de que te sumes.</h2>
            <p>
              Queremos acompañarte desde el primer día para que conozcas nuestra
              cultura, a tu equipo y todo lo que vamos a compartir.
            </p>
            <p>
              En Ágora, el deporte, la recreación y los vínculos hacen
              comunidad. Cada persona aporta a esa experiencia.
            </p>
            <button
              type="button"
              className="boton-principal"
              onClick={() => setVista("llegada")}
            >
              Conocé tu primer día →
            </button>
          </div>
          <img
            src="/imagenes/agorix-futbol.png"
            alt="Agorix te da la bienvenida con su pelota de fútbol"
          />
        </div>
      )}
      {vista === "llegada" && (
        <div className="llegada-grid">
          <div className="panel llegada-intro">
            <p className="etiqueta">UN RECORRIDO PARA EMPEZAR</p>
            <h2>Vamos paso a paso.</h2>
            <p>
              Marcá cada actividad a medida que la completes durante la
              demostración.
            </p>
            <div className="progreso">
              <strong aria-live="polite">
                {completos.length} de 5 pasos completos
              </strong>
              <progress
                max={5}
                value={completos.length}
                aria-label="Pasos de bienvenida completos"
              />
              <button
                type="button"
                className="boton-texto"
                onClick={() => setCompletos([])}
              >
                Reiniciar recorrido
              </button>
            </div>
            <img
              src="/imagenes/agorix-padel.png"
              alt="Agorix acompaña tu llegada al club"
            />
          </div>
          <ol className="pasos-llegada">
            {llegada.map(([titulo, texto], i) => (
              <li key={titulo}>
                <label>
                  <input
                    type="checkbox"
                    checked={completos.includes(i)}
                    onChange={(e) =>
                      setCompletos((actual) =>
                        e.target.checked
                          ? [...actual, i]
                          : actual.filter((item) => item !== i),
                      )
                    }
                  />
                  <span>
                    <strong>{titulo}</strong>
                    <span>{texto}</span>
                  </span>
                </label>
              </li>
            ))}
          </ol>
        </div>
      )}
      {vista === "convivencia" && (
        <div className="dos-columnas">
          <div className="panel">
            <p className="etiqueta">CÓMO SUMAMOS AL EQUIPO</p>
            <h2>Gestos que cuidan la experiencia.</h2>
            <dl className="requisitos">
              {pautas.map(([titulo, texto]) => (
                <div key={titulo}>
                  <dt>{titulo}</dt>
                  <dd>{texto}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="panel canales">
            <p className="etiqueta">COMUNICACIÓN INTERNA</p>
            <h2>Mantenernos conectados.</h2>
            <img
              src="/imagenes/comunicacion.svg"
              alt="Ilustración de personas que se comunican"
            />
            <dl className="requisitos">
              <div>
                <dt>Reuniones semanales</dt>
                <dd>Para alinear objetivos y compartir avances.</dd>
              </div>
              <div>
                <dt>Slack</dt>
                <dd>Para la colaboración y el intercambio cotidiano.</dd>
              </div>
              <div>
                <dt>Correo institucional</dt>
                <dd>
                  Para los comunicados oficiales y las novedades importantes.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      )}
      {vista === "beneficios" && (
        <div className="beneficios-layout">
          <figure className="foto-club">
            <img
              src="/imagenes/club-beneficios.png"
              alt="Ilustración de los espacios deportivos del club"
            />
            <figcaption>Trabajar, crecer y también disfrutar.</figcaption>
          </figure>
          <div>
            <p className="texto-pequeno introduccion-corta">
              Beneficios y reconocimientos incluidos en la propuesta de
              inducción.
            </p>
            <div className="beneficios-grilla">
              {beneficios.map(([titulo, texto]) => (
                <article className="panel" key={titulo}>
                  <h3>{titulo}</h3>
                  <p>{texto}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      )}
      {vista === "desarrollo" && (
        <div className="desarrollo-grid">
          <div className="panel desarrollo-imagen">
            <p className="etiqueta">CRECER CON OTROS</p>
            <h2>Cuando cada persona crece, también crece nuestra comunidad.</h2>
            <img
              src="/imagenes/celebracion.svg"
              alt="Dos personas celebran un logro compartido"
            />
          </div>
          <div className="panel">
            <h2>Tu próximo paso nos importa.</h2>
            <ul className="lista-desarrollada">
              <li>
                <strong>Evaluaciones y devoluciones.</strong> Para reconocer
                logros y acordar oportunidades de mejora.
              </li>
              <li>
                <strong>Planes de carrera y capacitación.</strong> Para
                fortalecer habilidades y acompañar nuevos desafíos.
              </li>
              <li>
                <strong>Mentoring y acompañamiento.</strong> Para aprender de
                otras personas y contar con orientación cercana.
              </li>
              <li>
                <strong>Nuevos proyectos.</strong> Para asumir responsabilidades
                y aportar ideas.
              </li>
            </ul>
            <a className="boton-principal" href="#gestion">
              Explorá la gestión de personas →
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
