import {NextApiRequest , NextApiResponse} from "next";
import {promises as fs} from 'fs';
import path from 'path';
import {delete_File,Add_File} from "@/utils/file_asset";
import {getServerSession} from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]"

export default async function handler(req : NextApiRequest,res: NextApiResponse){
    const session = await getServerSession(req, res, authOptions)
    const new_type_session = session as any
    if (req.method==='PUT') {
        // This method is for delete to cancel request
        if(new_type_session!==null){
            const data_add = await Add_File('user_driver', 'old_trip.json', req.body)
            const data_string = await delete_File('user_driver', 'user_request.json', req.body.id, 'id')
            res.status(200).send(data_string)
            return
        }
        else return
    }


}
