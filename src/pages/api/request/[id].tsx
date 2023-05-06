import {NextApiRequest , NextApiResponse} from "next";
import {promises as fs} from 'fs';
import path from 'path';

export default async function handler(req : NextApiRequest,res: NextApiResponse){
    const {id} :{id:string | null}  = req.query as any
    if (req.method==='POST') {
        const filepath = path.join(process.cwd(),'file','user_driver','user_request.json')
        await fs.writeFile(filepath,JSON.stringify(req.body))

        res.status(200).send(req.body)
        return
    }
    if (req.method==='GET') {
        const filepath = path.join(process.cwd(),'file','user_driver','user_request.json')
        const data_string = await fs.readFile(filepath,"utf8")
        const data_string_object = JSON.parse(data_string)
        let index =0
        for(let i=0;i<data_string_object.length;i++){
            if(data_string_object[i]['id']===id) index=i
        }
        const filter_data = data_string_object.filter((request : any)=>request.id===id)
        // res.status(200).send(data_string_object[index])
        res.status(200).send(filter_data)
        return
    }
}
