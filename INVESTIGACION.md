
**Archivo 2: `INVESTIGACION.md`**

# Investigación: Web Components, HTML Templates y frameworks

**Integrante:** Yeffry Alexander Vargas Reyes 

**Caso práctico:** Fichas de mascotas para Veterinaria San Pío.

---

# Parte 1. Web Components

### 1. ¿Qué problema resuelven los Web Components y qué aporta cada tecnología?

Los Web Components permiten crear elementos HTML personalizados que se pueden reutilizar en diferentes partes de una página y en otros proyectos. Custom Elements permite crear etiquetas propias con JavaScript. Shadow DOM mantiene separados los estilos y la estructura interna del componente. HTML Templates permite definir una estructura HTML que se puede reutilizar sin escribirla varias veces.

### 2. ¿En qué se diferencia un `<template>` de un `<div>` oculto con `display: none`?

Un elemento `<template>` guarda contenido HTML que no aparece en la página y no se muestra hasta que JavaScript lo utiliza. En cambio, un `<div>` con `display: none` sí forma parte del documento y su contenido ya está creado, aunque permanezca oculto. Además, `document.querySelector()` puede encontrar el div directamente, mientras que el contenido del template se encuentra dentro de su propiedad `content`.

### 3. ¿Qué cambia entre el Shadow DOM en modo open y closed?

La diferencia está en el acceso que JavaScript tiene al Shadow DOM desde el exterior del componente. Cuando se utiliza el modo `open`, se puede acceder a su estructura mediante la propiedad `shadowRoot` del elemento. En el modo `closed`, esa propiedad devuelve `null`, por lo que no se puede acceder directamente de esa manera. Ambos modos permiten encapsular la estructura y los estilos del componente.

### 4. ¿Qué es un slot y para qué sirve en un componente reutilizable?

Un `<slot>` es un espacio reservado dentro de un Web Component que permite introducir contenido HTML desde el lugar donde se utiliza el componente. Sirve para personalizar una parte del componente sin tener que modificar su estructura interna. En este proyecto, cada ficha de mascota recibe observaciones diferentes mediante el slot.

### 5. ¿Qué navegadores soportan hoy los Web Components?

Los Web Components cuentan con soporte en los navegadores modernos, como Google Chrome, Microsoft Edge, Mozilla Firefox, Safari y Opera. Sus principales tecnologías, como Custom Elements, Shadow DOM y HTML Templates, están disponibles en las versiones actuales de estos navegadores. Internet Explorer no ofrece soporte nativo completo.

**Fuente:** MDN Web Docs – Web Components.  
**Enlace:** https://developer.mozilla.org/en-US/docs/Web/API/Web_components

---

# Parte 2. Frameworks, librerías y Node.js

### 1. Diferencia entre estándar del navegador, librería, framework y entorno de ejecución.

Un estándar del navegador es una tecnología que los navegadores implementan de forma nativa, como HTML, CSS y Web Components. Una librería es un conjunto de herramientas que el programador utiliza cuando las necesita, como React. Un framework proporciona una estructura y unas reglas para desarrollar aplicaciones, como Angular. Por último, un entorno de ejecución permite ejecutar código, como Node.js, que ejecuta JavaScript fuera del navegador.

**Ejemplo:** HTML es un estándar, React es una librería para crear interfaces, Angular es un framework para construir aplicaciones y Node.js permite ejecutar JavaScript en el servidor.

### 2. Tabla comparativa

| Criterio | Web Components nativos | React | Vue | Angular |
|---|---|---|---|---|
| Tipo | Estándar del navegador. | Librería de JavaScript. | Framework progresivo de JavaScript. | Framework de desarrollo web. |
| Cómo se crea un componente | Con Custom Elements, clases JavaScript y elementos HTML. | Con funciones o componentes que utilizan JSX. | Con componentes que utilizan templates o archivos `.vue`. | Con clases, decoradores `@Component` y templates. |
| Necesita instalar herramientas (npm) | No necesita librerías externas para funcionar en el navegador. | Generalmente sí, para configurar el proyecto. | Generalmente sí, para configurar el proyecto. | Sí, para instalar Angular CLI y sus dependencias. |
| Ventajas principales | No necesita librerías externas y permite reutilizar componentes en diferentes proyectos. | Facilita la creación de interfaces dinámicas y tiene un ecosistema amplio. | Tiene una sintaxis sencilla, es flexible y permite desarrollar por componentes. | Ofrece herramientas integradas y estructura para proyectos grandes. |
| Desventajas principales | Requiere escribir más código manualmente y gestionar varias funcionalidades por cuenta propia. | Necesita herramientas adicionales para resolver otras necesidades de una aplicación. | Su ecosistema puede requerir herramientas adicionales según el proyecto. | Tiene una curva de aprendizaje mayor y requiere conocer varios conceptos. |

### 3. ¿Qué es Node.js, para qué se usa y qué relación tiene npm con React, Vue y Angular?

Node.js es un entorno de ejecución que permite utilizar JavaScript fuera del navegador, principalmente para crear servidores y ejecutar herramientas de desarrollo. npm es el administrador de paquetes que permite instalar, actualizar y organizar las dependencias de un proyecto. React, Vue y Angular utilizan herramientas que pueden instalarse y administrarse mediante npm.

Si una tienda en línea utiliza React y Node.js, React se encarga de construir la interfaz que ve el usuario, como los productos, botones y formularios. Node.js puede encargarse del servidor, procesar solicitudes, consultar información y comunicarse con la base de datos.

### 4. Elige la herramienta que usarías en cada caso y justifica.

**a. Un botón de chat que varias empresas pegan en sus propias páginas.**

Elegiría Web Components nativos porque permiten crear un elemento personalizado que se puede utilizar en páginas desarrolladas con diferentes tecnologías. Además, no depende de que cada empresa tenga instalada una librería específica. Su Shadow DOM permite mantener separados los estilos del botón de chat para evitar conflictos con los diseños de otras páginas.

**b. Una aplicación web grande para un banco, con muchos equipos de desarrollo.**

Elegiría Angular porque proporciona una estructura organizada para desarrollar aplicaciones grandes. Cuenta con herramientas integradas, componentes, servicios y mecanismos para organizar el código. Esto facilita que varios equipos puedan trabajar en diferentes partes de una misma aplicación manteniendo una estructura común.

---

# Fuentes

1. **MDN Web Docs – Web Components.**  
   https://developer.mozilla.org/en-US/docs/Web/API/Web_components

2. **MDN Web Docs – Using templates and slots.**  
   https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_templates_and_slots

3. **React – Documentación oficial.**  
   https://react.dev/

4. **Vue.js – Documentación oficial.**  
   https://vuejs.org/guide/introduction.html

5. **Angular – Documentación oficial.**  
   https://angular.dev/overview

6. **Node.js – Introduction to Node.js.**  
   https://nodejs.org/learn/getting-started/introduction-to-nodejs

7. **npm Docs – About npm.**  
   https://docs.npmjs.com/about-npm/

8. **WHATWG – HTML Standard: Custom Elements.**  
   https://html.spec.whatwg.org/multipage/custom-elements.html