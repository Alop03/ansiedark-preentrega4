import { useEffect, useState } from "react"
import { getProductById } from "../mock/asyncMock"
import ItemDetail from "./ItemDetail"
import "./ItemDetailContainer.css"

// Obtiene una joya por ID y administra la carga y los errores.
function ItemDetailContainer({ productId }) {
    const [item, setItem] = useState(null)
    const [cargando, setCargando] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {
        async function cargarProducto() {
            setCargando(true)
            setError("")

            try {
                const productoRecibido =
                    await getProductById(productId)

                setItem(productoRecibido)
            } catch {
                setItem(null)
                setError(
                    "No pudimos encontrar la joya seleccionada.",
                )
            } finally {
                setCargando(false)
            }
        }

        cargarProducto()
    }, [productId])

    return (
        <section
            className="detalle-contenedor"
            aria-labelledby="titulo-detalle"
        >
            <header className="detalle-contenedor__encabezado">
                <p className="detalle-contenedor__etiqueta">
                    Pieza seleccionada
                </p>

                <h2
                    id="titulo-detalle"
                    className="detalle-contenedor__titulo"
                >
                    Conocé cada detalle
                </h2>
            </header>

            {cargando && (
                <p
                    className="detalle-contenedor__estado"
                    role="status"
                >
                    Preparando el detalle de la joya...
                </p>
            )}

            {error && (
                <p
                    className="detalle-contenedor__estado detalle-contenedor__estado--error"
                    role="alert"
                >
                    {error}
                </p>
            )}

            {!cargando && !error && item && (
                <ItemDetail item={item} />
            )}
        </section>
    )
}

export default ItemDetailContainer
