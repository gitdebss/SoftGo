import { Clock, MapPin, MessageCircleMore } from "lucide-react";
import type { ICarona } from "../models/ICarona";

export const Card = ({ id, date, hour, city, name, phone }: ICarona) => {
  return (
    <li className="flex flex-col shadow-[0px_1px_2px_0px_#0000000D] border border-(--border) rounded-xl p-5 bg-(--container-bg)  gap-3" key={id}>
      <div className="flex items-center flex-row gap-3">
        <span className="rounded-full w-10 h-10 flex items-center justify-center bg-(--bg) text-(--accent-bg) border border-(--border) font-bold text-base">
          {name.slice(0, 1).toUpperCase()}
          {name.split(" ")[1].slice(0, 1).toUpperCase()}
        </span>
        <p className="font-bold text-black text-base">{name}</p>
      </div>

      <div className="gap-2 flex flex-col">
        <div className="flex flex-row gap-2 items-center text-sm">
          <span>
            <MapPin style={{ height: "14px", width: "14px" }} />
          </span>
          <p>
            Saindo de <b>{city}</b>
          </p>
        </div>

        <div className="flex flex-row gap-2 items-center text-sm">
          <span>
            <Clock style={{ height: "14px", width: "14px" }} />
          </span>
          <p>
            {date.replaceAll("-", "/")} às {hour}
          </p>
        </div>

        <a
          href={`tel:${phone}`}
          className="flex flex-row items-center justify-center gap-2 mt-2 text-sm font-medium text-(--contact-icon) hover:opacity-80 transition-opacity bg-(--bg) h-10 rounded-lg"
        >
          <MessageCircleMore
            style={{
              color: "var(--contact-icon)",
              height: "20px",
              width: "20px",
            }}
          />
          <p>Entrar em contato</p>
        </a>
      </div>
    </li>
  );
};
