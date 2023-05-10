import {NextApiRequest , NextApiResponse} from "next";
import {read_File , Add_File,delete_File} from "@/utils/file_asset";

export default async function handler(req : NextApiRequest,res: NextApiResponse){
    if (req.method==='POST') {
        const data_Json = await Add_File('user','wallet.json',req.body)
        res.status(200).send(data_Json)
        return
    }
    if (req.method==='GET') {
        const data_string = await read_File('user','wallet.json')
        res.status(200).send(data_string)
        return
    }
    if (req.method==='PUT') {
        const data_string = await delete_File('user','wallet.json',req.body.creditnumber,'creditnumber')
        res.status(200).send(data_string)
        return
    }

}
