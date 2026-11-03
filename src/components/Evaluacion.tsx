import { useState } from "react";
import type { Puesto } from "../data/puestos";

type Puntajes = Record<string, number>;
export default function Evaluacion({
  puesto,
  competencia,
}: {
  puesto: Puesto;
  competencia: string;
}) {
  const [supervisor, setSupervisor] = useState<Puntajes>({});
  const [autoevaluacion, setAutoevaluacion] = useState<Puntajes>({});
  const [ejemplo, setEjemplo] = useState(false);
  const [evidencias, setEvidencias] = useState("");
  const [acuerdos, setAcuerdos] = useState("");
  const completas = puesto.evaluacion.filter(
    (c) => (supervisor[c.competencia] ?? 0) > 0,
  ).length;
  const promedio =
    completas === 5
      ? puesto.evaluacion.reduce(
          (total, c) => total + supervisor[c.competencia],
          0,
        ) / 5
      : null;
  const criterio = puesto.evaluacion.find(
    (c) => c.competencia === competencia,
  )!;
  const calidad = puesto.evaluacion.find(
    (c) => c.competencia === "Orientación a la calidad y seguridad",
  )!;
  const revisarSeguridad =
    (supervisor[calidad.competencia] ?? 0) > 0 &&
    supervisor[calidad.competencia] < calidad.nivel;
  function estado(nombre: string, requerido: number) {
    const puntaje = supervisor[nombre] ?? 0;
    if (!puntaje) return { texto: "Sin valorar", clase: "pendiente" };
    if (puntaje >= requerido)
      return { texto: "Alcanza lo esperado", clase: "cumple" };
    if (requerido - puntaje === 1)
      return { texto: "A desarrollar", clase: "desarrollo" };
    return { texto: "Prioridad de desarrollo", clase: "prioridad" };
  }
  function cargarEjemplo() {
    setSupervisor(
      Object.fromEntries(
        puesto.evaluacion.map((c, i) => [
          c.competencia,
          Math.max(
            1,
            c.nivel -
              (i === 0 || c.competencia === calidad.competencia ? 1 : 0),
          ),
        ]),
      ),
    );
    setAutoevaluacion(
      Object.fromEntries(
        puesto.evaluacion.map((c) => [c.competencia, c.nivel]),
      ),
    );
    setEjemplo(true);
    setEvidencias(
      "Ejemplo ficticio: se detectó un desvío en un control. Se registraron la situación, las acciones realizadas y el resultado para conversar en la devolución.",
    );
    setAcuerdos(
      "Ejemplo de acuerdo: revisar el procedimiento, practicar su aplicación y definir un responsable, un plazo y una fecha de seguimiento.",
    );
  }
  function reiniciar() {
    setSupervisor({});
    setAutoevaluacion({});
    setEjemplo(false);
    setEvidencias("");
    setAcuerdos("");
  }
  return (
    <div className="evaluacion">
      <div className="evaluacion-cabecera">
        <div>
          <p className="etiqueta">SUPERVISOR + AUTOEVALUACIÓN + DEVOLUCIÓN</p>
          <h2>Observar, conversar y acordar mejoras.</h2>
          <p className="texto-pequeno">
            Evaluador: {puesto.reporta}. Cinco competencias, cada una con un
            peso del 20 %.
          </p>
        </div>
        <div className="acciones">
          <button
            className="boton-secundario"
            type="button"
            onClick={cargarEjemplo}
          >
            Cargar ejemplo ficticio
          </button>
          <button className="boton-texto" type="button" onClick={reiniciar}>
            Reiniciar
          </button>
        </div>
      </div>
      {ejemplo && (
        <p className="aviso-ejemplo">
          Simulación académica: los puntajes y comentarios son ficticios.
        </p>
      )}
      <div
        className="tabla-scroll panel-tabla"
        tabIndex={0}
        role="region"
        aria-label="Evaluación de desempeño"
      >
        <table className="tabla-evaluacion">
          <caption className="solo-lectores">
            Escala de 1 a 4. La fila resaltada corresponde a la competencia
            elegida para la demostración.
          </caption>
          <thead>
            <tr>
              <th scope="col">Competencia</th>
              <th scope="col">Requerido</th>
              <th scope="col">Supervisor</th>
              <th scope="col">Autoevaluación</th>
              <th scope="col">Lectura de la brecha</th>
            </tr>
          </thead>
          <tbody>
            {puesto.evaluacion.map((c) => {
              const resultado = estado(c.competencia, c.nivel);
              return (
                <tr
                  key={c.competencia}
                  className={
                    c.competencia === competencia ? "fila-elegida" : undefined
                  }
                >
                  <th scope="row">
                    {c.competencia}
                    <small>20 %</small>
                  </th>
                  <td>{c.nivel}</td>
                  <td>
                    <select
                      aria-label={`Supervisor: ${c.competencia}`}
                      value={supervisor[c.competencia] ?? 0}
                      onChange={(e) => {
                        setSupervisor((actual) => ({
                          ...actual,
                          [c.competencia]: Number(e.target.value),
                        }));
                      }}
                    >
                      <option value={0}>Elegir</option>
                      {[1, 2, 3, 4].map((n) => (
                        <option key={n} value={n}>
                          {n}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td>
                    <select
                      aria-label={`Autoevaluación: ${c.competencia}`}
                      value={autoevaluacion[c.competencia] ?? 0}
                      onChange={(e) => {
                        setAutoevaluacion((actual) => ({
                          ...actual,
                          [c.competencia]: Number(e.target.value),
                        }));
                      }}
                    >
                      <option value={0}>Elegir</option>
                      {[1, 2, 3, 4].map((n) => (
                        <option key={n} value={n}>
                          {n}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td>
                    <span className={`estado ${resultado.clase}`}>
                      {resultado.texto}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="resultado-evaluacion">
        <div>
          <span>Promedio del supervisor</span>
          <strong aria-live="polite">
            {promedio === null
              ? "—"
              : promedio.toLocaleString("es-AR", {
                  minimumFractionDigits: 1,
                  maximumFractionDigits: 2,
                })}
            <small> / 4</small>
          </strong>
        </div>
        <p>
          {promedio === null
            ? `Completá los cinco puntajes del supervisor (${completas}/5).`
            : "El promedio resume los cinco puntajes. Revisamos también cada competencia por separado."}{" "}
          La autoevaluación se compara en la devolución.
        </p>
      </div>
      {revisarSeguridad && (
        <p className="aviso-seguridad" role="status">
          Hay una brecha en calidad y seguridad. Debe atenderse aunque el
          promedio general sea alto; no se compensa con las otras notas.
        </p>
      )}
      <details className="desplegable devolucion">
        <summary>Evidencias, devolución y plan de desarrollo</summary>
        <div className="dos-columnas">
          <div>
            <h3>Conducta que estamos observando</h3>
            <p>
              <strong>
                {criterio.competencia} · nivel {criterio.nivel}
              </strong>
            </p>
            <p>{criterio.conducta}</p>
            <p className="texto-pequeno">
              Un nivel por debajo indica necesidad de desarrollo; dos o más
              niveles, prioridad. Un puntaje igual o superior alcanza lo
              esperado.
            </p>
          </div>
          <div>
            <label className="control" htmlFor="evidencias">
              Evidencias, fortalezas y comentarios
              <textarea
                id="evidencias"
                value={evidencias}
                onChange={(e) => setEvidencias(e.target.value)}
                rows={3}
              />
            </label>
            <label className="control" htmlFor="acuerdos">
              Acciones, responsable, plazo y seguimiento
              <textarea
                id="acuerdos"
                value={acuerdos}
                onChange={(e) => setAcuerdos(e.target.value)}
                rows={3}
              />
            </label>
          </div>
        </div>
      </details>
    </div>
  );
}
