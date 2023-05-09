import {Read_all_request, Post_request} from "@/constant";

export function submitRequest(any_session : any,driver_infor:{id: string , price: number  }, location: {latitude: number, longitude: number}){
    if (any_session === null) return
    else {
        console.log(any_session.user.email)
        const road_element : HTMLInputElement | null = document.querySelector('#road')
        const item = {
            id: driver_infor.id,
            price: driver_infor.price,
            road:(road_element===null|| road_element.value==='')? 0  : parseInt(road_element.value),
            user: any_session.user.email,
            lat: location.latitude ,
            long: location.longitude
        }
        fetch(Post_request,{
            method:'POST',
            body: JSON.stringify(item),
            headers : {
                "Content-Type": "application/json",
            },
            mode : 'same-origin',
        })
            .then((res: any)=>res.json()).then((data:any)=>console.log(data))
    }

}
