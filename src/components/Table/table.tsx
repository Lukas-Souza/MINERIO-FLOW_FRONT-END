"use client";
import { useEffect, useState } from "react"
import "../Table/style.css"
import LineTable from "./LineTable/LineTable"
import GetLotMiinerio from "@/src/Api/LotMinerio/GetLoteMinerio"
import { statusColors } from "../Cards/Cards";

// number ou int ou decimal 
export interface Minerio {
  idLote: number;
  idMineradora: string;
  teor: number;
  pesoQuantidade: number;
  valorPKilo: number;
  unidadeDeMedidaPeso: string;
  tipoMinerio: string;
  status: string;
  dataExtracao: string;
  busca:string
}

type Props ={
  busca: string
}

export default function Table({busca}: Props) {
const [lotes,setLotes] = useState<Minerio[]>([])
useEffect(()=>{
 async function Carregar() {
  const response = await GetLotMiinerio()
  setLotes(response)

 }
 Carregar()
}, [])
  const Serch = lotes.filter( (filter)=> 
  filter.idLote.toString().includes(busca) || filter.idMineradora.toString().toLocaleUpperCase().includes(busca.toLocaleUpperCase())
)
  return(

  
         <table className="table table-striped table-bordered table-hover contender-table">
          <thead className="table-dark ">
          <tr>
            <th>IdLote</th>
            <th>IdMineradora</th>
            <th>Teor</th>
            <th>Peso Quantidade</th>
            <th>Valor por unid</th>
            <th>Status</th>
            <th>Ultima atualização</th>
            <th>Unidade De Medida de Peso</th>
            <th>Tipo do Minerio</th>
            <th>Ação</th>
          </tr>
        </thead>
       <tbody>
        {

          (busca? Serch: lotes).map( (lotMinerio)=>(
            <LineTable
                key={lotMinerio.busca}
                idLote={lotMinerio.idLote}
                idMineradora={lotMinerio.idMineradora}
                teor={lotMinerio.teor}
                pesoQuantidade={lotMinerio.pesoQuantidade}
                valoPKilo={lotMinerio.valorPKilo}
                unidadeMedida={lotMinerio.unidadeDeMedidaPeso.toUpperCase()}
                tipoMinerio={lotMinerio.tipoMinerio.toLocaleUpperCase()}
                status={lotMinerio.status}
                dataExtracao={lotMinerio.dataExtracao}
                color_={statusColors[lotMinerio.status as keyof typeof statusColors]}
            >

            </LineTable>
          ))
        }
      
        </tbody>

      </table>

  )
}