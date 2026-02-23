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
}



export default function Table() {
const [lotes,setLotes] = useState<Minerio[]>([])
useEffect(()=>{
 async function Carregar() {
  const response = await GetLotMiinerio()
  setLotes(response)

 }
 Carregar()
}, [])
  return(

  
         <table className="table table-striped table-bordered table-hover contender-table">
          <thead className="table-dark ">
          <tr>
            <th>IdLote</th>
            <th>IdMineradora</th>
            <th>Teor</th>
            <th>PesoQuantidade</th>
            <th>ValorPKilo</th>
            <th>UnidadeDeMedidaPeso</th>
            <th>TipoMinerio</th>
            <th>Status</th>
            <th>DataExtracao</th>
            <th>Ação</th>
          </tr>
        </thead>
       <tbody>
        {
          lotes.map( (lotMinerio)=>(
            <LineTable
                key={lotMinerio.idLote}
                idLote={lotMinerio.idLote}
                idMineradora={lotMinerio.idMineradora}
                teor={lotMinerio.teor.toString()}
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