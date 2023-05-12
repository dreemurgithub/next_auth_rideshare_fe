import {useEffect, useState} from "react";
import {useSession} from "next-auth/react"
import * as dotenv from 'dotenv'
import {read_File, Add_File} from "@/utils/file_asset";
import Driver_form, {Gmap} from "@/components/user_driver/submit_form";
import {read_state_driver} from "@/utils/driver/read_driver";
import Request from "@/components/user_driver/request";
import Styles from './styles.module.css'

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
        vehicle: string, id: string, url: string, price: number, rating: number, avatar: string, email: string, latitude: number, longitude: number
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
            new_state_request.forEach((el: any) => {
                // if(any_session) el.viewer = any_session.user.email
                console.log(any_session)
            })
            setrequest(new_state_request)
        }

        setTimeout(readState_request, 1000)

        getLocation()
    }, [])

    return <>
        <p><b>Driver infor: </b> {JSON.stringify(driver)}</p>
        <p><b>The user session: </b> {JSON.stringify(any_session)}</p>
        <p><b>The location: </b> {JSON.stringify(location)}</p>
        <button onClick={getLocation}>Get location</button>
        <div className={'container-fluid'}>

            <div className={Styles.container + ' row'}>
                <div className={Styles.driver + ' col-sm-12 col-md-6 col-lg-4'}>
                    <img src={driver.avatar} alt="" className={Styles.avatar}/>
                    <h4>{driver.id}</h4>
                    <div className={Styles.small_card}>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path
                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                            <span>Rating: <b>{driver.rating}/5</b></span>
                        </div>

                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                  d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"/>
                            <path fill-rule="evenodd"
                                  d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                        </svg>
                    </div>
                    <div className={Styles.small_card}>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path
                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                            <span>Fare: <b>{driver.price}/km</b></span>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                  d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"/>
                            <path fill-rule="evenodd"
                                  d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                        </svg>
                    </div>
                    {/*<h3>{driver.price}</h3>*/}
                    {/*<h3>{driver.vehicle}</h3>*/}
                    <h5 style={{textAlign: 'left'}}>Driver current location</h5>
                    <Gmap location={{latitude: driver.latitude, longitude: driver.longitude}}/>
                    <h5 style={{textAlign: 'left'}}>Vehicle</h5>
                    <img src={driver.url} alt="" style={{maxWidth: '100%'}}/>
                </div>
                <Driver_form any_session={any_session} driver={driver} location={location}/>
            </div>
        </div>

        <p><b>Request from User: </b> {JSON.stringify(request)}</p>
        {request.map((el: any, index) => Request(el, index))}
    </>
}
