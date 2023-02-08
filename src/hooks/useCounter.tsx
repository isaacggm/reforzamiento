import { useState } from "react"


export const useCounter = (inicial: number) => {
    const [valor, setValor] = useState<number>(0)

    const acumular = (numero:number) => {
        setValor(valor + numero)
    }

    return {
        valor, 
        acumular, 
    }
 
}
