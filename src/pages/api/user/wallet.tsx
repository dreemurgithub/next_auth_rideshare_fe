import {NextApiRequest , NextApiResponse} from "next";
import {promises as fs} from 'fs';
import path from 'path';
import {read_File , Add_File} from "@/utils/file_asset";

export default async function handler(req : NextApiRequest,res: NextApiResponse){
    if (req.method==='POST') {
        // const filepath = path.join(process.cwd(),'asset','user','wallet.json')
        // const data_string = await fs.readFile(filepath,"utf8")
        // const data_Json = JSON.parse(data_string)
        // data_Json.push(req.body)
        // await fs.writeFile(filepath,JSON.stringify(data_Json))
        const data_Json = await Add_File('user','wallet.json',req.body)
        res.status(200).send(data_Json)
        return
    }
    if (req.method==='GET') {
        // const filepath = path.join(process.cwd(),'asset','user','wallet.json')
        // const data_string = await fs.readFile(filepath,"utf8")
        const data_string = await read_File('user','wallet.json')
        res.status(200).send(data_string)
        return
    }
}
