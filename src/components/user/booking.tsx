import {useEffect, useState} from 'react'
import Map from '../trip/map'

export default function Booking() {
    const [oldtrip, setoldtrip] = useState<any>([])
    useEffect(() => {
        // async function fetch_(){
        //     const res_ = await fetch('/api/trip/old')
        //     const data_ = await res_.json()
        //     setoldtrip(data_)
        // }
        // fetch_()

        fetch("/api/trip/old")
            .then(res => res.json())
            .then(data => setoldtrip(data))

        // setoldtrip([{text: "name" }])
    }, [])
    return <>
        <h3>Booking page</h3>
        <div className={'container text-center'}>
            <div className={'row'}>
                {oldtrip.map((el: any, index: number) =>
                    <Map latitude={el.latitude} longitude={el.longitude} driver={el.driver} street={el.street} city={el.city} rating={el.rating} user={el.user} key={index}/>)}
            </div>
        </div>
    </>

}
