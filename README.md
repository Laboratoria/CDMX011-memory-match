# Memory Match Game

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
* [4. Consideraciones generales](#4-consideraciones-generales)
* [5. Criterios de aceptación mínimos del proyecto](#5-criterios-de-aceptación-mínimos-del-proyecto)
* [6. Hacker edition](#6-hacker-edition)
* [7. Consideraciones técnicas](#7-consideraciones-técnicas)
* [8. Pistas, tips y lecturas complementarias](#8-pistas-tips-y-lecturas-complementarias)
* [9. Checklist](#9-checklist)

***

## 1. Preámbulo

El juego [_Memory Match_](https://en.wikipedia.org/wiki/Concentration_(card_game)),
también conocido como _Concentration_, _Match Match_, _Match Up_, _Memory_,
entre otros, es un juego de cartas en el que todas las cartas se ponen cara
abajo sobre una superficie y se le dan la vuelta a dos cartas en cada turno. El
objetivo del juego es destapar parejas de cartas que coincidan.

![Concentration (card game)](https://upload.wikimedia.org/wikipedia/commons/4/4d/WMCZ_Protected_Areas_Card_Game-7_%28cropped%29.jpg)

Ejemplos:

* [Santa Tracker de Google](https://santatracker.google.com/matching.html)
* [Match The Memory](https://matchthememory.com/play)

## 2. Resumen del proyecto

En este proyecto construirás una versión _web_ del juego _Memory Match_, en la
que una jugadora pueda jugar sola, en el navegador.

El objetivo principal de este proyecto es que aprendas a diseñar y construir una
interfaz web basada en data e interacción con la usuaria.

## 3. Objetivos de aprendizaje

Reflexiona y luego marca los objetivos que has llegado a entender y aplicar en tu proyecto. Piensa en eso al decidir tu estrategia de trabajo.

### Web APIs

* [ ] **Uso de selectores del DOM**

  <details><summary>Links</summary><p>

  * [Manipulación del DOM](https://curriculum.laboratoria.la/es/topics/browser/02-dom/03-1-dom-methods-selection)
  * [Introducción al DOM - MDN](https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Introduction)
  * [Localizando elementos DOM usando selectores - MDN](https://developer.mozilla.org/es/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors)

</p></details>

* [ ] **Manejo de eventos del DOM (listeners, propagación, delegación)**

  <details><summary>Links</summary><p>

  * [Introducción a eventos - MDN](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Events)
  * [EventTarget.addEventListener() - MDN](https://developer.mozilla.org/es/docs/Web/API/EventTarget/addEventListener)
  * [EventTarget.removeEventListener() - MDN](https://developer.mozilla.org/es/docs/Web/API/EventTarget/removeEventListener)
  * [El objeto Event](https://developer.mozilla.org/es/docs/Web/API/Event)

</p></details>

* [ ] **Manipulación dinámica del DOM**

  <details><summary>Links</summary><p>

  * [Introducción al DOM](https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Introduction)
  * [Node.appendChild() - MDN](https://developer.mozilla.org/es/docs/Web/API/Node/appendChild)
  * [Document.createElement() - MDN](https://developer.mozilla.org/es/docs/Web/API/Document/createElement)
  * [Document.createTextNode()](https://developer.mozilla.org/es/docs/Web/API/Document/createTextNode)
  * [Element.innerHTML - MDN](https://developer.mozilla.org/es/docs/Web/API/Element/innerHTML)
  * [Node.textContent - MDN](https://developer.mozilla.org/es/docs/Web/API/Node/textContent)

</p></details>

### JavaScript

* [ ] **Diferenciar entre tipos de datos primitivos y no primitivos**

* [ ] **Arrays (arreglos)**

  <details><summary>Links</summary><p>

  * [Arreglos](https://curriculum.laboratoria.la/es/topics/javascript/04-arrays)
  * [Array - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/)
  * [Array.prototype.sort() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
  * [Array.prototype.forEach() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
  * [Array.prototype.map() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
  * [Array.prototype.filter() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
  * [Array.prototype.reduce() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

</p></details>

* [ ] **Objetos (key, value)**

  <details><summary>Links</summary><p>

  * [Objetos en JavaScript](https://curriculum.laboratoria.la/es/topics/javascript/05-objects/01-objects)

</p></details>

* [ ] **Variables (declaración, asignación, ámbito)**

  <details><summary>Links</summary><p>

  * [Valores, tipos de datos y operadores](https://curriculum.laboratoria.la/es/topics/javascript/01-basics/01-values-variables-and-types)
  * [Variables](https://curriculum.laboratoria.la/es/topics/javascript/01-basics/02-variables)

</p></details>

* [ ] **Uso de condicionales (if-else, switch, operador ternario, lógica booleana)**

  <details><summary>Links</summary><p>

  * [Estructuras condicionales y repetitivas](https://curriculum.laboratoria.la/es/topics/javascript/02-flow-control/01-conditionals-and-loops)
  * [Tomando decisiones en tu código — condicionales - MDN](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/conditionals)

</p></details>

* [ ] **Uso de bucles/ciclos (while, for, for..of)**

  <details><summary>Links</summary><p>

  * [Bucles (Loops)](https://curriculum.laboratoria.la/es/topics/javascript/02-flow-control/02-loops)
  * [Bucles e iteración - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Loops_and_iteration)

</p></details>

* [ ] **Funciones (params, args, return)**

  <details><summary>Links</summary><p>

  * [Funciones (control de flujo)](https://curriculum.laboratoria.la/es/topics/javascript/02-flow-control/03-functions)
  * [Funciones clásicas](https://curriculum.laboratoria.la/es/topics/javascript/03-functions/01-classic)
  * [Arrow Functions](https://curriculum.laboratoria.la/es/topics/javascript/03-functions/02-arrow)
  * [Funciones — bloques de código reutilizables - MDN](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Functions)

</p></details>

* [ ] **Pruebas unitarias (unit tests)**

  <details><summary>Links</summary><p>

  * [Empezando con Jest - Documentación oficial](https://jestjs.io/docs/es-ES/getting-started)

</p></details>

* [ ] **Módulos de ECMAScript (ES Modules)**

  <details><summary>Links</summary><p>

  * [import - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/import)
  * [export - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/export)

</p></details>

* [ ] **Uso de linter (ESLINT)**

* [ ] **Uso de identificadores descriptivos (Nomenclatura y Semántica)**

* [ ] **Diferenciar entre expresiones (expressions) y sentencias (statements)**

### Control de Versiones (Git y GitHub)

* [ ] **Git: Instalación y configuración**

* [ ] **Git: Control de versiones con git (init, clone, add, commit, status, push, pull, remote)**

* [ ] **Git: Integración de cambios entre ramas (branch, checkout, fetch, merge, reset, rebase, tag)**

* [ ] **GitHub: Creación de cuenta y repos, configuración de llaves SSH**

* [ ] **GitHub: Despliegue con GitHub Pages**

  <details><summary>Links</summary><p>

  * [Sitio oficial de GitHub Pages](https://pages.github.com/)

</p></details>

* [ ] **GitHub: Colaboración en Github (branches | forks | pull requests | code review | tags)**

## 4. Consideraciones generales

* Este proyecto se debe resolverse de forma individual.
* El proyecto será entregado subiendo tu código a GitHub (commit/push) y la
  interfaz será desplegada usando [GitHub Pages](https://pages.github.com/).
* Tiempo para completarlo: Toma como referencia 3 semanas.

## 5. Criterios de aceptación mínimos del proyecto

Los criterios para considerar que has completado este proyecto son:

### Implementación de la Interfaz de Usuario (HTML/CSS/JS)

**No** es necesario que construyas la interfaz de usuario desde 0, por eso este proyecto viene con un prototipo de alta fidelidad en HTML/CSS.

Tu tiempo de hacking es escaso, así que deberás priorizar en los OAs que necesitas trabajar.

Como mínimo, tu implementación debe:

1. Dado un set de cartas, barajar las cartas y mostrarlas en la interfaz usando el _algoritmo de Fisher-Yates_.
2. Permitir al usuario _destapar_ máximo 2 cartas a la vez, eso quiere decir que no pueden haber mas de 3 cartas giradas al mismo tiempo.
3. Al girar las cartas dejar las cartas que coincidan giradas.
4. Indicar al usuario que ganó cuando haya girado todas las cartas.

## 6. Consideraciones técnicas

La lógica del proyecto debe estar implementada completamente en JavaScript,
HTML y CSS. En este proyecto NO está permitido usar librerías o frameworks, solo
[vanilla JavaScript](https://medium.com/laboratoria-how-to/vanillajs-vs-jquery-31e623bbd46e).

Para iniciar un nuevo juego, siempre tendremos que _barajar_ las cartas antes de
pintarlas en la pantalla. Para eso, te invitamos a que explores algoritmos
existentes para este tipo de operación (llamada _shuffle_ en inglés), como por
ejemplo el [_algoritmo de Fisher-Yates (aka Knuth)_](https://es.wikipedia.org/wiki/Algoritmo_de_Fisher-Yates).

En este proyecto no se espera que _inventes_ o implementes tu propio algoritmo
para barajar las cartas, si no que _googlees_, veas opciones existentes,
consideres opciones y adaptes una a tu proyecto (agregando una función `shuffle`
que se pueda usar en tu aplicación).

El _boilerplate_ contiene una estructura de archivos como punto de partida, asi como el prototipo de alta fidelidad en HTML/CSS y la configuración de dependencias.

```text
.
├── .babelrc
├── .editorconfig
├── .eslintrc
├── .gitignore
├── package.json
├── README.md
└── src
    ├── components
    │   ├── App.js
    │   └── App.spec.js
    ├── data
    │   ├── pokemon
    │   │   ├── pokemon.js
    │   │   └── pokemon.json
    │   ├── README.md
    │   └── webdev
    │       ├── webdev.js
    │       └── webdev.json
    ├── index.html
    ├── main.js
    └── style.css
```

### `src/index.html`

A diferencia del proyecto anterior, en este archivo hemos incluido la estructura HTML que sera requerida como punto de partida.

### `src/style.css`

A diferencia del proyecto anterior, en este proyecto hemos dado estilos por lo que no deberás preocuparte por ello, de tal forma que tu no necesitas hacerlo y podrás dedicarte a navegar el garabato desde JS y el DOM.

### `src/main.js`

Recomendamos usar `src/main.js` como punto de entrada de tu aplicación. El
_boilerplate_ incluye este archivo para _conectar_ o _montar_ el _componente_
`App` en el DOM. De esta forma podremos hacer pruebas unitarias de nuestros
componentes sin necesidad de que estén conectados a un DOM global.

Esta no es la única forma de dividir tu código, puedes usar más archivos y
carpetas, siempre y cuando la estructura sea clara para tus compañeras.

### `src/components/App.js`

Este archivo contiene un _componente_ de ejemplo que muestra cómo podemos
representar un _componente_ como una función que retorna un `HTMLElement`. A la
hora de construir interfaces es útil pensar en términos de _componentes_ o
_vistas_ que podemos ir anidando unas dentro de otras. Te invitamos a que
pienses qué _componentes_ o _cajitas_ necesitas para construir tu aplicación y
que vayas agregando _componentes_ en el directorio `components` para implementar
cada uno de ellos. Aunque, otra vez, la forma de organizar tu archivos depende
al final de tí y de tu equipo. Hay muchas formas de hacerlo, y el _boilerplate_
es solo una sugerencia 🙊.

### `src/components/App.spec.js`

Este archivo muestra cómo podemos crear archivos con _especificaciones_
(expresadas como pruebas unitarias) de nuestros componentes.

### `src/data`

En esta carpeta hay data con sets de cartas de ejemplo que puedes usar en tu
aplicación, así como información sobre cómo agregar tus propios sets.
Encontrarás una carpeta por cada set, y dentro de cada carpeta dos archivos: uno
con la extensión `.js` y otro `.json`. Ambos archivos contienen la misma data;
la diferencia es que el `.js` lo usaremos a través de un `import`, mientras que
el `.json` está ahí para opcionalmente cargar la data de forma asíncrona con
[`fetch()`](https://developer.mozilla.org/es/docs/Web/API/Fetch_API).

## 8. Pistas, tips y lecturas complementarias

### Primeros pasos

Cuando ya estés lista para codear, te sugerimos empezar de esta manera:

1. Debes hacer un :fork_and_knife:
   [fork](https://help.github.com/articles/fork-a-repo/) del repo de tu cohort,
   tus _coaches_ te compartirán un _link_ a un repo y te darán acceso de lectura
   en ese repo.
2. :arrow_down: [Clona](https://help.github.com/articles/cloning-a-repository/)
   tu *fork* a tu computadora (copia local) con el siguiente comando

    ```sh
    git clone --branch js git@github.com:Laboratoria/CDMX011-memory-match.git
    ```

3. 📦 Instala las dependencias del proyecto con el comando `npm install`. Esto
   asume que has instalado [Node.js](https://nodejs.org/) (que incluye [npm](https://docs.npmjs.com/)).
4. Si todo ha ido bien, deberías poder ejecutar las :traffic_light:
   pruebas unitarias (unit tests) con el comando `npm test`.
5. Para ver la interfaz de tu programa en el navegador, usa el comando
  `npm start` para arrancar el servidor web y dirígete a
  `http://localhost:5000` en tu navegador.
6. A codear se ha dicho! :rocket:

### Contenido de referencia

#### Desarrollo Front-end

* Unidad de arreglos en curso de JavaScript en LMS.
* Unidad de objetos en curso de JavaScript en LMS.
* Unidad de funciones en curso de JavaScript en LMS.
* Unidad de DOM en curso de Browser JavaScript en LMS.
* [Array en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array)
* [Array.sort en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/sort)
* [Array.map en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/map)
* [Array.filter en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/filter)
* [Array.reduce en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/reduce)
* [Array.forEach en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/forEach)
* [Object.keys en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/keys)
* [Object.entries en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/entries)
* [json.org](https://json.org/json-es.html)
* [expressions-vs-statements](https://2ality.com/2012/09/expressions-vs-statements.html)
* [expresión vs sentencia](https://openclassrooms.com/en/courses/4309531-descubre-las-funciones-en-javascript/5108986-diferencia-entre-expresion-y-sentencia)
* [datos atómicos vs datos estructurados](https://www.todojs.com/tipos-datos-javascript-es6/)
* [Modulos: Export](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/export)
* [Modulos: Import](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/import)

#### Herramientas

* [Git](https://git-scm.com/)
* [GitHub](https://github.com/)
* [GitHub Pages](https://pages.github.com/)
* [Node.js](https://nodejs.org/)
* [Jest](https://jestjs.io/)

#### Organización del Trabajo

* [Historias de Usuario](https://www.youtube.com/watch?v=ky6wFiF5vMk&t=344s).
  Ojo que Cris no diferencia _Definición de terminado_ de _Criterios de
  Aceptación_ y nosotros sí lo haremos. Más detalles en la guía.
* [Cómo dividir H.U.](https://www.youtube.com/watch?v=Ueq786iZ30I&t=341s)
* [Guía de Historias de usuario](https://docs.google.com/presentation/d/e/2PACX-1vQhx9D36NjpH-Daea-ITPUDUzNL8ZiNAprq_7b5PSUrfutk45tEtaOLz2lmd8f54_5jX1hypDM8f8SM/pub?start=false&loop=false&delayms=60000)

## 9. Checklist

* [ ] Usa VanillaJS.
* [ ] Pasa linter (`npm run pretest`)
* [ ] Pasa tests (`npm test`)
* [ ] UI: Muestra cartas _barajadas_ correctamente.
* [ ] UI: Permite al usuario _destapar_ las cartas de 2 en 2.
* [ ] UI: Deja destapadas las cartas que coincidan al destaparlas.
* [ ] UI: Indica al usuario que ganó cuando sea relevante.
