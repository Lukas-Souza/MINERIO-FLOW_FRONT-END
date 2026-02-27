"use client"
import "@/src/components/Table/LineTable/Dropdwon/Dropdown.css"
import Option from "./Optons/options"
import LineTable from "../LineTable"
import { useRouter } from "next/navigation"
import RemoveLotMinerio from "@/src/Api/LotMinerio/RemoveLotMinerio"
import UpdateRegistre from "@/src/components/Forms/Update Registre/UpdateRegistre"

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"

type Props = {
    idLote: number,
    idMineradora: string,
    teor: number,
    pesoQuantidade: number,
    valoPKilo: number,
    unidadeMedida: string,
    tipoMinerio: string,
    status: string,
    dataExtracao: string

  }

export default function Dropdown({idLote, idMineradora, teor,pesoQuantidade,valoPKilo,unidadeMedida,tipoMinerio,status,dataExtracao}: Props){
    const Stuss= [
            "PLANEJADO",
    "EXTRACAO",
    "EXTRAIDO",
    "PROCESSAMENTO",
    "PROCESSADO",
    "ESTOQUE",
    "RESERVADO",
    "CARREGAMENTO",
    "TRANSPORTE",
    "ENTREGUE",
    "FATURADO",
    "ENCERRADO",
    "BLOQUEADO",
    "CANCELADO"
    ]
    const Router = useRouter()

    return(
      <div className="contenderDrowpDown">

<UpdateRegistre
                _id={idLote}
        _tipo_minerio={tipoMinerio}
        _unidade_medida={unidadeMedida}
        _status={status}
        _id_mina={idMineradora}
        _peso={pesoQuantidade}
        _preco={valoPKilo}
        _teor={teor}
></UpdateRegistre>
  <div className="dropdown">
    <button
        className="btn btn-sm btn-secondary dropdown-toggle"
        data-bs-toggle="dropdown"
        data-bs-auto-close="outside"    
    >
    Ações
  </button>

  {/* MENU */}
  <ul className="dropdown-menu">

    {/* SUBMENU */}
    <li className="dropdown-submenu menuDrop">

      <button
        className="dropdown-item dropdown-toggle menuDrop"
        data-bs-toggle="dropdown"
        data-bs-auto-close="true"
      >
        Alterar Status
      </button>

      <ul className="dropdown-menu" id="menu">

        <li>
            {
                Stuss.map(
                    (staus) => (
                         <Option
                         key={staus} 
                         name={staus}
                         id_lote={idLote}
                         ></Option>
                )
                )
            }
        </li>

      </ul>
    </li>
    <li>
      
      <button className="dropdown-item menuDrop"
       type="button" 
        id="BTN-Add-Lote"
        data-bs-toggle="modal"
        data-bs-target="#staticUpdateRegistre" 
        onClick={
          ()=>{
            // <_interface
            
            

            {/* </_interface> */}
          }
        }
      >
        Editar
      </button>
    </li>
    <li>
      <button className="dropdown-item text-danger menuDrop" onClick={
        async ()=>{
          await RemoveLotMinerio(idLote)
          Router.refresh()
          
        }
      }>
        Excluir
      </button>
    </li>
  </ul>
  </div>
</div>
    )
}