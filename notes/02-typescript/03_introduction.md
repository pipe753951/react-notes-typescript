# Crear un proyecto con Vite

Para crear un proyecto con Vite, se utiliza el comando:

```bash
npm create vite
```

Esto permite indicar el tipo de Proyecto.

# Estructura de un proyecto de Vite

## Carpetas

1. `node_modules`: Paquetes de `npm`. La mayoría de manera preestablecida son de desarrollo.
2. `public`: Archivos que el público puede obtener o visualizar.
3. `src`: El código fuente del proyecto.

## Archivos

1. `.gitignore`
2. `index.html`: Índice que arranca el proyecto en la Web.
3. `package-lock.json`: Archivo generado por `npm` para mantener información específica sobre los paquetes que se obtuvieron.
4. `package.json`: Información acerca del paquete o proyecto `npm`. Contiene el nombre, la versión, la descripción, la licencia, entre otras propiedades. Además, contiene la lista de paquetes que se utilizan para producción y para desarrollo.
5. `tsconfig.json`: Configuración de TypeScript.
