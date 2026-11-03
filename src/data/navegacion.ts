export const secciones = [
  { id: "inicio", nombre: "Inicio" },
  { id: "nosotros", nombre: "El club" },
  { id: "competencias", nombre: "Competencias" },
  { id: "gestion", nombre: "Gestión de personas" },
  { id: "induccion", nombre: "Inducción" },
] as const;

export type SeccionId = (typeof secciones)[number]["id"];

export function obtenerSeccion(): SeccionId {
  const hash = window.location.hash.slice(1);
  if (hash === "valores") return "nosotros";
  return secciones.find((seccion) => seccion.id === hash)?.id ?? "inicio";
}
