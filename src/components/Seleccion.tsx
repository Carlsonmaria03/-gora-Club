import type { Puesto } from "../data/puestos";

const etapas = [
  "Identificar la vacante y confirmar la necesidad.",
  "Revisar descriptivo, requisitos y niveles de competencia.",
  "Elegir los canales y publicar el aviso.",
  "Revisar currículums y realizar el primer contacto.",
  "Realizar la entrevista mixta con ejemplos STAR.",
  "Comparar las evidencias con el perfil y decidir entre RRHH y el área.",
  "Comunicar el resultado y, con autorización, conservar perfiles para futuras búsquedas.",
];
const guia = [
  [
    "Apertura",
    "Presentación, propósito, duración y descripción del club y del puesto.",
  ],
  [
    "Trayectoria",
    "¿Cuáles fueron tus principales responsabilidades en experiencias anteriores?",
  ],
  ["Motivación", "¿Qué te interesó de Ágora Club y de esta posición?"],
  [
    "Trabajo en equipo",
    "Contame una situación en la que coordinaste con otras personas para alcanzar un objetivo.",
  ],
  [
    "Comunicación",
    "Describí una conversación difícil en el trabajo. ¿Cómo la abordaste?",
  ],
  [
    "Adaptabilidad",
    "Contame una situación en la que cambiaron las prioridades o el modo de trabajo.",
  ],
  [
    "Mirada sobre sí mismo",
    "¿Cuáles son tus fortalezas y qué competencia necesitás desarrollar?",
  ],
  [
    "Aprendizaje",
    "¿Cómo reaccionás ante una devolución? Mencioná un ejemplo concreto.",
  ],
  ["Cierre", "Preguntas del candidato, próximas etapas y agradecimiento."],
];

export default function Seleccion({
  puesto,
  competencia,
}: {
  puesto: Puesto;
  competencia: string;
}) {
  const pregunta = puesto.entrevista.find(
    (p) => p.competencia === competencia,
  )!;
  const nivel = puesto.perfil.find((c) => c.competencia === competencia)!.nivel;
  return (
    <div>
      <div className="seleccion-grid">
        <div className="panel pregunta-star">
          <p className="etiqueta">ENTREVISTA SEMIESTRUCTURADA Y MIXTA</p>
          <div className="etiquetas">
            <span>{competencia}</span>
            <span>Nivel requerido: {nivel}</span>
          </div>
          <h2>Una pregunta para buscar evidencias.</h2>
          <blockquote>{pregunta.pregunta}</blockquote>
          <p className="texto-pequeno">
            Pedimos experiencias concretas y repreguntamos para aclarar la
            participación personal y el resultado. Registramos el ejemplo que
            respalda la valoración.
          </p>
        </div>
        <div className="panel">
          <p className="etiqueta">GUÍA STAR</p>
          <h2>Ordenamos lo que nos cuentan.</h2>
          <div className="star-lista">
            {[
              {
                letra: "S",
                titulo: "Situación",
                texto: "¿Qué estaba pasando?",
              },
              {
                letra: "T",
                titulo: "Tarea",
                texto: "¿Cuál era tu responsabilidad?",
              },
              {
                letra: "A",
                titulo: "Acción",
                texto: "¿Qué hiciste concretamente?",
              },
              {
                letra: "R",
                titulo: "Resultado",
                texto: "¿Qué ocurrió después?",
              },
            ].map((item) => (
              <div key={item.letra}>
                <span>{item.letra}</span>
                <div>
                  <h3>{item.titulo}</h3>
                  <p>{item.texto}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="dos-columnas desplegables-final">
        <details className="desplegable">
          <summary>Reclutamiento mixto y etapas de selección</summary>
          <p>
            Combinamos búsquedas internas y externas. Las externas pueden
            incluir portales de empleo, redes, recomendaciones y convenios con
            instituciones educativas o deportivas.
          </p>
          <ol className="lista-simple">
            {etapas.map((etapa) => (
              <li key={etapa}>{etapa}</li>
            ))}
          </ol>
        </details>
        <details className="desplegable">
          <summary>Guía común y criterios para valorar</summary>
          <dl className="requisitos">
            {guia.map(([titulo, texto]) => (
              <div key={titulo}>
                <dt>{titulo}</dt>
                <dd>{texto}</dd>
              </div>
            ))}
          </dl>
          <h3>Escala de valoración de ejemplos</h3>
          <ol className="lista-simple">
            <li>Conducta inicial con necesidad de apoyo frecuente.</li>
            <li>Autonomía en una situación habitual.</li>
            <li>Análisis y coordinación en una situación compleja.</li>
            <li>
              Ejemplos consistentes de mejoras en equipos, procesos u
              organización.
            </li>
          </ol>
          <p className="texto-pequeno">
            La decisión considera también conocimientos, experiencia, motivación
            y relación con los valores. Si la información no alcanza, pedimos
            otro ejemplo.
          </p>
        </details>
      </div>
    </div>
  );
}
