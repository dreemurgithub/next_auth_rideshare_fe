import {move_request_to_history_put , read_add_remove_request} from "@/constant";

export function submitRequest(any_session : any,driver_infor:{driver: string , price: number  }, location: {latitude: number, longitude: number}){
    if (any_session === null) return
    else {
        console.log(any_session.user.email)
        const road_element : HTMLInputElement | null = document.querySelector('#road')
        const item = {
            id: new Date().getTime().toString(),
            street: "10 Phan Châu Trinh",
            // id: driver_infor.id,
            driver : driver_infor.driver,
            price: driver_infor.price,
            road:(road_element===null|| road_element.value==='')? 0  : parseInt(road_element.value),
            user: any_session.user.email,
            lat: location.latitude ,
            long: location.longitude,
        }

        fetch(read_add_remove_request,{
            method:'POST',
            body: JSON.stringify(item),
            headers : {
                "Content-Type": "application/json",
            },
            mode : 'same-origin',
        })
            .then((res: any)=>res.json()).then((data:any)=>window.location.reload())
    }

}

export function Delete_request_withID(id: string){
    fetch(read_add_remove_request,{
        method:'PUT',
        body: JSON.stringify({id:id}),
        headers : {
            "Content-Type": "application/json",
        },
        mode : 'same-origin',
    })
        .then((res: any)=>res.json()).then((data:any)=>window.location.reload())

}

export function move_request_to_history(request : {
    id: string , street: string, driver : string , price: number , road: number , user: string , lat: number , long: number
,rating : number | null
}){
    const any_request = request as any
    if (any_request.viewer!==undefined) delete any_request.viewer
    fetch(move_request_to_history_put,{
        method:'PUT',
        body: JSON.stringify(any_request),
        headers : {
            "Content-Type": "application/json",
        },
        mode : 'same-origin',
    })
        .then((res: any)=>res.json())
        .then((data:any)=>window.location.reload())

}
