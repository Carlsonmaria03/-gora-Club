type Opcion<T extends string> = { id: T; nombre: string };

export default function Submenu<T extends string>({
  opciones,
  actual,
  cambiar,
  etiqueta,
}: {
  opciones: readonly Opcion<T>[];
  actual: T;
  cambiar: (valor: T) => void;
  etiqueta: string;
}) {
  return (
    <div className="submenu" role="group" aria-label={etiqueta}>
      {opciones.map((opcion) => (
        <button
          key={opcion.id}
          type="button"
          aria-pressed={actual === opcion.id}
          className={actual === opcion.id ? "seleccionado" : undefined}
          onClick={() => cambiar(opcion.id)}
        >
          {opcion.nombre}
        </button>
      ))}
    </div>
  );
}
