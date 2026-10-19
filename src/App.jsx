import { useState } from "react"

import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"

const App = () => {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((p) => p.id === product.id)
      if (exists) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        )
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  const removeFromCart = (id) =>
    setCart((prev) => prev.filter((p) => p.id !== id))

  return (
    <>
      <Header cartCount={cart.length} />

      <main className="max-w-6xl mx-auto pt-20 px-4">
        <Outlet context={{ cart, addToCart, removeFromCart }} />
      </main>

      <Footer />
    </>
  )
}

export default App