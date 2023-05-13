import {GoogleMap, MarkerF, useLoadScript} from "@react-google-maps/api";
import styles from "@/components/trip/history.module.css";
import {submitRequest} from "@/utils/user_driver/submitRequest";
import {useEffect} from "react";
import STYLES from './style.module.css'
import Link from 'next/link'
import {signIn, signOut} from "next-auth/react"


export function Gmap({location}: { location: null | { latitude: number, longitude: number } }) {
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
    if (isLoaded && location !== null) return <GoogleMap zoom={15}
                                                         center={{lat: location.latitude, lng: location.longitude}}
                                                         mapContainerClassName={styles.map_container}>
        <MarkerF position={{lat: location.latitude, lng: location.longitude}}/>
    </GoogleMap>
    return null
}

export default function Driver_form({any_session, driver, location}: {
    any_session: any, driver: {
        vehicle: string, id: string, url: string, price: number, rating: number, avatar: string, email: string
    },
    location: {
        latitude: number, longitude: number
    } | null
}) {
    useEffect(() => {
        const trip: HTMLInputElement | null = document.querySelector('#road')
        const address: HTMLInputElement | null = document.querySelector('#address')
        const trip_local = localStorage.getItem('trip') as any
        const address_local = localStorage.getItem('address') as any
        if (trip && trip_local) {
            trip.value = trip_local ? JSON.parse(trip_local) : ''
        }
        if (address && address_local) {
            address.value = address_local ? JSON.parse(address_local) : ''
        }
        localStorage.removeItem('trip')
        localStorage.removeItem('address')
        //     in dev enviroment, where it would render twice, this will override the value to '', after compiled it will work
    }, [])

    async function user_submit() {
        const driver_infor = {driver: driver.id, price: driver.price}
        if (location !== null) submitRequest(any_session, driver_infor, location)
    }

    return <>
        <div className={'col-sm-12 col-md-6 col-lg-8'}>

            <div className={STYLES.driver_form}>

                <div className="input-group mb-3">
                    <input type="text" className="form-control"
                           readOnly={true} disabled={true} value={driver.id}/>
                    <div className="input-group-append">
                        <span className="input-group-text">Driver</span>
                    </div>
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control"
                           readOnly={true} disabled={true} value={'Đà Nẵng'}/>
                    <div className="input-group-append">
                        <span className="input-group-text">City</span>
                    </div>
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control"
                           value={driver.price} readOnly={true} disabled={true}/>
                    <div className="input-group-append">
                        <span className="input-group-text">Price</span>
                    </div>
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control"
                           disabled={true} value={any_session ? any_session.user.email : ''}/>
                    <div className="input-group-append">
                        <span className="input-group-text">Email</span>
                    </div>
                </div>

            </div>
            <div className={STYLES.driver_form}>
                <div className="input-group mb-3">
                    <input type="number" className="form-control" id='road' min={0}/>
                    <div className="input-group-append">
                        <span className="input-group-text">Trip</span>
                    </div>
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" id='address'/>
                    <div className="input-group-append">
                        <span className="input-group-text">Address</span>
                    </div>
                </div>
            </div>
            {(any_session) ? <div className={STYLES.driver_form}>
                <Gmap location={location}/>

                <div style={{textAlign: 'center'}}>
                    <img
                        src="https://www.publicdomainpictures.net/pictures/360000/velka/katze-katzchen-niedlich-vintage-1595638359oOf.jpg"
                        style={{width: '150px', height: '150px', borderRadius: '50%'}}/>
                    <h5>{any_session.user.email}</h5>
                    <div className="btn-group" style={{width: '90%'}}>
                        <button type="submit" className="btn btn-primary" onClick={user_submit}>Submit</button>
                        <Link href={'/user'} className="btn btn-success" target='_blank'>User</Link>
                        {/*<button className="btn btn-outline-dark" onClick={() => signOut()}>Signout</button>*/}
                    </div>
                </div>

            </div> : <div style={ {display:'flex',justifyContent:'center'} }>
                {/*<button className="btn btn-outline-dark" onClick={() => signIn()}>Signin</button>*/}
            </div>
            }

        </div>
    </>
}
