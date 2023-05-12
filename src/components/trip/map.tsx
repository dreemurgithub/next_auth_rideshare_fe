import * as dotenv from 'dotenv'
import {useEffect} from "react";
import Link from 'next/link'
import styles from "@/components/trip/history.module.css";
import {GoogleMap, MarkerF, useLoadScript} from "@react-google-maps/api";
// TODO read this for embed map https://developers.google.com/maps/documentation/embed/get-started?hl=vi
// https://stackoverflow.com/questions/17290256/get-google-map-link-with-latitude-longitude
export default function Map({lat, long, street, driver, rating, city, user,road, price}
                                : { lat: number, long: number, street: string, driver: string, rating: number, city: string, user: string ,road: number, price: number}) {
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: process.env.GoogleAPI_key as string
    })
    function rebook(){
        window.location.href = `/driver/${driver}`
        localStorage.setItem('trip',JSON.stringify(road))
        localStorage.setItem('address',JSON.stringify(street))
    }
    if (!isLoaded) return <>
        <div>...Loading...</div>
        <h1>Trip page</h1>

    </>
    else return <div className={'col-sm-12 col-md-6 col-lg-4 card'}>
        <GoogleMap zoom={15} center={{lat: lat, lng: long}}
                   mapContainerClassName={styles.map_container + ' w-100 card-img-top'}>
            <MarkerF position={{lat: lat, lng: long}}/>
        </GoogleMap>
        <ul className={'list-group list-group-flush'}>
            {/*<li className={'list-group-item'}>Customer: <b>{user}</b></li>*/}
            <li className={'list-group-item'}>To: <b>{street} {city}</b></li>
            {/*<li className={'list-group-item'}>Driver: <b>{driver}</b> : <b>{(road*price).toLocaleString()} VND</b></li>*/}
            {/*<div className={'list-group-item'} style={{ display:'grid',gridTemplateColumns:'1fr 1fr' }}>*/}
            {/*    <span className={''}>{(road*price).toLocaleString()} VND</span>*/}
            {/*    <span className={''}>Driver:{driver}</span>*/}
            {/*</div>*/}
            <div className={'list-group-item'} style={{ display:'grid',gridTemplateColumns:'1fr 1fr 1fr' }}>
                <span className={'btn'}>{(road*price).toLocaleString()}đ</span>
                <span className={'btn'}>{rating}/5</span>
                <span onClick={rebook} className={'btn btn-success'}>ReBook</span>
            </div>
        </ul>

    </div>
}

