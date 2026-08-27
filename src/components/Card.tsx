import { Clock, MapPin, MessageCircleMore, Trash } from "lucide-react";
import type { IRide } from "../models/IRide";
import { getInitials } from "../utils/FGetInitials";

interface ICardProps{
  ride: IRide,
  onDelete(id: number): Promise<void>
}

export const Card = ( {ride, onDelete}: ICardProps) => {
  return (
    <li className="flex flex-col shadow-default border border-border rounded-xl p-5 bg-container-bg  gap-3" key={ride.id}>
      <div className="flex flex-row justify-between">
        <div className="flex items-center flex-row gap-3">
        <span className="rounded-full w-10 h-10 flex items-center justify-center bg-bg text-accent-bg border border-border font-bold text-base">
          {getInitials(ride.name)}
        </span>
        <p className="font-bold text-black text-base">{ride.name}</p>
        </div>
        <button type="button" onClick={(event) => {
          event.preventDefault()
          onDelete(ride.id)
        }} 
        className="rounded-full w-7 h-7 flex items-center justify-center bg-bg text-text border border-border font-bold text-base"><Trash className="w-4 h-4"/></button>
      </div>

      <div className="gap-2 flex flex-col">
        <div className="flex flex-row gap-2 items-center text-sm">
          <span>
            <MapPin className="h-4 w-4" />
          </span>
          <p>
            Saindo de <b>{ride.city}</b>
          </p>
        </div>

        <div className="flex flex-row gap-2 items-center text-sm">
          <span>
            <Clock className="h-4 w-4" />
          </span>
          <p>
            {ride.date.replaceAll("-", "/")} às {ride.hour}
          </p>
        </div>

        <a
          href={`tel:${ride.phone}`}
          className="flex flex-row items-center justify-center gap-2 mt-2 text-sm font-medium text-contact-icon hover:opacity-80 transition-opacity bg-bg h-10 rounded-lg"
        >
          <MessageCircleMore
            className="color-contact-icon h-5 w-5"
          />
          <p className="text-black">Entrar em contato</p>
        </a>
      </div>
    </li>
  );
};
