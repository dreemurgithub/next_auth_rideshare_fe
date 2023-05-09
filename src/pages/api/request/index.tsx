import {NextApiRequest , NextApiResponse} from "next";
import {promises as fs} from 'fs';
import path from 'path';

export default async function handler(req : NextApiRequest,res: NextApiResponse){
    if (req.method==='POST') {
        const filepath = path.join(process.cwd(),'asset','user_driver','user_request.json')
        const data_string = await fs.readFile(filepath,"utf8")
        const data_string_object = JSON.parse(data_string)
        data_string_object.push(req.body)
        await fs.writeFile(filepath,JSON.stringify(data_string_object))

        res.status(200).send(data_string_object)
        return
    }
    if (req.method==='GET') {
        const filepath = path.join(process.cwd(),'asset','user_driver','user_request.json')
        const data_string = await fs.readFile(filepath,"utf8")
        res.status(200).send(data_string)
        return
    }


}
