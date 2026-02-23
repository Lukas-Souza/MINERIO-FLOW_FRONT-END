import { json } from "stream/consumers";

const API_URL = "http://localhost:5167/lot-minerio/"

 export default  async function GetLotMiinerio() {
    const response = await fetch(API_URL);
    return response.json()
} 
