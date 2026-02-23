import { useState } from "react"

type Props= {
    money: number
}
export default function ReturnValueMoney({money}: Props) {
    const formated = money.toLocaleString("pt-br", {
        minimumFractionDigits: 2,
        maximumFractionDigits:2
    })
    return(formated)
}