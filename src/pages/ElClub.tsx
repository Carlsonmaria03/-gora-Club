import { useState } from "react";
import Submenu from "../components/Submenu";
import Valores from "../components/Valores";

const opciones = [
  { id: "identidad", nombre: "Identidad" },
  { id: "valores", nombre: "Valores" },
  { id: "cultura", nombre: "Cultura" },
  { id: "estructura", nombre: "Estructura" },
] as const;
type Vista = (typeof opciones)[number]["id"];

export default function ElClub() {
  const [vista, setVista] = useState<Vista>(() =>
    window.location.hash === "#valores" ? "valores" : "identidad",
  );
  return (
    <section aria-labelledby="titulo-club">
      <div className="encabezado-pagina">
        <div>
          <p className="etiqueta">TP 01 · PRESENTACIÓN DE LA ORGANIZACIÓN</p>
          <h1 id="titulo-club" className="titulo-pagina">
            Conocé Ágora.
          </h1>
        </div>
        <p>Deporte, recreación y vínculos en un mismo lugar.</p>
      </div>
      <Submenu
        opciones={opciones}
        actual={vista}
        cambiar={setVista}
        etiqueta="Temas de El club"
      />
      {vista === "identidad" && (
        <div className="identidad-grid">
          <figure className="foto-club">
            <img
              src="/imagenes/club-entrada.png"
              alt="Ilustración del proyecto Ágora Club"
            />
            <figcaption>Más que un club. Una comunidad.</figcaption>
          </figure>
          <div className="identidad-contenido">
            <h2>Un espacio para encontrarnos.</h2>
            <p>
              Ágora Club es un proyecto de servicios deportivos, recreativos y
              sociales que se ubicará en Vicente López, cerca del Vial Costero.
              Combina deporte, gastronomía, eventos y encuentros para construir
              comunidad.
            </p>
            <article>
              <h3>Nuestra misión</h3>
              <p>
                Proporcionar un espacio integral donde el deporte, la recreación
                y la amistad se encuentren, generando experiencias memorables
                que fortalezcan vínculos y promuevan hábitos de vida saludables.
              </p>
            </article>
            <article>
              <h3>Nuestra visión</h3>
              <p>
                Convertirse en un club referente en Argentina por sus propuestas
                deportivas y sociales, adaptándose a las formas de vida actuales
                y construyendo una comunidad basada en la fraternidad, la salud
                y la diversión.
              </p>
            </article>
            <div className="instalaciones">
              <span>4 canchas de fútbol</span>
              <span>4 canchas techadas de pádel</span>
              <span>Bar y tercer tiempo</span>
              <span>Estacionamiento propio</span>
            </div>
            <small>Instalaciones proyectadas en el TP 1.</small>
          </div>
        </div>
      )}
      {vista === "valores" && <Valores />}
      {vista === "cultura" && (
        <div className="cultura-grid">
          <div className="ilustracion-cultura">
            <img
              src="/imagenes/cultura.png"
              alt="Cultura colaborativa, participativa, basada en la confianza, el aprendizaje y la escucha"
            />
          </div>
          <div>
            <p className="etiqueta">LAS PERSONAS EN EL CENTRO</p>
            <h2>Una cultura que construimos juntos.</h2>
            <ul className="lista-desarrollada">
              <li>
                <strong>Humanista y cercana.</strong> Clientes y colaboradores
                forman parte de la experiencia del club.
              </li>
              <li>
                <strong>Participativa.</strong> Compartimos ideas y
                conocimientos y buscamos soluciones en equipo.
              </li>
              <li>
                <strong>Con comunicación abierta.</strong> Favorecemos el
                intercambio entre personas, responsables y áreas.
              </li>
              <li>
                <strong>Flexible y organizada.</strong> Nos adaptamos a las
                necesidades sin perder normas, responsabilidades, calidad y
                seguridad.
              </li>
            </ul>
          </div>
        </div>
      )}
      {vista === "estructura" && (
        <div className="estructura-panel">
          <div>
            <h2>Responsabilidades claras. Áreas conectadas.</h2>
            <p>
              La Dirección General (CEO) define los lineamientos estratégicos.
              La Dirección Operativa (COO) coordina el funcionamiento diario de
              las seis áreas.
            </p>
          </div>
          <img
            src="/imagenes/organigrama-agora.svg"
            alt="Organigrama: Dirección General CEO, Dirección Operativa COO y seis áreas: Administración y Finanzas, Operaciones y Servicios, Comercial y Marketing, Gastronomía y Experiencia, Recursos Humanos y Comunidad y Eventos"
          />
          <a
            className="enlace-texto"
            href="/imagenes/organigrama-agora.svg"
            target="_blank"
            rel="noreferrer"
          >
            Ampliar organigrama ↗
          </a>
        </div>
      )}
    </section>
  );
}
