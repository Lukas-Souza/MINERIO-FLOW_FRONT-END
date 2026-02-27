const API_URL = "http://localhost:5167/lot-minerio/"
export default async function UpdateLoteMinerio(
    _teor:number,
     _pesoQuantidade:number,
      _valorPKilo:number,
       _unidadeDeMedida:string,
       _tipoMinerio:string,
        _status:string,
         _idMineradora:string,
         _idLote:number
        ){

            
         const Response = await fetch(API_URL+_idLote, 
        {

            method: "PUT",

            
            headers: {
                    "Content-Type": "application/json",

            }
            ,

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
            )
        }
    )
        if  ( await !Response.ok) {
        await alert("Ocorreu um erro no cadastro, por favor tente novamente!")
    }
}