import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { FormCarona } from './components/FormCarona'
import { Card } from './components/Card'
import type { ICarona } from './models/ICarona'
import { mockCaronas } from './models/CaronasMock'

function App() {
  const [caronas, setCaronas] = useState<ICarona[]>(
    mockCaronas
  )

  return (
    <>
      <Header />

      <main>
        <h2>Publicar Carona</h2>
        <FormCarona onSubmit={(carona) => {
          setCaronas([...caronas, { ...carona, id: caronas.length + 1 }])
        }} />
      
        <button className="secondary">Buscar Caronas</button>

      <h2>Caronas Disponíveis</h2>
      <ul className="caronas">
        {caronas.map((carona) => (
          <Card {...carona} />
        ))}
      </ul>
      </main>
    </>
  )
}

export default App