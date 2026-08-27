import { Header } from "./components/Header";
import { FormRide } from "./components/FormRide";
import { Card } from "./components/Card";
import { createRide, deleteRide, getRides } from "./service/RideService";
import { useEffect, useState } from "react";
import type { IRide } from "./models/IRide";

function App() {

   const [rides, setRides] = useState<IRide[]>([])

    async function loadRides() {
        const data = await getRides()
        setRides(data)
    }

    useEffect(() => {
        loadRides()
    }, [])

    const handleDelete = async (id: number): Promise<void> => {
      await deleteRide(id)
      await loadRides()
    }

    const handleSubmit = async (ride: IRide): Promise<void> => {
      await createRide(ride)
      await loadRides()
    }

  return (
    <>
      <Header />

      <main className="p-4">
        <h2 className="mb-3 text-lg font-bold text-black">Publicar carona</h2>
        <FormRide
          onSubmit={
            handleSubmit
          }
        />

        <button className="rounded-lg text-base px-3 w-fullrounded-lg py-2 h-12 uppercase font-medium w-full bg-container-bg text-accent-bg border border-accent-bg my-7" onClick={()=> {loadRides()}}>Buscar Caronas</button>

        <h2 className="mb-3 text-lg font-bold text-black">Caronas Disponíveis</h2>
        <ul className="flex flex-col gap-4 p-0 list-none">
          {rides.map((ride) => (
            <Card ride={ride}
                  onDelete={
                    handleDelete
                  }
                  key={ride.id} />
          ))}
        </ul>
      </main>
    </>
  );
}

export default App;
