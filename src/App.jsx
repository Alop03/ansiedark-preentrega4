import Navbar from "./components/Navbar"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import "./App.css"

// Compone la navegación y las secciones principales del e-commerce.
function App() {
    return (
        <>
            <Navbar />

            <main>
                <ItemListContainer
                    greeting="Joyas para quienes hacen de su identidad una estética"
                />

                <ItemDetailContainer
                    productId="anillo-niebla"
                />
            </main>
        </>
    )
}

export default App
