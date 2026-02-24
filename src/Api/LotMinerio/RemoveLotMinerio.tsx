const URL_API  = "http://localhost:5167/lot-minerio/"
export default async function RemoveLotMinerio(id:number){
    await fetch(URL_API+id, 
        {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            }
        }
    )
}