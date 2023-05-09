import {NextApiRequest , NextApiResponse} from "next";
import {promises as fs} from 'fs';
import path from 'path';
import {getServerSession} from "next-auth/next";
import {authOptions} from "@/pages/api/auth/[...nextauth]";

export default async function handler(req : NextApiRequest,res: NextApiResponse){
    if (req.method==='POST') {
        const filepath = path.join(process.cwd(),'asset',"driver",'driver.json')
        await fs.writeFile(filepath,JSON.stringify(req.body))

        res.status(200).send(req.body)
        return
    }
    if (req.method==='GET') {
        const filepath = path.join(process.cwd(),'asset',"driver",'driver.json')
        const data_string = await fs.readFile(filepath,"utf8")
        res.status(200).send(data_string)
        return
    }
}
