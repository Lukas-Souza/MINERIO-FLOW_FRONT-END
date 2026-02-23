const API_URL = "http://localhost:5167/lot-minerio/transactions"
export default async function GetStatus(){
    const response = await fetch(API_URL)
    return response.json
}