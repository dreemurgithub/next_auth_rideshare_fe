import {Read_user_request} from "@/constant";

export async function read_user_request(){
    const res = await fetch(Read_user_request)
    return res.json()
}