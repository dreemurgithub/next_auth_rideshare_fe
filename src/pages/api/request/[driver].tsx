import {NextApiRequest , NextApiResponse} from "next";
import {promises as fs} from 'fs';
import path from 'path';
import {read_File} from '@/utils/file_asset'

export default async function handler(req : NextApiRequest,res: NextApiResponse){
    const {driver} :{driver:string | null}  = req.query as any
    if (req.method==='GET') {
        // This method is used for reading all request from 1 driver
        const data_string = await read_File('user_driver','user_request.json')
        const data_string_object = JSON.parse(data_string)
        const filter_data = data_string_object.filter((request : any)=>request.driver===driver)
        res.status(200).send(filter_data)
        return
    }
}
