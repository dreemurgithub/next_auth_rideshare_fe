import * as dotenv from 'dotenv'
import {useEffect} from "react";
import Link from 'next/link'
import Rating from '@mui/material/Rating';

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
    else return <div className={'col-sm-12 col-md-6 col-lg-4 col-xxl-3 border'}>
        <GoogleMap zoom={15} center={{lat: lat, lng: long}}
                   mapContainerClassName={styles.map_container}>
            <MarkerF position={{lat: lat, lng: long}}/>
        </GoogleMap>
        <ul className={'list-group list-group-flush'}>
            <li className={'list-group-item'}>To: <b>{street} {city}</b></li>
            <div className={'list-group-item'} style={{ display:'flex',justifyContent:'space-around' }}>
                <span className={'btn'}>{(road*price).toLocaleString()}đ</span>
                <span onClick={rebook} className={'btn btn-success'}>ReBook</span>
            </div>
            <div className={'list-group-item'} style={{ display:'flex',justifyContent:'space-around' }}>
                <span>{
                    (()=>{
                        if(rating>=4) return 'Very Good!'
                        if(rating>=3&&rating<4) return 'Okay'
                        if(rating>=2&&rating<3) return 'Bad :('
                        if(rating<2) return 'Really bad!!!'
                        return null
                    })()
                }</span>
                <Rating name="read-only" value={rating} precision={0.5}  readOnly />
            </div>
        </ul>

    </div>
}

