import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"

function App() {

  return (
    <>
      <div className="min-h-[100dvh] bg-[#1B1A55] flex flex-col items-center">
        <Navbar></Navbar>
        <Hero></Hero>
      </div>
    </>
  )
}

export default App
