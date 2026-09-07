# Telecom & Server Solutions - Catálogo E-commerce

## Descripción
Proyecto desarrollado para la evaluación del Módulo 2 de React. Consiste en un catálogo interactivo de hardware y equipos de telecomunicaciones. La aplicación permite visualizar equipos de infraestructura, filtrar por nombre en tiempo real, interactuar con las imágenes mediante un zoom dinámico y simular la selección de equipos a través de un contador individual por producto.

## Componentes Creados
El proyecto aplica buenas prácticas de separación de responsabilidades a través de 6 componentes ubicados en la carpeta `/src/components`:
* **Header:** Encabezado con identidad visual del catálogo.
* **SearchBar:** Input controlado que gestiona el estado de búsqueda general.
* **ProductList:** Contenedor dinámico que renderiza la lista de productos filtrados usando `map`.
* **ProductCard:** Tarjeta que muestra la información recibida por *props* y maneja estados locales (`useState`) para la animación de la imagen y la cantidad seleccionada.
* **Button:** Botón reutilizable que acepta variantes de estilo (`primary` / `secondary`) y funciones manejadoras de eventos.
* **Footer:** Pie de página con información del estudiante y derechos del proyecto.

## Tecnologías Usadas
* React (Vite)
* JavaScript (JSX)
* CSS (Estilos en línea y estructura base)
* Local JSON (Simulación de persistencia de datos)

## Instrucciones para ejecutar el proyecto
1. Clonar este repositorio en tu equipo local.
2. Abrir la terminal en la raíz de la carpeta clonada.
3. Ejecutar el comando `npm install` para instalar las dependencias de Node.
4. Ejecutar el comando `npm run dev` para iniciar el entorno de desarrollo.
5. Abrir en el navegador la ruta local que indique la terminal (por defecto `http://localhost:5174/`).

## Capturas de Pantalla

![Vista General de los equipos](./pantalla1.png)

![Filtro de búsqueda e interacciones del carrito](./pantalla2.png)