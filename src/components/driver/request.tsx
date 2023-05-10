import {Delete_request_withID} from "@/utils/user_driver/submitRequest";
export default function Request(driver: {
    driver: string, price: number , road: number, user: string , lat: number , long: number, id: string
} | null ,index : number ){
    if(driver) return <div key={index}>
        <p>{JSON.stringify(driver)}</p>
        <p>{index}</p>
        <button onClick={()=> {
            if(driver!==null) Delete_request_withID(driver.id)
        }}>Finish</button>
    </div>
    else return null
}
