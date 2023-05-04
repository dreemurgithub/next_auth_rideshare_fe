import {useEffect, useState} from 'react'
export default function Booking(){
    const [oldtrip,setoldtrip] = useState<any>([])
    useEffect(()=>{
        // async function fetch_(){
        //     const res_ = await fetch('/api/trip/old')
        //     const data_ = await res_.json()
        //     setoldtrip(data_)
        // }
        // fetch_()

        fetch("/api/trip/old")
            .then(res=>res.json())
            .then(data=>setoldtrip(data) )

        // setoldtrip([{text: "name" }])
    },[])
   return <>
        <h3>Booking page</h3>
        <p>{JSON.stringify(oldtrip)}</p>
    </>

}
