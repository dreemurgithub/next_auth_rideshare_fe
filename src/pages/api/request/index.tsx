import {NextApiRequest , NextApiResponse} from "next";
import {promises as fs} from 'fs';
import path from 'path';
import {read_File,delete_File} from "@/utils/file_asset";

export default async function handler(req : NextApiRequest,res: NextApiResponse){
    if (req.method==='POST') {
        // This method is for adding user request
        const filepath = path.join(process.cwd(),'asset','user_driver','user_request.json')
        const data_string = await fs.readFile(filepath,"utf8")
        const data_string_object = JSON.parse(data_string)
        data_string_object.push(req.body)
        await fs.writeFile(filepath,JSON.stringify(data_string_object))

        res.status(200).send(data_string_object)
        return
    }
    if (req.method==='GET') {
        // TODO: This method is for reading all user request, but unused!
        const data_string = await read_File('user_driver','user_request.json')
        res.status(200).send(data_string)
        return
    }
    if (req.method==='PUT') {
        // This method is for reading user request
        // const filepath = path.join(process.cwd(),'asset','user_driver','user_request.json')
        // const data_string = await fs.readFile(filepath,"utf8")
        const data_string = await delete_File('user_driver','user_request.json',req.body.id,'id')
        res.status(200).send(data_string)
        return
    }


}
