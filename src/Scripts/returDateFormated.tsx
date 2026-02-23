type Props ={
    date: string
}
export default function ReturnDateFormated({date}:Props){
    const date_ = new Date(date);
    return date_.toLocaleString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    })

}