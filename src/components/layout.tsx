import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
export default function Layout({children}:any){
    return <>
        <Navbar />
        {children}
        <Footer />
    </>
}
