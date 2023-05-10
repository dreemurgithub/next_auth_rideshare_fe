import {Wallet_request} from "@/constant";

export async function read_card(){
    const res = await fetch(Wallet_request)
    return res.json()
}
export async function add_card(){
    const name_input: HTMLInputElement | null = document.querySelector('input#name')
    const creditNumber_input: HTMLInputElement | null = document.querySelector('input#creditNumber')
    const Month_input: HTMLInputElement | null = document.querySelector('select#ccmonth')
    const year_input: HTMLInputElement | null = document.querySelector('select#ccyear')
    const cvv_input: HTMLInputElement | null = document.querySelector('input#cvv')
    const new_card = {
        creditnumber: (creditNumber_input)? creditNumber_input.value : null,
        expM: (Month_input)? parseInt(Month_input.value) : null,
        expY: (year_input)? parseInt(year_input.value)  : null,
        name: (name_input)? name_input.value : null ,
        CVV : (cvv_input)? parseInt(cvv_input.value) : null
    }
    const response = await fetch(Wallet_request,{
        method:'POST',
        body : JSON.stringify(new_card),
        mode: 'same-origin',
        headers : {
            "Content-type" : "application/json"
        }
    })
    return response.json()
}
export async function removeCard(card:{ creditnumber: string}){
    const res = await fetch(Wallet_request,{
        method:'PUT',
        body: JSON.stringify({creditnumber: card.creditnumber}),
        headers : {
            "Content-Type": "application/json",
        },
        mode:'same-origin',
        credentials: 'same-origin'
    })
    return res.json()
}
