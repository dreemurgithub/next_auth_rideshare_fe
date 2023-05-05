import path from "path";
import {promises as fs} from "fs";

export async function getStaticPaths(){

    const filepath = path.join(process.cwd(),'file','driver','driver.json')
    const data_string = await fs.readFile(filepath,"utf8")
    const data_string_obj = JSON.parse(data_string)
    const driver_path = []
    for(let i=0;i<data_string_obj.length;i++) driver_path.push({params:{id: data_string_obj[i].id }})
    return ({
        paths: driver_path , fallback : false
    })
}
export async function getStaticProps(prop_params : {params: {id: string }}){
    const id = prop_params.params.id
    const filepath = path.join(process.cwd(),'file','driver','driver.json')
    const data_string = await fs.readFile(filepath,"utf8")
    const data_string_obj = JSON.parse(data_string)
    let index=0
    for(let i=0;i<data_string_obj.length;i++) {
        if (data_string_obj[i].id===id) index=i;
    }
    return  { props: { driver: data_string_obj[index] }   }
}

export default function Driver({driver}:{driver :{
        vehicle: string , id: string , url:string , price: number , rating: number
    } }){
    return <>
        <p>{JSON.stringify(driver)}</p>
    </>
}
