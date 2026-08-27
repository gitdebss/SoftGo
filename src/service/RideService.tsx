import { useEffect, useState } from "react"
import type { IFormRide } from "../models/IFormRide"
import type { IRide } from "../models/IRide"

const API_URL = 'http://localhost:3000/rides'

export async function getRides(search = '') {
    const url = search
        ? `${API_URL}?search=${encodeURIComponent(search)}`
        : `${API_URL}`

    const response = await fetch(url)

    if (!response.ok) {
        throw new Error('Erro ao buscar caronas')
    }

    return response.json()
}

export async function createRide(ride : IFormRide) {
    const response = await fetch(`${API_URL}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(ride),
    })

    if (!response.ok) {
        throw new Error('Erro ao criar carona')
    }

    return response.text()
}

export async function updateRide(id : number, ride : IFormRide) {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(ride),
    })

    if (!response.ok) {
        throw new Error('Erro ao atualizar carona')
    }
}

export async function deleteRide(id: number) {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
    })

    if (!response.ok) {
        throw new Error('Erro ao excluir carona')
    }
}
