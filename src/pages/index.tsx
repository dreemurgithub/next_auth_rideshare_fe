import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import {useSession, signIn, signOut} from "next-auth/react"

export default function Home() {
  const {data: session} = useSession()
  return <>
    <h1>Hello home</h1>
    <p>State of login: {JSON.stringify(session)} </p>
    {/*<button onClick={()=>signIn()}>Sign in</button>*/}
    {/*<button onClick={()=>signOut()}>Sign out</button>*/}
  </>
}
