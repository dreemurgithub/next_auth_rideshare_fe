import {Read_all_request_from_one_driver} from "@/constant";
export async function read_state_driver(driver : string){
    const res = await fetch(Read_all_request_from_one_driver(driver))
    return res.json()
}
