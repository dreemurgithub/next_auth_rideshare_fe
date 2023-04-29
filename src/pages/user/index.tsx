import Review from "@/components/user/review";
import Wallet from "@/components/user/wallet";
import Booking from "@/components/user/booking";

export default function User(){
    return <>
        <h1>User page</h1>
        <Booking />
        <Wallet />
        <Review />
    </>
}
