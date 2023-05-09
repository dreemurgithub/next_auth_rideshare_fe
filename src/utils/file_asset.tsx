import {promises as fs} from 'fs';
import path from 'path';

export async function read_File(role : string , filename : string){
    const filepath = path.join(process.cwd(),'asset',role,filename)
    const data_string = await fs.readFile(filepath,"utf8")
    return data_string
}

export async function Add_File(role : string , filename : string , content: string){
    const filepath = path.join(process.cwd(),'asset',role,filename)
    const data_string = await fs.readFile(filepath,"utf8")
    const data_Json = JSON.parse(data_string)
    data_Json.push(content)
    await fs.writeFile(filepath,JSON.stringify(data_Json))
    return data_Json
}

export async function delete_File(role : string , filename : string , content: string){

}

export async function edit_File(role : string , filename : string , content: string){

}
