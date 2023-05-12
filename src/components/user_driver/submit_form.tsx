import {GoogleMap, MarkerF, useLoadScript} from "@react-google-maps/api";
import styles from "@/components/trip/history.module.css";
import {submitRequest} from "@/utils/user_driver/submitRequest";
import {useEffect} from "react";
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
export default function Driver_form({any_session, driver , location}:{
    any_session: any , driver :{
        vehicle: string, id: string, url: string, price: number, rating: number, avatar: string, email: string
    },
    location: {
        latitude: number , longitude: number
    } | null
}){
    useEffect(()=>{
        const trip : HTMLInputElement | null = document.querySelector('#road')
        const address : HTMLInputElement  | null = document.querySelector('#address')
        const trip_local = localStorage.getItem('trip') as any
        const address_local = localStorage.getItem('address') as any
        if(trip&&trip_local) {
            trip.value = trip_local ? JSON.parse(trip_local) : ''
        }
        if(address&&address_local) {
            address.value = address_local ? JSON.parse(address_local) : ''
        }
        localStorage.removeItem('trip')
        localStorage.removeItem('address')
    //     in dev enviroment, where it would render twice, this will override the value to '', after compiled it will work
    },[])
    async function user_submit(){
        const driver_infor = {driver: driver.id, price: driver.price}
        if(location!==null) submitRequest(any_session,driver_infor,location)
    }
    return <>
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
                <label className="form-label">Address</label>
                <input type="text" className="form-control" id='address'/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">City</label>
                <input type="text" className="form-control" value={'Đà Nẵng'}/>
            </div>

            <Gmap location={location}/>
            <button type="submit" className="btn btn-primary" onClick={user_submit}>Submit</button>
        </div>
    </>
}
