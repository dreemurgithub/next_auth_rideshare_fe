import {useEffect, useState} from "react";
import {useSession} from "next-auth/react"
import * as dotenv from 'dotenv'
import {read_File, Add_File} from "@/utils/file_asset";
import Driver_form from "@/components/driver/submit_form";
import {read_state_driver} from "@/utils/driver/read_driver";
import Request from "@/components/driver/request";
export async function getStaticPaths() {
    const data_string = await read_File('driver', 'driver.json')
    const data_string_obj = JSON.parse(data_string)
    const driver_path = []
    for (let i = 0; i < data_string_obj.length; i++) driver_path.push({params: {id: data_string_obj[i].id}})
    return ({
        paths: driver_path, fallback: false
    })
}

export async function getStaticProps(prop_params: { params: { id: string } }) {
    const id = prop_params.params.id
    const data_string = await read_File('driver', 'driver.json')
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
        navigator.geolocation.getCurrentPosition(showPosition)
    }

    function showPosition(position: any) {
        console.log(position)
        setlocation({latitude: position.coords.latitude, longitude: position.coords.longitude})
    }

    useEffect(() => {
        async function readState_request() {
            const new_state_request = await read_state_driver(driver.id)
            setrequest(new_state_request)
        }
        readState_request()

        getLocation()
    }, [])

    return <>
        <p><b>Driver infor: </b> {JSON.stringify(driver)}</p>
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

        <Driver_form any_session={any_session} driver={driver} location={location}/>
        <p><b>Request from User: </b> {JSON.stringify(request)}</p>
        {request.map((el:any,index)=> Request(el,index) )}
    </>
}
