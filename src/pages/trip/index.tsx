import {useState,useEffect} from "react";
import Map from "../../components/trip/map";
import {GoogleMap,useLoadScript ,MarkerF} from "@react-google-maps/api";
import * as dotenv from 'dotenv'
import styles from './trip.module.css'

// TODO Development link - https://developers.google.com/maps/documentation/javascript/error-messages?utm_source=maps_js&utm_medium=degraded&utm_campaign=keyless#api-key-and-billing-errors
// TODO Marker to MarkerF https://stackoverflow.com/questions/72112491/marker-not-showing-react-google-maps-api-on-localhost-next-js
export default function Trip(){
    // const navigator = window.navigator
    // const [location,setlocation] = useState<null|{latitude: number , longitude: number} >(null)
    // useEffect(()=>{
    //     window.navigator.geolocation.getCurrentPosition((position)=>{
    //          const new_loc = {latitude: position.coords.latitude , longitude: position.coords.longitude}
    //         setlocation(new_loc )
    //     })
    // },[location])

    // const string_src_promise = await fetch('/api/current')
    // const string_src_L = await string_src_promise.json()
    const location = {latitude: 16.0628736,longitude: 108.2195968}
    const {isLoaded} = useLoadScript({
        googleMapsApiKey : process.env.Google_map_api_key_firebase
    })
    const [string_src,setString ] =useState<string | null>(null)
    useEffect(()=>{
        setString('https://maps.google.com/maps?q=16.0628736,108.2195968&hl=es&z=14&amp;output=embed')
    },[])


    if(!isLoaded) return <>
        <div>...Loading...</div>
        <h1>Trip page</h1>
        {/*<Iframe*/}
        {/*    width="300"*/}
        {/*    height="170"*/}
        {/*    // src={string_src}*/}
        {/*    url='https://maps.google.com/maps?q=16.0628736,108.2195968&hl=es&z=14&amp;output=embed'*/}
        {/*>*/}
        {/*</Iframe>*/}
        <p>{string_src}</p>
        {/*<Map_google string_src ={string_src}/>*/}
    </>
    else return <>
        <div>Map</div>
        <Map_react longitude={location.longitude} latitude={location.latitude} />
    </>
}
function Map_react(location: { latitude : number , longitude : number } ){
    return <>

        <GoogleMap zoom={15} center={{lat: location.latitude, lng: location.longitude}} mapContainerClassName={styles.map_container}>
            <MarkerF position={{lat: location.latitude, lng: location.longitude}}  />
        </GoogleMap>
    </>
}
