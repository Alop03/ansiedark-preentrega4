import { useState } from "react"
import ItemCount from "./ItemCount"
import "./ItemDetail.css"

// Presenta la información completa de una joya seleccionada.
function ItemDetail({ item }) {
    const [mensaje, setMensaje] = useState("")

    const {
        name,
        price,
        category,
        img,
        stock,
        description,
    } = item

    const precioFormateado = new Intl.NumberFormat("es-UY", {
        style: "currency",
        currency: "UYU",
        maximumFractionDigits: 0,
    }).format(price)

    function agregarCantidad(cantidad) {
        const textoUnidad = cantidad === 1
            ? "unidad"
            : "unidades"

        const textoAccion = cantidad === 1
            ? "agregada"
            : "agregadas"

        setMensaje(
            `${cantidad} ${textoUnidad} de ${name} ${textoAccion} al carrito.`,
        )
    }

    return (
        <article className="detalle">
            <div className="detalle__imagen-contenedor">
                <img
                    className="detalle__imagen"
                    src={img}
                    alt={name}
                />
            </div>

            <div className="detalle__informacion">
                <p className="detalle__categoria">
                    {category}
                </p>

                <h3 className="detalle__nombre">
                    {name}
                </h3>

                <p className="detalle__descripcion">
                    {description}
                </p>

                <p className="detalle__precio">
                    {precioFormateado}
                </p>

                <p className="detalle__stock">
                    Stock disponible: {stock}
                </p>

                <ItemCount
                    initial={1}
                    stock={stock}
                    onAdd={agregarCantidad}
                />

                {mensaje && (
                    <p
                        className="detalle__mensaje"
                        role="status"
                    >
                        {mensaje}
                    </p>
                )}
            </div>
        </article>
    )
}

export default ItemDetail
