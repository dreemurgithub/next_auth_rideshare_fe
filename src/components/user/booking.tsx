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
    const any_session = session as any
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
            new_state_request.forEach((el : any)=>el.viewer = (any_session)? any_session.user.email : null)
            // Viewer is for filter from session, only allow matching user to mutate
            setrequest(new_state_request)
        }
        readState_request()

    }, [])
    if(any_session!== null) return <>
        <h3>Booking page</h3>
        <div className={'container text-center'}>
            <div className={'row'}>
                {oldtrip.map((el: any, index: number) =>
                    <Map lat={el.lat} long={el.long} driver={el.driver} street={el.street} city={el.city} rating={el.rating} user={el.user} key={index} price={el.price} road={el.road}/>)}
            </div>
        </div>
        <p>{JSON.stringify(request)}</p>
        {request.map((el:any,index:number)=>Request(el,index))}

    </>
    else return null

}
