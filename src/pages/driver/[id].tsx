import path from "path";
import {promises as fs} from "fs";
import {useEffect, useState} from "react";
import {useSession} from "next-auth/react"
import styles from "@/components/trip/history.module.css";
import {GoogleMap, MarkerF, useLoadScript} from "@react-google-maps/api";
import * as dotenv from 'dotenv'
import {read_File , Add_File} from "@/utils/file_asset";


export async function getStaticPaths() {

    // const filepath = path.join(process.cwd(), 'asset', 'driver', 'driver.json')
    // const data_string = await fs.readFile(filepath, "utf8")
    const data_string = await read_File('driver','driver.json')
    const data_string_obj = JSON.parse(data_string)
    const driver_path = []
    for (let i = 0; i < data_string_obj.length; i++) driver_path.push({params: {id: data_string_obj[i].id}})
    return ({
        paths: driver_path, fallback: false
    })
}

export async function getStaticProps(prop_params: { params: { id: string } }) {
    const id = prop_params.params.id
    // const filepath = path.join(process.cwd(), 'asset', 'driver', 'driver.json')
    // const data_string = await fs.readFile(filepath, "utf8")
    const data_string = await read_File('driver','driver.json')

    const data_string_obj = JSON.parse(data_string)
    let index = 0
    for (let i = 0; i < data_string_obj.length; i++) {
        if (data_string_obj[i].id === id) index = i;
    }
    return {props: {driver: data_string_obj[index]}}
}

export default function Driver({driver}: {
    driver: {
        vehicle: string, id: string, url: string, price: number, rating: number, avatar: string, email: string
    }
}) {
    const {data: session, status} = useSession()
    const any_session = session as any
    const [request, setrequest] = useState([])
    const [location, setlocation] = useState<any>(null)

    function getLocation() {
        // console.log(navigator)
        navigator.geolocation.getCurrentPosition(showPosition)
        // navigator.geolocation.getCurrentPosition(position => setlocation(position))
    }

    function showPosition(position: any) {
        console.log(position.coords.latitude)
        console.log(position.coords.longitude)
        setlocation({latitude: position.coords.latitude, longitude: position.coords.longitude})
    }

    useEffect(() => {
        fetch(`/api/request/${driver.id}`)
            .then(res => res.json())
            .then(data => setrequest(data))
        getLocation()
    }, [])

    function submitRequest() {
        // console.log([driver])
        if (any_session === null) return
        else {
            console.log(any_session.user.email)
            const road_element : HTMLInputElement | null = document.querySelector('#road')
            const item = {
                id: driver.id,
                price: driver.price,
                road:(road_element&& road_element.value==='')? parseInt(road_element.value) : 0 ,
                user: any_session.user.email,
                lat: location.latitude ,
                long: location.latitude
            }
            console.log(item)
            fetch('/api/request',{
                method:'POST',
                body: JSON.stringify(item),
                headers : {
                    "Content-Type": "application/json",
                },
                mode : 'same-origin',
            })
                .then((res: any)=>res.json()).then((data:any)=>console.log(data))
        }
    }

    return <>
        <p><b>Driver infor: </b> {JSON.stringify(driver)}</p>
        <p><b>Request from User: </b> {JSON.stringify(request)}</p>
        <p><b>The user session: </b> {JSON.stringify(session)}</p>
        <p><b>The location: </b> {JSON.stringify(location)}</p>
        <button onClick={getLocation}>Get location</button>
        <div>

            <h3>{driver.id}</h3>
            <h3>{driver.rating}/5</h3>
            <h3>{driver.price}</h3>
            <h3>{driver.vehicle}</h3>
            <img src={driver.url} alt=""/>
            <img src={driver.avatar} alt=""/>
        </div>
        <div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Your email</label>
                <input type="email" className="form-control" aria-describedby="emailHelp" readOnly={true}
                       disabled={true} value={any_session ? any_session.user.email : ''}/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Driver</label>
                <input type="text" className="form-control" readOnly={true} disabled={true} value={driver.id}/>
            </div>

            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Price</label>
                <input type="number" className="form-control" value={driver.price} readOnly={true} disabled={true}/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Trip</label>
                <input type="number" className="form-control" id='road' min={0}/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
                <input type="text" className="form-control" value={'10 Phan Châu Trinh'}/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
                <input type="text" className="form-control" value={'Đà Nẵng'}/>
            </div>

            <Gmap location={location}/>
            <button type="submit" className="btn btn-primary" onClick={submitRequest}>Submit</button>
        </div>
    </>
}

function Gmap({location}: { location: null | { latitude: number, longitude: number } }) {
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: process.env.GoogleAPI_key as string
    })
    if (!isLoaded) return <>
        <div>...Loading...</div>
        <h1>Trip page</h1>

    </>
    if (isLoaded && location === null) return <>
        <div>...Loading...</div>
        <h1>Trip page</h1>

    </>
    if (isLoaded && location !== null) return <GoogleMap zoom={10}
                                                         center={{lat: location.latitude, lng: location.longitude}}
                                                         mapContainerClassName={styles.map_container}>
        <MarkerF position={{lat: location.latitude, lng: location.longitude}}/>
    </GoogleMap>
    return null
}
