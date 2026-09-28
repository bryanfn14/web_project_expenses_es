# Dashboard de gastos y presupuestos

Aplicación web para registrar gastos y consultar un resumen del presupuesto. La interfaz está en español y funciona directamente en el navegador, sin servidor ni dependencias de instalación.

## Funcionalidades

- Asignar un presupuesto y consultar el saldo disponible.
- Añadir y eliminar gastos.
- Consultar el gasto total, el promedio y la categoría con mayor gasto.
- Ver los importes agrupados por categoría: Comida, Comer fuera, Transporte, Hogar y Suscripciones.
- Guardar el presupuesto y los gastos en el almacenamiento local del navegador (`localStorage`).
- Restablecer los datos con el botón **Borrar todo**. Esta acción borra el presupuesto y recupera la lista inicial de gastos de ejemplo.

## Cómo ejecutar

Abre `index.html` en un navegador. También puedes abrir la carpeta del proyecto con VS Code y servirla con una extensión como Live Server.

No hay un proceso de compilación ni dependencias que instalar.

## Datos iniciales

Al abrir la aplicación por primera vez se muestra una lista de gastos de ejemplo. Los cambios se conservan en el navegador utilizado; si borras los datos del sitio o abres la aplicación en otro navegador, los datos guardados no estarán disponibles allí.

## Estructura del proyecto

- `index.html`: estructura de la interfaz.
- `scripts/calculations.js`: datos iniciales y cálculos de gastos, categorías y saldo.
- `scripts/handle-html.js`: actualización de la interfaz y manejo de las interacciones.
- `scripts/index.js`: carga y persistencia de los datos en `localStorage`.
- `blocks/`: estilos de los componentes de la página.
- `pages/index.css`: hoja de estilos principal que importa los estilos del proyecto.
- `images/`: recursos gráficos.
- `vendor/`: estilos de terceros incluidos localmente.
