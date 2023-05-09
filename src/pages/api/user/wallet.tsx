import {NextApiRequest , NextApiResponse} from "next";
import {promises as fs} from 'fs';
import path from 'path';

export default async function handler(req : NextApiRequest,res: NextApiResponse){
    if (req.method==='POST') {
        const filepath = path.join(process.cwd(),'asset','user','wallet.json')
        const data_string = await fs.readFile(filepath,"utf8")
        const data_Json = JSON.parse(data_string)
        data_Json.push(req.body)
        await fs.writeFile(filepath,JSON.stringify(data_Json))

        res.status(200).send(data_Json)
        return
    }
    if (req.method==='GET') {
        const filepath = path.join(process.cwd(),'asset','user','wallet.json')
        const data_string = await fs.readFile(filepath,"utf8")
        res.status(200).send(data_string)
        return
    }
}
