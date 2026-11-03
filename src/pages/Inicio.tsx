export default function Inicio() {
  return (
    <section className="inicio-grid" aria-labelledby="titulo-inicio">
      <div>
        <p className="etiqueta">
          PROYECTO LUXUS · MODELO DE GESTIÓN POR COMPETENCIAS
        </p>
        <h1 id="titulo-inicio">
          Personas que construyen <em>comunidad.</em>
        </h1>
        <p className="descripcion">
          Un recorrido por Ágora Club y nuestra propuesta para incorporar,
          acompañar y desarrollar a quienes forman parte del equipo.
        </p>
        <div className="resumen-tp">
          <a href="#competencias">
            <span>TP 01</span>
            <strong>La base del modelo</strong>
            <p>Identidad, estructura y competencias que orientan el trabajo.</p>
            <small>Explorar competencias →</small>
          </a>
          <a href="#gestion">
            <span>TP 02</span>
            <strong>El modelo en acción</strong>
            <p>
              Perfiles de puestos, entrevistas de selección y evaluación del
              desempeño.
            </p>
            <small>Ver gestión de personas →</small>
          </a>
        </div>
        <p className="nota-inicio">
          Elegí una sección del menú para hacer la demostración paso a paso.
        </p>
      </div>
      <div className="agorix-portada">
        <span>ÁGORA CLUB</span>
        <img
          src="/imagenes/agorix-padel.png"
          alt="Agorix, mascota de Ágora Club, con su paleta de pádel"
          width="512"
          height="768"
        />
        <p>Deporte · Bienestar · Comunidad</p>
      </div>
    </section>
  );
}
