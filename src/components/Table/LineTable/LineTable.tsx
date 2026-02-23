"use client";
import "../LineTable/LineTable.css"
import Image from "next/image"
import composeIcon from "@/src/Asserts/compose.png"
import ReturnValueMoney from "@/src/Scripts/returnValueMoney"
import ReturnDateFormated from "@/src/Scripts/returDateFormated"
import { statusColors } from "../../Cards/Cards"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useEffect } from "react"
import GetLotMiinerio from "@/src/Api/LotMinerio/GetLoteMinerio"
import Dropdown from "./Dropdwon/Dropdown";
type Props= {
    color_ : string
    idLote: number,
    idMineradora: string,
    teor: string,
    pesoQuantidade: number,
    valoPKilo: number,
    unidadeMedida: string,
    tipoMinerio: string,
    status: string,
    dataExtracao: string

}
export default function LineTable({idLote, idMineradora, teor,pesoQuantidade,valoPKilo,unidadeMedida,tipoMinerio,status,dataExtracao, color_}:Props) {
    
  return(
        <tr className="line" >
            <td><p className="paramsId">{idLote}</p></td>
            <td><p className="params">{idMineradora}</p></td>
            <td>{teor}%</td>
            <td>{pesoQuantidade}</td>
            <td>
              <p className="money">
R$ {ReturnValueMoney({
              money: valoPKilo
            })}
              </p>
              </td>
            <td>
            <div className="status_paragraf"
            style={
                {
                  border: `2px solid ${color_}`
                }
              }
            >
              <div className="ContenderStatus">
              <div className="point" 
              style={
                {
                  backgroundColor: color_
                }
              }
              ></div>
              <p style={
                {
                  
                  color: color_
                }                
              }>{status}</p>
            </div>
              </div>

            </td>
            <td><p className="textDataTime">{ReturnDateFormated({date:dataExtracao})}</p></td>
            <td>{unidadeMedida}</td>
            <td>{tipoMinerio}</td>

            <td>
              <Dropdown 
              id_={idLote}
              ></Dropdown>
            </td>
          </tr>
    )
}