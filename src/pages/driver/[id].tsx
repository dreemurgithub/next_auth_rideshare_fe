import path from "path";
import {promises as fs} from "fs";
import {useEffect, useState} from "react";

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
        vehicle: string , id: string , url:string , price: number , rating: number,avatar:string} }){
    const [request,setrequest] = useState([])
    useEffect(()=>{
        fetch(`/api/request/${driver.id}`)
            .then(res=>res.json())
            .then(data=>setrequest(data))
    },[])
    return <>
        <p>{JSON.stringify(driver)}</p>
        <p>{JSON.stringify(request)}</p>
        <div>

            <h3>{driver.id}</h3>
            <h3>{driver.rating}/5</h3>
            <h3>{driver.price}</h3>
            <h3>{driver.vehicle}</h3>
            <img src={driver.url} alt=""/>
            <img src={driver.avatar} alt=""/>
        </div>
        <form>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </>
}
