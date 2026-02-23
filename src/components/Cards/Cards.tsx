import { json } from "stream/consumers"
import "../Cards/styles.css"
type Props= {
 label: string,
 value: number,
 color: string
}
export const statusColors = {
  PLANEJADO: "#6c757d",
  EXTRACAO: "#0d6efd",
  EXTRAIDO: "#0dcaf0",
  PROCESSAMENTO: "#ffc107",
  PROCESSADO: "#198754",
  ESTOQUE: "#146c43",
  RESERVADO: "#6f42c1",
  CARREGAMENTO: "#fd7e14",
  TRANSPORTE: "#084298",
  ENTREGUE: "#20c997",
  FATURADO: "#0f5132",
  ENCERRADO: "#727475",
  CANCELADO: "#720819"
}

export default function Cards({label, value, color}: Props){
    return(
    <div className="card mb-3 card" style={{
      maxWidth: "18rem",
      borderLeft:`6px solid ${color}`,

          position: "inherit"
      
    }}
      
      >
  <div className="card-header label">{label}</div>
  <div className="card-body">
    <h4 className="card-title"><b>{value}</b></h4>
  </div>
</div>
    )
}