import type { ComponentType } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Inicio from "./pages/Inicio";
import ElClub from "./pages/ElClub";
import Competencias from "./pages/Competencias";
import GestionPersonas from "./pages/GestionPersonas";
import Induccion from "./pages/Induccion";
import { useSeccion } from "./hooks/useSeccion";
import type { SeccionId } from "./data/navegacion";

const pantallas = {
  inicio: Inicio,
  nosotros: ElClub,
  competencias: Competencias,
  gestion: GestionPersonas,
  induccion: Induccion,
} satisfies Record<SeccionId, ComponentType>;

export default function App() {
  const seccion = useSeccion();
  const Pantalla = pantallas[seccion];
  return (
    <>
      <a
        className="saltar-contenido"
        href="#contenido"
        onClick={(event) => {
          event.preventDefault();
          document.getElementById("contenido")?.focus();
        }}
      >
        Ir al contenido
      </a>
      <Navbar actual={seccion} />
      <main className="pagina" id="contenido" tabIndex={-1}>
        <Pantalla />
      </main>
      <Footer />
    </>
  );
}
