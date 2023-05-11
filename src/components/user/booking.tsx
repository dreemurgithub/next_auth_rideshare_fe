import {useEffect, useState} from 'react'
import Map from '../trip/map'
import { useSession } from "next-auth/react"
import {history_url_from_user_session} from "@/constant";
import Request from "@/components/user_driver/request";
import {read_state_driver} from "@/utils/driver/read_driver";
import {read_user_request} from "@/utils/user/read_user_request";
export default function Booking() {
    const { data: session, status } = useSession()
    const [oldtrip, setoldtrip] = useState<any>([])
    const [request, setrequest] = useState([])

    useEffect(() => {
        fetch(history_url_from_user_session)
            .then(res => res.json())
            .then(data => {
                const email = (session) ? session.user?.email : null
                const filter_data = data.filter((el:any)=>el.user===email && email!==null )
                setoldtrip(filter_data)
            })
        async function readState_request() {
            const new_state_request = await read_user_request()
            setrequest(new_state_request)
        }
        readState_request()

    }, [])
    return <>
        <h3>Booking page</h3>
        <div className={'container text-center'}>
            <div className={'row'}>
                {oldtrip.map((el: any, index: number) =>
                    <Map latitude={el.latitude} longitude={el.longitude} driver={el.driver} street={el.street} city={el.city} rating={el.rating} user={el.user} key={index}/>)}
            </div>
        </div>
        <p>{JSON.stringify(request)}</p>
        {request.map((el:any,index:number)=>Request(el,index))}
    </>

}
