const API_URL = "http://localhost:5167/lot-minerio/transactions"

export default async function UpdateStatus(id: number, newStaus: string){
    await fetch(API_URL, {
        method:"PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            NewStatus: newStaus, // status lote
            LotMinerio: id // id lote
        })
    })
}