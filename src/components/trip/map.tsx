import * as dotenv from 'dotenv'
import {useEffect} from "react";
// TODO read this for embed map https://developers.google.com/maps/documentation/embed/get-started?hl=vi
// https://stackoverflow.com/questions/17290256/get-google-map-link-with-latitude-longitude
export default function Map({string_src}: {string_src : string }){

    return <>
        <p>{string_src}</p>

    </>
}
