import type { Puesto } from "../data/puestos";
import { niveles } from "../data/competencias";

export default function PuestoDetalle({
  puesto,
  competencia,
}: {
  puesto: Puesto;
  competencia: string;
}) {
  const perfil = puesto.perfil.find((c) => c.competencia === competencia)!;
  return (
    <div className="puesto-grid">
      <div className="panel">
        <p className="etiqueta">DESCRIPCIÓN Y ANÁLISIS DEL PUESTO</p>
        <h2>{puesto.nombre}</h2>
        <p>{puesto.objetivo}</p>
        <dl className="datos-puesto">
          <div>
            <dt>Área</dt>
            <dd>{puesto.area}</dd>
          </div>
          <div>
            <dt>Reporta a</dt>
            <dd>{puesto.reporta}</dd>
          </div>
          <div>
            <dt>Personas a cargo</dt>
            <dd>{puesto.personasACargo}</dd>
          </div>
        </dl>
        <details className="desplegable">
          <summary>Responsabilidades y requisitos</summary>
          <ul className="lista-simple">
            {puesto.responsabilidades.map((tarea) => (
              <li key={tarea}>{tarea}</li>
            ))}
          </ul>
          <dl className="requisitos">
            {puesto.requisitos.map((item) => (
              <div key={item.requisito}>
                <dt>{item.requisito}</dt>
                <dd>{item.descripcion}</dd>
              </div>
            ))}
            <div>
              <dt>Sustitución en caso de ausencia</dt>
              <dd>{puesto.sustitucion}</dd>
            </div>
          </dl>
        </details>
      </div>
      <div className="panel">
        <p className="etiqueta">PERFIL POR COMPETENCIAS · EJEMPLO ELEGIDO</p>
        <h2>{perfil.competencia}</h2>
        <div className="medidas-perfil">
          <div>
            <span>Relevancia</span>
            <strong>
              {perfil.relevancia}
              <small> / 4</small>
            </strong>
            <p>Importancia para el puesto.</p>
          </div>
          <div>
            <span>Nivel requerido</span>
            <strong>
              {perfil.nivel}
              <small> / 4</small>
            </strong>
            <p>Dominio que necesita la persona.</p>
          </div>
        </div>
        <span className="sello">Competencia {perfil.tipo.toLowerCase()}</span>
        <h3 className="subtitulo">Conducta esperada</h3>
        <p>{perfil.conducta}</p>
        <details className="desplegable">
          <summary>Cómo leer los niveles</summary>
          <ul className="lista-simple">
            {niveles.map((n) => (
              <li key={n.numero}>
                <strong>
                  {n.numero} · {n.nombre}:
                </strong>{" "}
                {n.texto}
              </li>
            ))}
          </ul>
          <p className="texto-pequeno">
            Los niveles son acumulativos: cada uno incluye los anteriores.
          </p>
        </details>
      </div>
      <details className="desplegable ancho-completo">
        <summary>Ver el perfil completo: 10 competencias</summary>
        <div
          className="tabla-scroll"
          tabIndex={0}
          role="region"
          aria-label="Perfil completo del puesto"
        >
          <table>
            <thead>
              <tr>
                <th scope="col">Competencia</th>
                <th scope="col">Tipo</th>
                <th scope="col">Relevancia</th>
                <th scope="col">Nivel requerido</th>
                <th scope="col">Conducta esperada</th>
              </tr>
            </thead>
            <tbody>
              {puesto.perfil.map((c) => (
                <tr
                  key={c.competencia}
                  className={
                    c.competencia === competencia ? "fila-elegida" : undefined
                  }
                >
                  <th scope="row">{c.competencia}</th>
                  <td>{c.tipo}</td>
                  <td>{c.relevancia}</td>
                  <td>{c.nivel}</td>
                  <td>{c.conducta}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </details>
    </div>
  );
}
