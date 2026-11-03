import { useEffect, useRef, useState } from "react";
import { secciones } from "../data/navegacion";
import type { SeccionId } from "../data/navegacion";

export default function Navbar({ actual }: { actual: SeccionId }) {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const cabecera = useRef<HTMLElement>(null);
  const botonMenu = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuAbierto) return;

    const pantallaChica = window.matchMedia("(max-width: 850px)");

    function cerrarConEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        setMenuAbierto(false);
        botonMenu.current?.focus({ preventScroll: true });
      }
    }

    function cerrarDesdeAfuera(event: PointerEvent) {
      if (
        event.target instanceof Node &&
        !cabecera.current?.contains(event.target)
      ) {
        setMenuAbierto(false);
      }
    }

    function cerrarAlNavegar() {
      setMenuAbierto(false);
    }

    function cerrarEnEscritorio(event: MediaQueryListEvent) {
      if (!event.matches) setMenuAbierto(false);
    }

    document.addEventListener("keydown", cerrarConEscape);
    document.addEventListener("pointerdown", cerrarDesdeAfuera);
    window.addEventListener("hashchange", cerrarAlNavegar);
    pantallaChica.addEventListener("change", cerrarEnEscritorio);

    return () => {
      document.removeEventListener("keydown", cerrarConEscape);
      document.removeEventListener("pointerdown", cerrarDesdeAfuera);
      window.removeEventListener("hashchange", cerrarAlNavegar);
      pantallaChica.removeEventListener("change", cerrarEnEscritorio);
    };
  }, [menuAbierto]);

  return (
    <header className="cabecera" ref={cabecera}>
      <div className="cabecera-contenido">
        <a
          href="#inicio"
          className="marca"
          aria-label="Ágora Club, inicio"
          onClick={() => setMenuAbierto(false)}
        >
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
        <button
          ref={botonMenu}
          type="button"
          className="navbar-boton"
          aria-label={
            menuAbierto
              ? "Cerrar menú de navegación"
              : "Abrir menú de navegación"
          }
          aria-expanded={menuAbierto}
          aria-controls="navegacion-principal"
          onClick={() => setMenuAbierto((abierto) => !abierto)}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            {menuAbierto ? (
              <path d="m6 6 12 12M6 18 18 6" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
          <span>{menuAbierto ? "Cerrar" : "Menú"}</span>
        </button>
        <nav
          id="navegacion-principal"
          className={`navbar-enlaces${menuAbierto ? " abierto" : ""}`}
          aria-label="Navegación principal"
        >
          {secciones.map((seccion) => (
            <a
              key={seccion.id}
              href={`#${seccion.id}`}
              className={actual === seccion.id ? "activo" : undefined}
              aria-current={actual === seccion.id ? "location" : undefined}
              onClick={() => {
                setMenuAbierto(false);
                if (menuAbierto)
                  botonMenu.current?.focus({ preventScroll: true });
              }}
            >
              {seccion.nombre}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
