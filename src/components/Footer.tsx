import Fundamentos from "./Fundamentos";
import "./Footer.css";

const integrantes = [
  "Mariana Martínez",  
  "Valentina Acosta",
  "Joselito Manuel García Rodríguez",
  "María Cecilia Carlson",
];

export default function Footer() {
  return (
    <footer
      className="pie-agora"
      aria-label="Información del proyecto y equipo"
    >
      <div className="pie-agora-interior">
        <div className="pie-agora-grilla">
          <div className="pie-agora-identidad">
            <a
              href="#inicio"
              className="pie-agora-marca"
              aria-label="Ágora Club, inicio"
            >
              <span className="pie-agora-escudo">
                <img
                  src="/imagenes/logo-agora.png"
                  alt=""
                  width="64"
                  height="64"
                  loading="lazy"
                />
              </span>
              <span>
                <strong>ÁGORA CLUB</strong>
                <small>Deporte · Bienestar · Comunidad</small>
              </span>
            </a>
            <p>El deporte nos reúne. Las personas nos unen.</p>
          </div>

          <div className="pie-agora-proyecto">
            <p className="pie-agora-etiqueta">PROYECTO ACADÉMICO</p>
            <h2>Proyecto Luxus</h2>
            <p>Modelo de Gestión por Competencias</p>
            <p className="pie-agora-instituto">
              IFTS N.º 20
              <span>Tecnicatura Superior en Recursos Humanos</span>
            </p>
          </div>

          <div className="pie-agora-equipo">
            <h2 className="pie-agora-etiqueta">INTEGRANTES</h2>
            <ul>
              {integrantes.map((nombre) => (
                <li key={nombre}>{nombre}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pie-agora-cierre">
          <p className="pie-agora-credito">
            Desarrollo web <span aria-hidden="true">·</span>{" "}
            <strong>María Cecilia Carlson</strong>
          </p>
          <button
            type="button"
            className="pie-agora-arriba"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
                  .matches
                  ? "auto"
                  : "smooth",
              })
            }
          >
            Volver arriba <span aria-hidden="true">↑</span>
          </button>
        </div>
        <Fundamentos />
      </div>
    </footer>
  );
}
