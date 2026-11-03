# React + TypeScript + Vite

Esta plantilla proporciona una configuración mínima para utilizar React con Vite, con actualización de módulos en caliente (HMR) y algunas reglas de ESLint.

Actualmente, hay dos complementos oficiales disponibles:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) utiliza [Oxc](https://oxc.rs).
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) utiliza [SWC](https://swc.rs/).

## Compilador de React

El compilador de React no está habilitado en esta plantilla debido a su impacto en el rendimiento durante el desarrollo y la generación de la versión final de la aplicación. Para agregarlo, consultá [esta documentación](https://react.dev/learn/react-compiler/installation).

## Ampliación de la configuración de ESLint

Si estás desarrollando una aplicación para producción, recomendamos actualizar la configuración para habilitar reglas de análisis de código que tengan en cuenta los tipos:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Otras configuraciones...

      // Eliminá tseslint.configs.recommended y reemplazalo por esta configuración
      tseslint.configs.recommendedTypeChecked,
      // Como alternativa, usá esta configuración para aplicar reglas más estrictas
      tseslint.configs.strictTypeChecked,
      // Opcionalmente, agregá esta configuración para aplicar reglas de estilo
      tseslint.configs.stylisticTypeChecked,

      // Otras configuraciones...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // Otras opciones...
    },
  },
])
```

También podés instalar [eslint-plugin-react-x](https://npmx.dev/package/eslint-plugin-react-x) y [eslint-plugin-react-dom](https://npmx.dev/package/eslint-plugin-react-dom) para incorporar reglas de análisis de código específicas de React:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Otras configuraciones...
      // Habilitar las reglas de análisis de código para React
      reactX.configs['recommended-typescript'],
      // Habilitar las reglas de análisis de código para React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // Otras opciones...
    },
  },
])
```