import './index.css'

import Footer from "./components/Footer"
import Hero from "./components/Hero"
import { Recipes } from "./components/Recipes"

function App() {
    return (
        <div className="App">
            <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-white to-gray-200">
                <div className="container mt-12 flex flex-col items-center justify-center gap-12 px-4">
                    <Hero />
                    <Recipes />
                    <Footer />
                </div>
            </main>
        </div>
    )
}

export default App
