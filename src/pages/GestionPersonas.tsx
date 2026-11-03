import { useState } from "react";
import { puestos } from "../data/puestos";
import Submenu from "../components/Submenu";
import PuestoDetalle from "../components/PuestoDetalle";
import Seleccion from "../components/Seleccion";
import Evaluacion from "../components/Evaluacion";

const opciones = [
  { id: "puestos", nombre: "Puestos" },
  { id: "seleccion", nombre: "Selección" },
  { id: "desempeno", nombre: "Desempeño" },
] as const;
type Vista = (typeof opciones)[number]["id"];

export default function GestionPersonas() {
  const [vista, setVista] = useState<Vista>("puestos");
  const [puestoId, setPuestoId] = useState("operaciones");
  const [competencia, setCompetencia] = useState(
    "Orientación a la calidad y seguridad",
  );
  const puesto = puestos.find((item) => item.id === puestoId)!;
  return (
    <section aria-labelledby="titulo-gestion">
      <div className="encabezado-pagina">
        <div>
          <p className="etiqueta">TP 02 · EL MODELO EN ACCIÓN</p>
          <h1 id="titulo-gestion" className="titulo-pagina">
            Del perfil al desarrollo.
          </h1>
        </div>
        <p>Elegí un puesto y seguí la misma competencia en los tres pasos.</p>
      </div>
      <div className="selector-demostracion">
        <label className="control" htmlFor="puesto-demo">
          Puesto
          <select
            id="puesto-demo"
            value={puesto.id}
            onChange={(e) => {
              setPuestoId(e.target.value);
              setCompetencia("Orientación a la calidad y seguridad");
            }}
          >
            {puestos.map((p) => (
              <option key={p.id} value={p.id}>
                {p.nombre}
              </option>
            ))}
          </select>
        </label>
        <label className="control" htmlFor="competencia-demo">
          Competencia para seguir en la demostración
          <select
            id="competencia-demo"
            value={competencia}
            onChange={(e) => setCompetencia(e.target.value)}
          >
            {puesto.evaluacion.map((c) => (
              <option key={c.competencia}>{c.competencia}</option>
            ))}
          </select>
        </label>
      </div>
      <Submenu
        opciones={opciones}
        actual={vista}
        cambiar={setVista}
        etiqueta="Procesos de gestión de personas"
      />
      <div hidden={vista !== "puestos"}>
        <PuestoDetalle puesto={puesto} competencia={competencia} />
      </div>
      <div hidden={vista !== "seleccion"}>
        <Seleccion puesto={puesto} competencia={competencia} />
      </div>
      <div hidden={vista !== "desempeno"}>
        <Evaluacion key={puesto.id} puesto={puesto} competencia={competencia} />
      </div>
    </section>
  );
}
