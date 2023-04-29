import {useState,useEffect} from "react";
import Map from "../../components/trip/map"

export default function Trip(){
    // const navigator = window.navigator
    const [location,setlocation] = useState<null|{latitude: number , longitude: number} >(null)
    useEffect(()=>{
        window.navigator.geolocation.getCurrentPosition((position)=>{
            console.log(position.coords)
             const new_loc = {latitude: position.coords.latitude , longitude: position.coords.longitude}
            setlocation(new_loc )
        })
    },[])
    return <>
        <h1>Trip page</h1>
        <p>
            {JSON.stringify(location)}
        </p>
        <Map />
    </>
}
