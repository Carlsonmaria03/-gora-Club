import { useState } from "react";
import Submenu from "../components/Submenu";
import { competencias } from "../data/competencias";

const opciones = [
  { id: "modelo", nombre: "El modelo" },
  { id: "seleccionadas", nombre: "Generales y específicas" },
  { id: "diccionario", nombre: "Diccionario" },
] as const;
type Vista = (typeof opciones)[number]["id"];
function normalizar(texto: string) {
  return texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}
const ordenGenerales = [
  "servicio",
  "equipo",
  "comunicacion",
  "calidad",
  "adaptabilidad",
];
const ordenEspecificas = [
  "operativa",
  "fidelizacion",
  "marca",
  "administrativa",
  "liderazgo",
];

export default function Competencias() {
  const [vista, setVista] = useState<Vista>("modelo");
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("Todas");
  const [distincion, setDistincion] = useState("Todas");
  const [elegida, setElegida] = useState("calidad");
  const filtradas = competencias.filter(
    (c) =>
      normalizar(c.nombre + " " + c.definicion).includes(
        normalizar(busqueda),
      ) &&
      (categoria === "Todas" || c.categoria === categoria) &&
      (distincion === "Todas" || c.distincion === distincion),
  );
  const actual = filtradas.find((c) => c.id === elegida) ?? filtradas[0];
  const indice = actual ? filtradas.indexOf(actual) : -1;

  return (
    <section aria-labelledby="titulo-competencias">
      <div className="encabezado-pagina">
        <div>
          <p className="etiqueta">TP 01 · LA BASE DEL MODELO</p>
          <h1 id="titulo-competencias" className="titulo-pagina">
            Qué esperamos y cómo lo definimos.
          </h1>
        </div>
        <span className="sello">18 competencias en el diccionario</span>
      </div>
      <Submenu
        opciones={opciones}
        actual={vista}
        cambiar={setVista}
        etiqueta="Temas de competencias"
      />
      {vista === "modelo" && (
        <div className="modelo-grid">
          <div className="panel modelo-intro">
            <p className="etiqueta">GESTIÓN POR COMPETENCIAS</p>
            <h2>Conectar personas, trabajo y proyecto.</h2>
            <p>
              El modelo relaciona los conocimientos, las habilidades, las
              actitudes y las conductas de las personas con los objetivos de
              Ágora. Nos ayuda a definir qué necesita cada puesto, cómo
              seleccionar y cómo acompañar el desarrollo.
            </p>
            <div className="acciones-modelo">
              <span>Identificar</span>
              <span>Desarrollar</span>
              <span>Evaluar</span>
            </div>
            <a href="#gestion" className="boton-principal">
              Ver el modelo en acción <span aria-hidden="true">→</span>
            </a>
          </div>
          <div className="panel">
            <p className="etiqueta">¿QUÉ ES UNA COMPETENCIA?</p>
            <h2>Lo que sabemos, puesto en práctica.</h2>
            <p>
              Integra conocimientos, habilidades, actitudes y comportamientos
              que se expresan en situaciones concretas de trabajo. El enfoque
              multidimensional también considera los valores, los rasgos, las
              motivaciones y el contexto.
            </p>
            <div className="ejemplo">
              <strong>Un ejemplo en Ágora</strong>
              <p>
                Conocer el sistema de reservas es una parte del trabajo. Atender
                bien también requiere escuchar al socio, comunicarse con
                claridad y resolver un inconveniente.
              </p>
            </div>
          </div>
        </div>
      )}
      {vista === "seleccionadas" && (
        <>
          <p className="introduccion-corta">
            En el TP 1 seleccionamos cinco competencias generales y cinco
            específicas. El diccionario reúne esas diez y otras ocho que amplían
            el modelo.
          </p>
          <div className="dos-columnas">
            {[
              {
                titulo: "Generales",
                detalle: "Transversales al trabajo en el club.",
                ids: ordenGenerales,
              },
              {
                titulo: "Específicas",
                detalle:
                  "Vinculadas con responsabilidades de determinados puestos o áreas.",
                ids: ordenEspecificas,
              },
            ].map((grupo) => (
              <div className="panel" key={grupo.titulo}>
                <h2>{grupo.titulo}</h2>
                <p className="texto-pequeno">{grupo.detalle}</p>
                <div className="acordeones">
                  {grupo.ids.map((id) => {
                    const c = competencias.find((item) => item.id === id)!;
                    return (
                      <details key={id}>
                        <summary>{c.nombre}</summary>
                        <p>{c.definicion}</p>
                      </details>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
      {vista === "diccionario" && (
        <div className="diccionario-grid">
          <div className="panel filtros">
            <h2>Explorá el diccionario.</h2>
            <label className="control" htmlFor="buscar-competencia">
              Buscar
              <input
                id="buscar-competencia"
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                placeholder="Por ejemplo: comunicación"
                type="search"
              />
            </label>
            <label className="control" htmlFor="categoria-competencia">
              Categoría
              <select
                id="categoria-competencia"
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
              >
                <option>Todas</option>
                {[...new Set(competencias.map((c) => c.categoria))].map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </label>
            <label className="control" htmlFor="distincion-competencia">
              Esenciales y diferenciadoras
              <select
                id="distincion-competencia"
                value={distincion}
                onChange={(e) => setDistincion(e.target.value)}
              >
                <option>Todas</option>
                <option value="Esencial">Esenciales</option>
                <option value="Diferenciadora">Diferenciadoras</option>
              </select>
            </label>
            <label className="control" htmlFor="elegir-competencia">
              Competencia
              <select
                id="elegir-competencia"
                value={actual?.id ?? ""}
                onChange={(e) => setElegida(e.target.value)}
                disabled={!actual}
              >
                {!actual && <option value="">Sin coincidencias</option>}
                {filtradas.map((c) => (
                  <option value={c.id} key={c.id}>
                    {c.nombre}
                  </option>
                ))}
              </select>
            </label>
            <p className="texto-pequeno" aria-live="polite">
              {filtradas.length} de 18 competencias.
            </p>
          </div>
          <div className="panel ficha-competencia">
            {actual ? (
              <>
                <div className="etiquetas">
                  <span>{actual.categoria}</span>
                  <span>{actual.distincion}</span>
                  {actual.seleccion && <span>{actual.seleccion}</span>}
                </div>
                <h2>{actual.nombre}</h2>
                <p>{actual.definicion}</p>
                <div className="ejemplo">
                  <strong>
                    {actual.distincion === "Esencial"
                      ? "Para un desempeño eficaz"
                      : "Para distinguir un desempeño superior"}
                  </strong>
                  <p>
                    {actual.distincion === "Esencial"
                      ? "Es necesaria para desempeñarse eficazmente, aunque por sí sola no distingue un desempeño superior."
                      : "Permite distinguir un desempeño superior respecto de un desempeño promedio."}
                  </p>
                </div>
                <div className="paginacion">
                  <button
                    type="button"
                    className="boton-secundario"
                    disabled={indice <= 0}
                    onClick={() => setElegida(filtradas[indice - 1].id)}
                  >
                    ← Anterior
                  </button>
                  <span>
                    {indice + 1} / {filtradas.length}
                  </span>
                  <button
                    type="button"
                    className="boton-secundario"
                    disabled={indice >= filtradas.length - 1}
                    onClick={() => setElegida(filtradas[indice + 1].id)}
                  >
                    Siguiente →
                  </button>
                </div>
              </>
            ) : (
              <div>
                <h2>No encontramos coincidencias.</h2>
                <p>Probá con otra palabra o cambiá los filtros.</p>
                <button
                  type="button"
                  className="boton-secundario"
                  onClick={() => {
                    setBusqueda("");
                    setCategoria("Todas");
                    setDistincion("Todas");
                  }}
                >
                  Limpiar filtros
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
