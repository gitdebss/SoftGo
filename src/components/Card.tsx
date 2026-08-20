import { Clock, MapPin, MessageCircleMore } from "lucide-react";
import type { ICarona } from "../models/ICarona";

export const Card = ({ id, date, hour, city, name, phone }: ICarona) => {
    return (
        <li className="card container" key={id}>
            <div className="card-header flex f-row a-center">
                <span className="circle-icon">
                    {name.slice(0, 1).toUpperCase()}
                    {name.split(' ')[1].slice(0, 1).toUpperCase()}
                </span>
                <p>{name}</p>
            </div>

            <div className="card-body flex f-column">
                <div className="card-info">
                    <span><MapPin style={{ height: '14px', width: '14px' }} /></span>
                    <p>Saindo de <b>{city}</b></p>
                </div>

                <div className="card-info">
                    <span><Clock style={{ height: '14px', width: '14px' }} /></span>
                    <p>
                        {date.replaceAll("-", "/")} às {hour}
                    </p>
                </div>

                <a href={`tel:${phone}`} className="card-contact flex f-row a-center j-center">
                    <MessageCircleMore style={{ color: 'var(--contact-icon)', height: '20px', width: '20px' }} />
                    <p>Entrar em contato</p>
                </a>
            </div>
        </li>
    );
};
