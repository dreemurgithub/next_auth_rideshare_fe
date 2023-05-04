import * as dotenv from 'dotenv'
import {useEffect} from "react";
import styles from "@/components/trip/history.module.css";
import {GoogleMap, MarkerF, useLoadScript} from "@react-google-maps/api";
// TODO read this for embed map https://developers.google.com/maps/documentation/embed/get-started?hl=vi
// https://stackoverflow.com/questions/17290256/get-google-map-link-with-latitude-longitude
export default function Map({latitude , longitude,street,driver, rating, city , user }
                                :{latitude : number , longitude :number ,street : string,driver: string, rating : number, city : string, user : string} ){
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: process.env.GoogleAPI_key as string
    })
    if (!isLoaded) return <>
        <div>...Loading...</div>
        <h1>Trip page</h1>

    </>
    else return <div className={'col-sm-6 col-lg-4'}>
        <GoogleMap zoom={20} center={{lat: latitude, lng: longitude}}
                   mapContainerClassName={styles.map_container + ' w-100' }>
            <MarkerF position={{lat: latitude, lng: longitude}}/>
        </GoogleMap>
        <p>{user}</p>
        <p>{city}</p>
        <p>{street}</p>
        <p>{rating}</p>
        <p>{driver}</p>
    </div>
}
