"use-client"
import "@/src/components/Forms/New Registre/NewRegistre.css"
import { useRouter } from "next/navigation";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import CreateLotMinerio from "@/src/Api/LotMinerio/CreateLotMinerio";



    const StatusDeLote= [
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
    type Props ={
        _id: number
        _tipo_minerio: string,
        _unidade_medida: string,
        _status: string,
        _id_mina: string

        _peso: number,
        _preco: number,
        _teor: number,


    }
export default function UpdateRegistre({_id, _tipo_minerio, _unidade_medida, _status, _id_mina, _peso, _preco, _teor}:Props){
  {
const router = useRouter()
// number
const [teor, setTeor] = useState<number>(0);

const [pesoQuantidade, setPesoQuantidade] = useState<number>(0);

const [valorPKilo, setValorPKilo] = useState<number>(0);

// string
const [unidadeDeMedidaPeso, setUnidadeDeMedidaPeso] = useState<string>("");

const [tipoMinerio, setTipoMinerio] = useState<string>("");

const [status, setStatus] = useState<string>("");

const [idMineradora, setIdMineradora] = useState<string>("");
  
    return(
        
    <>

      {/* Modal */}
      <div
        className="modal fade"
        id="staticUpdateRegistre"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        
        <div className="modal-dialog">
          <div className="modal-content">

            <div className="modal-header">
              <h1
                className="modal-title fs-5"
                id="staticBackdropLabel"
              >
                {_id}
              </h1>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>

            <div className="modal-body">
                      <div className="Forms-Contender">
        <form className="row g-3">
  <div className="col-12">
    <label htmlFor="inputEmail4" className="form-label">Tipo do minerio:</label>
    <input type="text" className="form-control" defaultValue={_tipo_minerio} id="_TipoMinerio" onChange={(e)=> setTipoMinerio(e.target.value)} />
  </div>

  <div className="col-md-6">
    <label htmlFor="_PesoQuantidade" className="form-label">Peso total:</label>
    <input
     defaultValue={_peso}
      type="number"
      step={0.1}
      className="form-control"
      id="number_peso"
      placeholder="23,5"
      onChange={(e) => setPesoQuantidade(Number(e.target.value))}
    />
      
  </div>

  <div className="col-md-6">
  <label htmlFor="inputAddress2" className="form-label">Unidade de medida:</label>
    <input
     defaultValue={_unidade_medida}
      type="text"
      className="form-control"
      id="_UnidadeDeMedidaPeso"
      placeholder="TON, KG ..."
      onChange={ (e) => setUnidadeDeMedidaPeso(e.target.value)}
    />
  </div>

  <div className="col-md-4">
  <label htmlFor="inputAddress2" className="form-label">Preço/Uni:</label>
    <input
     defaultValue={_preco}
      type="number"
      className="form-control"
      id="ValorPKilo"
      step={0.2}
      placeholder="TON, KG ..."
      onChange={(e) => setValorPKilo(Number(e.target.value))}
    />
  </div>
  <div className="col-md-4">
    <label htmlFor="inputCity" className="form-label">Teor:</label>
    <input type="text" className="form-control" id="_Teor" placeholder="100%"
    onChange={(e)=> setTeor(Number(e.target.value))}
     defaultValue={_teor}
    />
  </div>

  <div className="col-md-4">
    <label htmlFor="inputState" className="form-label">Status de processo:</label>
    <select id="_Status" className="form-select"
    onChange={(e)=> setStatus(e.target.value)}
    >
      <option  defaultValue={_status}>PLANEJANDO</option>
      {
        StatusDeLote.map( (status)=>
        (
            <option key={status}>
            {status}
            </option>
        )    
        )
      }
    </select>
  </div>

  <div className="col-md-4">
    <label htmlFor="inputZip" className="form-label"
     defaultValue={_id_mina}
    >Id da mina:</label>
    <input type="text" className="form-control" id="IdMineradora"  onChange={(e)=> setIdMineradora(e.target.value)}/>
  </div>

 
  
</form>

        </div>

            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
<button type="submit" className="btn btn-primary" 
onClick={
    async ()=>{

    //   await UpdateRegistre(
    //     teor,
    //     pesoQuantidade,
    //     valorPKilo,
    //     unidadeDeMedidaPeso,
    //     tipoMinerio,
    //     status,
    //     idMineradora,
        

    //   );
      
        router.refresh()
        }
}
>
      Cadastrar
    </button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
}