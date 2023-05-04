import Wallet from "@/components/user/wallet";
import Booking from "@/components/user/booking";
import {useEffect, useState} from "react";
import {useSession,signIn, signOut} from "next-auth/react";

export default function User(){
    const {data: session} = useSession()

    if(session) return <>
        <h1>User page</h1>
        <button onClick={()=>signOut()}>Sign out</button>

        <Booking />
        <Wallet />
        {/*<p>{JSON.stringify(oldtrip)}</p>*/}
    </>
    else return <>
        <h2>Please Sign in to use this</h2>
        <button onClick={()=>signIn()}>Sign in</button>
    </>
}
