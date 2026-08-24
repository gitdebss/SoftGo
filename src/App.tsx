import { useState } from "react";
import { Header } from "./components/Header";
import { FormRide } from "./components/FormRide";
import { Card } from "./components/Card";
import type { IRide } from "./models/IRide";
import { mockRides } from "./models/RidesMock";

function App() {
  const [rides, setrides] = useState<IRide[]>(mockRides);

  return (
    <>
      <Header />

      <main className="p-4">
        <h2 className="mb-3 text-lg font-bold text-black">Publicar carona</h2>
        <FormRide
          onSubmit={(ride) => {
            setrides([...rides, { ...ride, id: rides.length + 1 }]);
          }}
        />

        <button className="rounded-lg text-base px-3 w-fullrounded-lg py-2 h-12 uppercase font-medium w-full bg-container-bg text-accent-bg border border-accent-bg my-7">Buscar Caronas</button>

        <h2 className="mb-3 text-lg font-bold text-black">Caronas Disponíveis</h2>
        <ul className="flex flex-col gap-4 p-0 list-none">
          {rides.map((ride) => (
            <Card {...ride} key={ride.id} />
          ))}
        </ul>
      </main>
    </>
  );
}

export default App;
