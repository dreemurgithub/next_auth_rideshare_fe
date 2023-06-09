import {useState, useEffect} from "react";
import Map from "../../components/trip/map";
import {GoogleMap, useLoadScript, MarkerF} from "@react-google-maps/api";
import * as dotenv from 'dotenv'
import styles from './trip.module.css'
import {useSession,signIn, signOut} from "next-auth/react";


// TODO Development link - https://developers.google.com/maps/documentation/javascript/error-messages?utm_source=maps_js&utm_medium=degraded&utm_campaign=keyless#api-key-and-billing-errors
// TODO Marker to MarkerF https://stackoverflow.com/questions/72112491/marker-not-showing-react-google-maps-api-on-localhost-next-js
export default function Trip() {
    const {data: session} = useSession()
    const [all_request,setAllRequest] = useState([])

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
    const [location, setLocation] = useState({latitude: 16.06128014179922, longitude: 108.2274948567431})
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: process.env.GoogleAPI_key as string
    })
    // const [string_src, setString] = useState<string | null>(null)
    useEffect(() => {
        fetch('/api/request')
            .then(res=>res.json())
            .then(data=>setAllRequest(data))
        // setString('https://maps.google.com/maps?q=16.0628736,108.2195968&hl=es&z=14&amp;output=embed')
    }, [])


    if (!isLoaded) return <>
        <div>...Loading...</div>
        <h1>Trip page</h1>
        {/*<Iframe*/}
        {/*    width="300"*/}
        {/*    height="170"*/}
        {/*    // src={string_src}*/}
        {/*    url='https://maps.google.com/maps?q=16.0628736,108.2195968&hl=es&z=14&amp;output=embed'*/}
        {/*>*/}
        {/*</Iframe>*/}
        {/*<p>{string_src}</p>*/}
        {/*<Map_google string_src ={string_src}/>*/}
    </>
    if (!isLoaded ) return <>
        <h3>Please wait for loading, and sign in</h3>
    </>
    if (isLoaded ) return <>
        <p>Please sign in</p>
        {/*<button onClick={()=>signIn()}>Sign in</button>*/}


    </>
    if (isLoaded) return <>
        <div>Map</div>
        <button onClick={()=>signOut()}>Sign out</button>

        <Map_react longitude={location.longitude} latitude={location.latitude}/>
        <button onClick={() => {
            setLocation({latitude: 16.060462028009404, longitude: 108.22446237388208})
        }}>Edit the place to Bach Dang - Duong hoa
        </button>
        <p>{JSON.stringify(all_request)}</p>
    </>
//     16.060462028009404, 108.22446237388208 Duong hoa bach dang
//     16.06128014179922, 108.2274948567431 cau rong
}

function Map_react(location: { latitude: number, longitude: number }) {
    return <>

        <GoogleMap zoom={15} center={{lat: location.latitude, lng: location.longitude}}
                   mapContainerClassName={styles.map_container}>
            <MarkerF position={{lat: location.latitude, lng: location.longitude}}/>
            <MarkerF position={{lat: 16.060462028009404, lng: 108.22446237388208}}/>
        </GoogleMap>
    </>
}
