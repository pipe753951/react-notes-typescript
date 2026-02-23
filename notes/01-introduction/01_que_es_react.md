# Antes de comenzar: El problema de Vanilla JS

Antes que existiera React y otros frameworks, un código de contador era más o menos así:

```tsx
const button = document.querySelector("#mi-boton");
let contador = 0;

button.addEventListener("click", () => {
  contador++;
  document.querySelector("#contador").innerText = contador;
});
```

Este tipo de código, cuando crecía un código usando Vanilla JavaScript (Es decir, JavaScript puro) o jQuery, ocurría problemas cómo estos:

1. **Mantener la DOM es complicado**: Cuando cambia una variable, es necesario cambiar los elementos DOM que la utilizaban, haciendo más difícil la creación y mantenimiento del código.
2. **No hay una estructura clara:** No hay código centralizado, ya que dividir responsabilidades o reutilizar código puede ser engorroso, especialmente con la DOM.
3. **No es fácil mantener el código:** Al no tener facilidades para centralizar y ordenar el código, hace más difícil mantenerlo.

Además, como Vanilla JavaScript emplea HTML puro, reutilizar HTML también es complicado. Lo que hace más difícil el mantenimiento.

# La propuesta de React

React es una librería creada por Meta. Su propuesta es **construir interfaces de usuario** de una manera parecida a usar bloques tipo LEGO. React tiene estas características:

1. Emplea extensiones llamadas **JSX (JavaScript XML)** y **TSX (TypeScript XML)**, que combinan la sintaxis de los lenguajes JS o TS según la extensión, con la sintaxis de HTML y XML. Estas extensiones son utilizadas para facilitar el uso y reutilización de HTML a través de componentes y variables.
2. React emplea lo que se denomina la **DOM Virtual**: una copia de la DOM original que se utiliza para aplicar los cambios de React sobre él y actualizar sólo las diferencias entre esta y la DOM original.

# Estructura de un componente React

Todos los componentes de React son funciones. Estas funciones devuelven código parecido a HTML que pueden tener expresiones de JavaScript o de TypeScript (Se indican entre llaves).

Sumado a ello, estas funciones pueden tener hooks. En pocas palabras, los Hooks son funciones que permiten mantener un estado a lo largo de una aplicación de React.

Además, los componentes pueden tener funciones que reaccionar a acciones del usuario.

Este es un ejemplo de un componente React:

```tsx
// Importar hook.
import { useState } from "react";

export function Counter() {
  // Crear hook usando la desestructuración.
  const [count, setCount] = useState(0);

  // Crear función controladora
  const handleClick = () => {
    setCount(count + 1);
  };

  // Retornar contenido parecido a HTML.
  return (
    <div>
      <p>Has hecho click {count} veces</p>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}
```

> **Nota:** Hay que anotar que los componentes pueden recibir las propiedades (también conocidas como _props_), que son variables que cambian la presentación y el comportamiento de un componente al ser usado.

# ¿Por qué React es tan popular?

Se puede resaltar cuatro puntos:

1. La curva de aprendizaje es más suave.
2. React se basa en componentes.
3. Las actualizaciones son mucho más rápidas.
4. Tiene una Gran comunidad y soporte en proyectos reales y empresas.

> El instructor enfatiza que estas razones no explican del todo por qué React es tan popular. La verdadera razón según él es que la librería no tuvo muchos cambios significativos. Lo que ahorra el trabajo de modificar mucho código de proyectos grandes al actualizar la librería.
