import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { FormCarona } from "./components/FormCarona";
import { Card } from "./components/Card";
import type { ICarona } from "./models/ICarona";
import { mockCaronas } from "./models/CaronasMock";

function App() {
  const [caronas, setCaronas] = useState<ICarona[]>(mockCaronas);

  return (
    <>
      <Header />

      <main className="p-4">
        <h2 className="mb-3 text-lg font-bold text-black">Publicar Carona</h2>
        <FormCarona
          onSubmit={(carona) => {
            setCaronas([...caronas, { ...carona, id: caronas.length + 1 }]);
          }}
        />

        <button className="rounded-lg text-base px-3 w-fullrounded-lg py-2 h-12 uppercase font-medium w-full bg-(--container-bg) text-(--accent-bg) border border-(--accent-bg) my-7">Buscar Caronas</button>

        <h2 className="mb-3 text-lg font-bold text-black">Caronas Disponíveis</h2>
        <ul className="flex flex-col gap-4 p-0 list-none">
          {caronas.map((carona) => (
            <Card {...carona} />
          ))}
        </ul>
      </main>
    </>
  );
}

export default App;
