import {NextApiRequest , NextApiResponse} from "next";
import {promises as fs} from 'fs';
import path from 'path';
import {read_File,delete_File,Add_File} from "@/utils/file_asset";
import {getServerSession} from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]"

export default async function handler(req : NextApiRequest,res: NextApiResponse){
    const session = await getServerSession(req, res, authOptions)
    const new_type_session = session as any
    if (req.method==='POST') {
        const data_string = await Add_File('user_driver','user_request.json',req.body)
        res.status(200).send(data_string)
        return
    }
    if (req.method==='GET') {
        // TODO: This method is for filter request from user session
        const email = new_type_session ? new_type_session.user.email : null ;
        if(email== null) return
        else {
            const data_string = await read_File('user_driver','user_request.json')
            const data_string_obj = JSON.parse(data_string)
            const data_filter = data_string_obj.filter((el:any)=>el.user===email)
            res.status(200).send(data_filter)
            return
        }

    }
    if (req.method==='PUT') {
        // This method is for delete to cancel request
        const data_string = await delete_File('user_driver','user_request.json',req.body.id,'id')
        res.status(200).send(data_string)
        return
    }


}
