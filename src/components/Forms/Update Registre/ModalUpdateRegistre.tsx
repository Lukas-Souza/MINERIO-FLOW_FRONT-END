import UpdateRegistre from "./UpdateRegistre"
type Props={
    id?:number
}
export default function _interface({id =0}){
    return(
        <>
        <UpdateRegistre
                _id={id}
        _tipo_minerio="Ferro"
        _unidade_medida="kg"
        _status="Disponível"
        _id_mina="M-10"
        _peso={500}
        _preco={1200}
        _teor={85}
        >

        </UpdateRegistre>
        </>
    )
}