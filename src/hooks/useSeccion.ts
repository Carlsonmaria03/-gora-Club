import { useEffect, useState } from "react";
import { obtenerSeccion } from "../data/navegacion";

export function useSeccion() {
  const [seccion, setSeccion] = useState(obtenerSeccion);

  useEffect(() => {
    function actualizar() {
      setSeccion(obtenerSeccion());
      window.scrollTo(0, 0);
    }
    window.addEventListener("hashchange", actualizar);
    return () => window.removeEventListener("hashchange", actualizar);
  }, []);

  return seccion;
}
