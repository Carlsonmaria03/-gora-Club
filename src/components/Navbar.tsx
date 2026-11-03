import { secciones } from "../data/navegacion";
import type { SeccionId } from "../data/navegacion";

export default function Navbar({ actual }: { actual: SeccionId }) {
  return (
    <header className="cabecera">
      <div className="cabecera-contenido">
        <a href="#inicio" className="marca" aria-label="Ágora Club, inicio">
          <img
            src="/imagenes/logo-agora.png"
            alt="Escudo de Ágora Club"
            width="56"
            height="56"
          />
          <span className="marca-texto">
            <strong>ÁGORA CLUB</strong>
            <small>Deporte · Bienestar · Comunidad</small>
          </span>
        </a>
        <nav className="navbar-enlaces" aria-label="Navegación principal">
          {secciones.map((seccion) => (
            <a
              key={seccion.id}
              href={`#${seccion.id}`}
              className={actual === seccion.id ? "activo" : undefined}
              aria-current={actual === seccion.id ? "location" : undefined}
            >
              {seccion.nombre}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
