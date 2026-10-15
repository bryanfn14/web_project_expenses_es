# Dashboard de gastos y presupuestos

Aplicación web interactiva para registrar gastos y consultar un resumen del presupuesto. La interfaz está construida en español y funciona directamente en el navegador, ofreciendo persistencia de datos mediante el almacenamiento local.

---

## Descripción del Proyecto

Este proyecto parte de una estructura base en HTML y estilos visuales en CSS. El objetivo principal de este desarrollo ha sido implementar la lógica de programación en JavaScript para dar vida a la interfaz, gestionando la interacción del usuario, modificando el DOM en tiempo real y asegurando una navegación fluida e interactiva.

---

## Tecnologías Utilizadas

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=github&logoColor=white)

---

## Funcionalidades Principales

- **Manipulación dinámica del DOM:** Creación, modificación y eliminación de elementos visuales según las acciones del usuario.
- **Manejo de eventos:** Interacción activa mediante clics, desplazamientos o entrada de datos.
- **Asignación de presupuesto:** Registro de un presupuesto inicial y consulta del saldo disponible en tiempo real.
- **Gestión de gastos:** Añadir y eliminar gastos de manera dinámica.
- **Métricas y resumen:** Cálculo automático del gasto total, el promedio por gasto y la categoría con mayor impacto.
- **Agrupación por categoría:** Consulta de importes organizados por Comida, Comer fuera, Transporte, Hogar y Suscripciones.
- **Persistencia local:** Almacenamiento automático del presupuesto y los gastos mediante `localStorage`.
- **Restablecimiento de datos:** Botón para borrar todos los datos personalizados y recuperar la lista inicial de gastos de ejemplo.

---

## Cómo Ejecutar

Abre `index.html` directamente en cualquier navegador web. También puedes abrir la carpeta del proyecto en VS Code y servirla con una extensión como Live Server.

No requiere ningún proceso de compilación ni dependencias externas que instalar.

---

## Datos Iniciales

Al abrir la aplicación por primera vez se cargará una lista de gastos de ejemplo. Todos los cambios realizados se conservan en el navegador utilizado; si borras los datos del sitio o abres la aplicación en otro navegador, los datos guardados no estarán disponibles allí.

---

## Estructura del Proyecto

- `index.html`: Estructura semántica de la interfaz.
- `scripts/calculations.js`: Datos iniciales y cálculos matemáticos (gastos, categorías y saldo).
- `scripts/handle-html.js`: Actualización dinámica del DOM y manejo de interacciones.
- `scripts/index.js`: Carga inicial y persistencia de datos en `localStorage`.
- `blocks/`: Estilos modulares de los componentes de la página.
- `pages/index.css`: Hoja de estilos principal que importa la arquitectura CSS.
- `images/`: Recursos gráficos y multimedia del proyecto.
- `vendor/`: Estilos e hilos de terceros incluidos localmente.

---

## Planes de Mejora y Futuras Actualizaciones

- [ ] **Persistencia de Datos:** Implementar `localStorage` para guardar el estado del usuario entre sesiones.

---

## Autor

- Desarrollado por **Bryan Fernández** - [bryanfn14](https://github.com/bryanfn14)
