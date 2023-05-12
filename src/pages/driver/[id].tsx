import {useEffect, useState} from "react";
import {useSession} from "next-auth/react"
import * as dotenv from 'dotenv'
import {read_File} from "@/utils/file_asset";
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
    const {data: session} = useSession()
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
        {/*<p><b>Driver infor: </b> {JSON.stringify(driver)}</p>*/}
        {/*<p><b>The user session: </b> {JSON.stringify(any_session)}</p>*/}
        {/*<p><b>The location: </b> {JSON.stringify(location)}</p>*/}
        {/*<button onClick={getLocation}>Get location</button>*/}
        <h1 style={{textAlign:'center'} }>Driver Information</h1>
        <div className={'container-fluid'}>
            <div className={Styles.container + ' row'}>
                <div className={Styles.driver + ' col-sm-12 col-md-6 col-lg-4 col-xxl-3'}>
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
                                 className="bi bi-cash-coin" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                      d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0z"/>
                                <path
                                    d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z"/>
                                <path
                                    d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z"/>
                                <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z"/>
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
                    {/*<h5 style={{textAlign: 'left'}}>Vehicle</h5>*/}
                    {/*<img src={driver.url} alt="" style={{maxWidth: '100%'}}/>*/}
                </div>
                <Driver_form any_session={any_session} driver={driver} location={location}/>
                <h1 style={{textAlign:'center'} }>Driver Pending request</h1>

                <div className={'container-fluid'}>
                    <div className={'row'}>
                        {request.map((el: any, index) => Request(el, index))}

                    </div>

                </div>

            </div>
        </div>

    </>
}
