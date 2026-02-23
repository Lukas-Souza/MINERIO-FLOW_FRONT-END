"use-client"
import "@/src/components/Table/LineTable/Dropdwon/Optons/Options.css"
import UpdateStatus from "@/src/Api/Status/UpdateStatus"
import { useRouter } from "next/navigation"

type Props={
    name:string,
    id_lote: number
}
export default function Option({name, id_lote}:Props){
    const Router = useRouter();
    return(

          <button className="dropdown-item o"
          onClick={ async ()=>{
            await UpdateStatus(id_lote, name)
            Router.refresh()
            
          }
          }
          >
            {name}
          </button> 
    )
}