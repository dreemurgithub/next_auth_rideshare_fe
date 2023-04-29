import * as dotenv from 'dotenv'
import {useEffect} from "react";
// TODO read this for embed map https://developers.google.com/maps/documentation/embed/get-started?hl=vi
export default function Map(){
    const firstLoc = {latitude:16.074936,longitude:108.2235151}
    useEffect(()=>{

    },[])

    return <>
        <iframe
            width="300"
            height="170"
            src="https://maps.google.com/maps?q=16.074936,108.2235151&hl=es&z=14&amp;output=embed"
        >
        </iframe>
    </>
}
