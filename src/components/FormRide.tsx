import type { IFormRide } from "../models/IFormRide";

interface IFormProps {
  onSubmit(ride: IFormRide): void;
}

export const FormRide = ({ onSubmit }: IFormProps) => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const ride: IFormRide = {
          date: String(formData.get("date") || ""),
          hour: String(formData.get("hour") || ""),
          name: String(formData.get("name") || ""),
          phone: String(formData.get("phone") || ""),
          city: String(formData.get("city") || ""),
        };
        onSubmit(ride);
      }}
      className="flex flex-col gap-4 flex-auto text-left shadow-default border border-border rounded-xl p-5 bg-container-bg"
    >
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-auto flex-col gap-1.5">
          <label className="text-sm font-medium block" htmlFor="date">Data</label>
          <input type="date" id="date" name="date" className="rounded-lg border border-border py-2 px-3 font-normal text-base" required />
        </div>
        <div className="flex flex-auto flex-col gap-1.5">
          <label className="text-sm font-medium block" htmlFor="hour">Hora</label>
          <input type="time" id="hour" name="hour" className="rounded-lg border border-border py-2 px-3 font-normal text-base" required />
        </div>
      </div>

      <div className="flex flex-auto flex-col gap-1.5">
        <label className="text-sm font-medium block" htmlFor="name">Nome</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Digite seu nome"
          className="rounded-lg border border-border py-2 px-3 font-normal text-base" required
        />
      </div>
      <div className="flex flex-auto flex-col gap-1.5">
        <label className="text-sm font-medium block" htmlFor="phone">Telefone</label>
        <input
          type="text"
          id="phone"
          name="phone"
          placeholder="(00) 00000-0000"
          className="rounded-lg border border-border py-2 px-3 font-normal text-base" required
        />
      </div>
      <div className="flex flex-auto flex-col gap-1.5">
        <label className="text-sm font-medium block" htmlFor="city">Cidade</label>
        <input type="text" id="city" name="city" placeholder="Ex: São Paulo" className="rounded-lg border border-border py-2 px-3 font-normal text-base" required />
      </div>

      <button type="submit" className="border-0 rounded-lg text-base py-2 px-3 h-12 uppercase font-medium w-full bg-accent-bg text-container-bg hover:opacity-80 transition-opacity">
        Salvar
      </button>
    </form>
  );
};
