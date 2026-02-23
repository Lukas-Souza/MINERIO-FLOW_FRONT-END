const API_URL = "http://localhost:5167/lot-minerio/"
export default async function CreateLotMinerio(_teor:number, _pesoQuantidade:number, _valorPKilo:number, _unidadeDeMedida:string,_tipoMinerio:string, _status:string, _idMineradora:string){
    await fetch(API_URL, 
        {
            method: "POST",

            body: JSON.stringify(
                {

                    Teor: _teor,
                    PesoQuantidade: _pesoQuantidade,
                    ValorPKilo: _valorPKilo,
                    UnidadeDeMedidaPeso: _unidadeDeMedida,
                    TipoMinerio: _tipoMinerio,
                    Status: _status,
                    IdMineradora: _idMineradora
                }
            ),
            headers: {
                    "Content-Type": "application/json",

            }
            
        }
        
    )
}