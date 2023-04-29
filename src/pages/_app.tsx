import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import "bootstrap/dist/css/bootstrap.min.css";
import {useEffect} from "react";
import {SessionProvider} from "next-auth/react"
import Layout from "@/components/layout";

export default function App({Component, pageProps}: AppProps) {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, [])
    return <SessionProvider session={pageProps.session}>
        <>
            <Layout>

                <Component {...pageProps} />
            </Layout>

        </>
    </SessionProvider>
}
