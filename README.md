# Ansiedark — Pre-entrega 4

Cuarta pre-entrega del curso de React JS de Coderhouse.

Ansiedark es una propuesta de suscripción mensual de joyas para personas que hacen de su identidad una estética.

## Objetivo de la entrega

Esta entrega incorpora la vista detallada de una joya mediante una promesa dinámica, manteniendo separadas la obtención de datos, la administración del estado y la presentación visual.

El proyecto permite:

- Cargar asincrónicamente un catálogo de joyas.
- Buscar una joya determinada mediante su ID.
- Mostrar la información completa del producto seleccionado.
- Seleccionar una cantidad sin superar el stock disponible.
- Comunicar visualmente los estados de carga, error y confirmación.

## Funcionalidades incorporadas

- Función dinámica `getProductById(productId)`.
- Búsqueda de productos mediante `.find()`.
- Promesa local con una demora simulada de dos segundos.
- Resolución de la promesa si el producto existe.
- Rechazo de la promesa si el ID no corresponde a ningún producto.
- Manejo de estados con `useState`.
- Ejecución de la petición con `useEffect`.
- Uso de `async/await` y `try/catch/finally`.
- Vista resumida para las tarjetas del catálogo.
- Vista completa para el detalle del producto.
- Componente reutilizable para seleccionar cantidades.
- Controles que respetan el stock disponible.
- Mensajes visuales de carga, error y confirmación.
- Diseño adaptable a diferentes tamaños de pantalla.

## Flujo de datos

La información de los productos se encuentra en:

```text
src/mock/asyncMock.js
```

La función `getProductById` recibe un identificador, busca el producto correspondiente y devuelve una promesa:

```js
getProductById("anillo-niebla")
```

La promesa se resuelve después de dos segundos para simular el comportamiento de una petición a una API.

Si el ID existe, devuelve el producto encontrado. Si no existe, rechaza la promesa con un error.

Por el momento, el ID se define temporalmente desde `App.jsx`. En una próxima etapa será obtenido dinámicamente desde la URL mediante React Router.

## Componentes principales

### `ItemListContainer`

Solicita la colección completa de productos y administra los estados del catálogo.

### `ItemList`

Recibe los productos mediante props y utiliza `.map()` para generar el listado.

### `Item`

Presenta la información resumida de cada producto:

- Imagen.
- Categoría.
- Nombre.
- Precio.

### `ItemDetailContainer`

Recibe el ID del producto, ejecuta `getProductById`, administra los estados de carga y error y entrega el resultado a `ItemDetail`.

### `ItemDetail`

Presenta la información completa de la joya seleccionada:

- Imagen principal.
- Nombre.
- Precio.
- Categoría.
- Descripción.
- Stock disponible.
- Selector de cantidad.

### `ItemCount`

Administra la cantidad seleccionada mediante un estado interno.

El contador:

- Comienza en una unidad.
- No permite seleccionar menos de una unidad.
- No permite superar el stock disponible.
- Recibe el stock mediante props.
- Comunica la cantidad seleccionada mediante `onAdd`.

## Separación de responsabilidades

Cada parte del proyecto tiene una responsabilidad específica:

```text
getProductById
    Busca y devuelve un producto mediante una promesa.

ItemDetailContainer
    Ejecuta la promesa y administra el estado.

ItemDetail
    Presenta la información completa del producto.

ItemCount
    Controla la cantidad seleccionada.
```

## Tecnologías utilizadas

- React 19
- Vite
- JavaScript
- CSS
- React Icons
- Git y GitHub

## Instalación

Clonar el repositorio:

```bash
git clone https://github.com/Alop03/ansiedark-preentrega4.git
```

Ingresar al proyecto:

```bash
cd ansiedark-preentrega4
```

Instalar las dependencias:

```bash
npm install
```

Iniciar el servidor de desarrollo:

```bash
npm run dev
```

## Validación del proyecto

Ejecutar el analizador de código:

```bash
npm run lint
```

Generar la versión de producción:

```bash
npm run build
```

## Autor

Álvaro Sigüertt — Proyecto desarrollado para el curso de React JS de Coderhouse.
