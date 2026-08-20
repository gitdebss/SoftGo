import type { IFormCarona } from "../models/IFormCarona"

interface IFormProps {
    onSubmit(carona: IFormCarona): void
}

export const FormCarona = ({ onSubmit }: IFormProps) => {
    return (
        <form onSubmit={(event) => {
            event.preventDefault()
            const formData = new FormData(event.currentTarget)
            const carona: IFormCarona = {
                date: String(formData.get('date') || ''),
                hour: String(formData.get('hour') || ''),
                name: String(formData.get('name') || ''),
                phone: String(formData.get('phone') || ''),
                city: String(formData.get('city') || ''),
            }
            onSubmit(carona)
        }} className="container">
            <div className="flex f-row">
                <div className="input-group">
                    <label htmlFor="date">Data</label>
                    <input type="date" id="date" name="date" />
                </div>
                <div className="input-group">
                    <label htmlFor="hour">Hora</label>
                    <input type="time" id="hour" name="hour" />
                </div>
            </div>

            <div className="input-group">
                <label htmlFor="name">Nome</label>
                <input type="text" id="name" name="name" placeholder="Digite seu nome" />
            </div>
            <div className="input-group">
                <label htmlFor="phone">Telefone</label>
                <input type="text" id="phone" name="phone" placeholder="(00) 00000-0000" />
            </div>
            <div className="input-group">
                <label htmlFor="city">Cidade</label>
                <input type="text" id="city" name="city" placeholder="Ex: São Paulo" />
            </div>
        
            <button type="submit" className="primary">Salvar</button>
        </form>
    )
}