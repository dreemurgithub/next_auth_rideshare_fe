import {useEffect, useState} from "react";
import {useSession,signIn, signOut} from "next-auth/react";

export async function getServerSideProps() {


    return {
        props: {server_data: "session" }, // will be passed to the page component as props
    }
}


export default function Driver({server_data} : {server_data : any  } ){
    const {data: session} = useSession()


    if(session) return <>
        <h2>Driver page</h2>
        <button onClick={()=>signOut()}>Sign out</button>
        <p>{JSON.stringify(server_data)}</p>
        <p>{JSON.stringify(session)}</p>
    </>
    else return <>
        <h1>Please Sign in to use this</h1>
        <button onClick={()=>signIn()}>Sign in</button>

    </>
}
