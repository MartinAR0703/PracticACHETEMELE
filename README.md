#  Proyecto: Página Web Interactiva

## Descripción del Proyecto

Este proyecto consiste en el desarrollo de una **página web interactiva** realizada como parte de la práctica **U2-1** de la asignatura **Ingeniería de Software (ENE-JUN 2026)**.

La aplicación fue desarrollada utilizando **HTML, CSS y JavaScript**, aplicando principios de **desarrollo ágil mediante Scrum** y trabajo colaborativo en equipos de dos integrantes.

La página implementa funcionalidades básicas de interacción con el usuario y manipulación del **DOM (Document Object Model)** mediante JavaScript.

### Funcionalidades principales

La página permite:

- Visualizar el **nombre del equipo desarrollador**
- Conocer a los **integrantes mediante foto y descripción**
- Interactuar con **botones que modifican la apariencia de la página**
- Experimentar con **manipulación dinámica del DOM**

Integrantes del Equipo:
Arce Rodríguez Martín
Aguilera Aparicio Eduardo

# Historias de Usuario (User Stories)

## US1 — Cambio de color de fondo

**Historia de usuario**

"Como usuario quiero presionar un botón que cambie el color de fondo, para percibir la interactividad de la página."

### Criterios de aceptación

- El botón **“Cambiar color de fondo”** es visible en la página
- Al hacer clic, el **color de fondo cambia**
- Los colores **rotan en ciclo (mínimo 5 colores)**
- Después del último color, el siguiente clic **regresa al primero**
- El código JavaScript está en **script.js**
- El botón presenta **efecto hover**

---

## US2 — Identidad del equipo

**Historia de usuario**

"Como usuario quiero ver un rótulo con el nombre del equipo, para identificar a los desarrolladores."

### Criterios de aceptación

- El **nombre del equipo es visible** al cargar la página
- El texto tiene un **estilo diferenciado**
- Tamaño mínimo de **24px**
- El nombre aparece **en la parte superior de la página**
- El nombre corresponde al **acordado por el equipo**

---

## US3 — Presentación de integrantes

**Historia de usuario**

"Como usuario quiero ver la foto y descripción de cada integrante, para conocer quiénes realizaron la página."

### Criterios de aceptación

- Al cargar la página se muestra **la foto y descripción del primer integrante**
- La foto tiene tamaño aproximado de **150x150 px**
- La foto tiene **bordes redondeados (circular)**
- La descripción incluye al menos el **nombre del integrante**
- Foto y descripción están **alineadas correctamente**
- Las imágenes **cargan correctamente**

---

## US4 — Alternar entre integrantes

**Historia de usuario**

"Como usuario quiero cambiar entre la foto de un integrante y la del otro, para ver la información de ambos."

### Criterios de aceptación

- Existe un botón **“Mostrar siguiente integrante”**
- Al hacer clic se muestra **el segundo integrante**
- Al hacer clic nuevamente **regresa al primero (cíclico)**
- Foto y descripción **se actualizan simultáneamente**
- El botón funciona correctamente **después de múltiples clics**
- Las rutas de las imágenes **son válidas**

- # Definition of Done

      US1: Botón cambia el color de fondo de forma cíclica
      US2: Nombre del equipo visible y estilizado
      US3: Foto y descripción del primer integrante visibles al cargar
      US4: Botón alterna correctamente entre los integrantes
      Imágenes cargan correctamente
      Página funcional en navegador

Se adjunta el tablero de simulación de el Sprint backlog y Sprint:
*Product backlog*
https://www.notion.so/796158f6d6924cb9870f6fff1487751d?v=c0a3d5f95eb0408da3fb16dd339b2577&source=copy_link
*Sprint*
https://www.notion.so/318aabfffd1680a38aa6f9ead0fc4c1c?v=318aabfffd16801989bb000c3486eb49&source=copy_link
