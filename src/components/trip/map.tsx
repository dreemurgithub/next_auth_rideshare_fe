import * as dotenv from 'dotenv'
import {useEffect} from "react";
import styles from "@/components/trip/history.module.css";
import {GoogleMap, MarkerF, useLoadScript} from "@react-google-maps/api";
// TODO read this for embed map https://developers.google.com/maps/documentation/embed/get-started?hl=vi
// https://stackoverflow.com/questions/17290256/get-google-map-link-with-latitude-longitude
export default function Map({latitude, longitude, street, driver, rating, city, user}
                                : { latitude: number, longitude: number, street: string, driver: string, rating: number, city: string, user: string }) {
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: process.env.GoogleAPI_key as string
    })
    if (!isLoaded) return <>
        <div>...Loading...</div>
        <h1>Trip page</h1>

    </>
    else return <div className={'col-sm-12 col-md-6 col-lg-6 card'}>
        <GoogleMap zoom={20} center={{lat: latitude, lng: longitude}}
                   mapContainerClassName={styles.map_container + ' w-100 card-img-top'}>
            <MarkerF position={{lat: latitude, lng: longitude}}/>
        </GoogleMap>
        <ul className={'list-group list-group-flush'}>
            {/*<li className={'list-group-item'}>Customer: <b>{user}</b></li>*/}
            <li className={'list-group-item'}>To: <b>{street} {city}</b></li>
            <li className={'list-group-item'}>Driver: <b>{driver}</b></li>
            <div className={'list-group-item'} style={{ display:'grid',gridTemplateColumns:'1fr 1fr' }}>
                <span className={'btn'}>Rating: {rating}/5</span>
                <span className={'btn btn-success'}> Book again!</span>
            </div>
        </ul>

    </div>
}
