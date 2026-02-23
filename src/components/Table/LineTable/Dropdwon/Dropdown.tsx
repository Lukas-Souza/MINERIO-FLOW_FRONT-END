import "@/src/components/Table/LineTable/Dropdwon/Dropdown.css"
import Option from "./Optons/options"
import LineTable from "../LineTable"
type Props = {
    id_: number
}
export default function Dropdown({id_}: Props){
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
    return(
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
                         id_lote={id_}
                         ></Option>
                )
                )
            }
        </li>

      </ul>
    </li>
    <li>
      <button className="dropdown-item menuDrop">
        Editar
      </button>
    </li>
    <li>
      <button className="dropdown-item text-danger menuDrop" >
        Excluir
      </button>
    </li>
  </ul>
</div>
    )
}