"use client"
import "../app/globals.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "../src/components/Header/header"
import Header from "../src/components/Header/header"
import "../src/components/Cards/Cards"
import Cards from "../src/components/Cards/Cards"
import Table  from "@/src/components/Table/table"
import { statusColors } from "../src/components/Cards/Cards"
import SerachIcon from "@/src/Asserts/magnifying-glass.png"
import Image from "next/image"
import { useEffect, useState } from "react"
import GetLotMiinerio from "@/src/Api/LotMinerio/GetLoteMinerio"
import { Minerio } from "@/src/components/Table/table"
import AddIconfrom from "@/src/Asserts/plus.png"
import AlertSucess from "@/src/components/Alert/Sucess/Sucess"
import NewRegistre from "@/src/components/Forms/New Registre/NewRegistre"
import UpdateRegistre from "@/src/components/Forms/Update Registre/UpdateRegistre"
import _interface from "@/src/components/Forms/Update Registre/ModalUpdateRegistre"
export default function HomeScreen(){
const [lote,setLote] = useState<Minerio[]>([])
useEffect(()=>{
 async function Carregar() {
  const response = await GetLotMiinerio()
  setLote(response)
 }
 Carregar()
}, [])


  return(
    <html lang="pt-br">
    <body className="contender">
      <Header/>

 <div className="container" >
    <NewRegistre></NewRegistre>
    <UpdateRegistre
    
        _id={2}
        _tipo_minerio="Ferro"
        _unidade_medida="kg"
        _status="Disponível"
        _id_mina="M-10"
        _peso={500}
        _preco={1200}
        _teor={85}

    ></UpdateRegistre>

  <div className="row">

    <div className="col">
      <Cards label="PLANEJADO" color={statusColors.PLANEJADO}
       value={
        lote.filter( lote_ => lote_.status.toLocaleUpperCase() == "PLANEJADO").length
      }
      ></Cards>
    </div>

<div className="col">
      <Cards label="EXTRACAO" color={statusColors.EXTRACAO} 
       value={
        lote.filter( lote_ => lote_.status.toLocaleUpperCase() == "EXTRACAO").length
      }
      ></Cards>
    </div>

    <div className="col">
      <Cards label="EXTRAIDO" color={statusColors.EXTRAIDO}
       value={
        lote.filter( lote_ => lote_.status.toLocaleUpperCase() == "EXTRAIDO").length
      }
      ></Cards>
    </div>

    <div className="col">
      <Cards label="PROCESSAMENTO" color={statusColors.PROCESSAMENTO}
        
      value={lote.filter( lote_ => lote_.status.toLocaleUpperCase() == "PROCESSAMENTO").length}
      ></Cards>
    </div>

    <div className="col">
      <Cards label="PROCESSADO" color={statusColors.PROCESSADO} 
      value={lote.filter( lote_ => lote_.status.toLocaleUpperCase() == "PROCESSADO").length}
      
      ></Cards>
    </div>

    <div className="col">
      <Cards label="ESTOQUE" color={statusColors.ESTOQUE} 
      value={lote.filter( lote_ => lote_.status.toLocaleUpperCase() == "ESTOQUE").length}
      
      ></Cards>
    </div>

  </div>

  
  <div className="row mt-3">

    <div className="col">
      <Cards label="RESERVADO" color={statusColors.RESERVADO}
      value={lote.filter( lote_ => lote_.status.toLocaleUpperCase() == "RESERVADO").length}
      ></Cards>
    </div>

    <div className="col">
      <Cards label="CARREGAMENTO" color={statusColors.CARREGAMENTO}
      value={lote.filter( lote_ => lote_.status.toLocaleUpperCase() == "CARREGAMENTO").length}
      ></Cards>
    </div>

    <div className="col">
      <Cards label="TRANSPORTE" color={statusColors.TRANSPORTE}
      value={lote.filter( lote_ => lote_.status.toLocaleUpperCase() == "TRANSPORTE").length}
      ></Cards>
    </div>

    <div className="col">
      <Cards label="ENTREGUE" color={statusColors.ENTREGUE}
      value={lote.filter( lote_ => lote_.status.toLocaleUpperCase() == "ENTREGUE").length}
      
      ></Cards>
    </div>

    <div className="col">
      <Cards label="FATURADO" color={statusColors.FATURADO}
      value={lote.filter( lote_ => lote_.status.toLocaleUpperCase() == "FATURADO").length}
      ></Cards>
    </div>

    <div className="col">
      <Cards label="ENCERRADO" color={statusColors.ENCERRADO}
      value={lote.filter( lote_ => lote_.status.toLocaleUpperCase() == "ENCERRADO").length}
      
      ></Cards>

    </div>

  </div>


 <div className="row">
  <div className="col">
     
          <div className="container mt-4">
      <div className="input-group"
      style={
        {
          position: "inherit"
        }
      }>
        <input
          type="text"
          className="form-control"
          placeholder="Buscar por lote"
       
       style={
        {
          position: "inherit"
        }
      }
       />

        <button
          className="btn btn-primary"
          type="button"
       style={
        {
          position: "inherit"
        }
      }
       >
           <Image
                   src={SerachIcon} 
                    alt="Transferir"
                    width={20}
                    height={20}
                 />
        </button>
        
       
      </div>
    </div>
      <div className="row">
        <div className="col">
        <div className="d-grid gap-2">

  <button  
  type="button" 
    id="BTN-Add-Lote"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
        >
    
           <Image
                   src={AddIconfrom} 
                    alt="Transferir"
                    width={15}
                    height={15}
                    style={
                     {
                      margin: "15px"
                     }
                      
                    }
                 /> Adicionar lote</button>
</div>

        </div>
      </div>

    <Table></Table>
  </div>
 </div>

</div>
    </body>
  </html>
  )
}