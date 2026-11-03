const fuentes = [
  {
    autor: "Guerrero Dávalos",
    referencia:
      "Guerrero Dávalos, C. (2011). Una aproximación conceptual de la gestión por competencias. Universidad Michoacana de San Nicolás de Hidalgo.",
    aporte:
      "Concepción amplia de las competencias y enfoque multidimensional: las capacidades se ponen en práctica en un contexto de trabajo.",
    trabajo: "TP 1",
  },
  {
    autor: "Spencer y Spencer",
    referencia:
      "Spencer, L. M., Jr., & Spencer, S. M. (1993). Competence at work: Models for superior performance. John Wiley & Sons.",
    aporte:
      "Clasificación del diccionario en seis categorías y distinción entre competencias esenciales y diferenciadoras.",
    trabajo: "TP 1",
  },
  {
    autor: "Ernst & Young Consultores",
    referencia:
      "Ernst & Young Consultores. (s. f.). Gestión por competencias. En Manual del Director de Recursos Humanos.",
    aporte:
      "Referencia del marco de gestión por competencias utilizado en el primer trabajo.",
    trabajo: "TP 1",
  },
  {
    autor: "HR Performance Consulting",
    referencia: "HR Performance Consulting. (s. f.). Gestión por competencias.",
    aporte:
      "Relación entre la gestión de personas, sus capacidades y los objetivos organizacionales.",
    trabajo: "TP 1",
  },
  {
    autor: "Lévy-Leboyer",
    referencia:
      "Lévy-Leboyer, C. (1997). Gestión de las competencias: Cómo analizarlas, cómo evaluarlas, cómo desarrollarlas. Gestión 2000.",
    aporte:
      "Identificación, evaluación y desarrollo de competencias en relación con el trabajo.",
    trabajo: "TP 2",
  },
  {
    autor: "Martha Alles",
    referencia:
      "Alles, M. A. (2015). Dirección estratégica de recursos humanos: Gestión por competencias (3.ª ed.). Granica.",
    aporte:
      "Articulación entre estrategia, descriptivos de puestos, entrevistas y evaluación del desempeño.",
    trabajo: "TP 2",
  },
  {
    autor: "Javier Gil Flores",
    referencia:
      "Gil Flores, J. (2007). La evaluación de competencias laborales. Educación XX1, 10, 83–106.",
    aporte:
      "Comparación de las competencias observadas con el perfil requerido y registro de evidencias.",
    trabajo: "TP 2",
  },
  {
    autor: "Sofía Brazzolotto",
    referencia:
      "Brazzolotto, S. (2012). Aplicación de la evaluación de desempeño por competencias a las organizaciones. Universidad Nacional de Cuyo.",
    aporte:
      "Observación de conductas del puesto, evaluación del supervisor y preparación de los evaluadores.",
    trabajo: "TP 2",
  },
];

export default function Fundamentos() {
  return (
    <details className="fundamentos">
      <summary>Fundamentos del modelo</summary>
      <p className="texto-pequeno">
        Síntesis de los aportes y referencias incluidos en los dos trabajos
        prácticos.
      </p>
      <div className="fundamentos-grilla">
        {fuentes.map((fuente) => (
          <article key={fuente.autor}>
            <span className="etiqueta">{fuente.trabajo}</span>
            <h3>{fuente.autor}</h3>
            <p>{fuente.aporte}</p>
            <p className="referencia">{fuente.referencia}</p>
          </article>
        ))}
      </div>
    </details>
  );
}
