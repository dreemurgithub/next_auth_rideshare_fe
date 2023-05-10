import {Read_all_request} from "@/constant";
export async function read_state_driver(driver : string){
    const res = await fetch(Read_all_request(driver))
    return res.json()
}
