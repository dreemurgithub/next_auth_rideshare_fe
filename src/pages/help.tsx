import Restaurant from "@/components/help/Restaurant";
import Driver from "@/components/help/Driver";
import Eat from "@/components/help/Eat"
import Customer from "@/components/help/Customer";
import Chat from '@/components/help/Chat';
import Account from "@/components/help/Account";
import Billing from "@/components/help/Billing";

export default function Help() {
    // TODO copy this
    return <>
        <div style={{height: '1em'}}>

        </div>
        <div className={'container'}>
            <div className={'row'}>
                <Card_ BackG_color={'#4a4e4d'} text={'Trợ giúp thanh toán'}
                       img={'https://cdn.sanity.io/images/tsbk0zvv/production/a1f5c90620915aba2fc363330ecd1dbff17b7736-128x128.png?w=64&fit=max&auto=format'}/>
                <Card_ BackG_color={'#2ab7ca'} text={'Trợ giúp về gói'}
                       img={'https://cdn.sanity.io/images/tsbk0zvv/production/10bb309130cdd8dfe85a0e0e130ecdedc0ca22c6-128x128.png?w=64&fit=max&auto=format'}/>
                <Card_ BackG_color={'#051e3e'} text={'Trợ giúp ứng dụng'}
                       img={'https://cdn.sanity.io/images/tsbk0zvv/production/59459c592409b198e88b2b4cd6e4da99306a04fa-128x128.png?w=64&fit=max&auto=format'}/>
                <Card_ BackG_color={'#005b96'} text={'Trợ giúp thiêt bị'}
                       img={'https://cdn.sanity.io/images/tsbk0zvv/production/3e2fdd408d9175cbf6dc77fbd24fa0667aec5867-128x128.png?w=64&fit=max&auto=format'}/>
                <Card_ BackG_color={'#851e3e'} text={'An toàn và quyền riêng tư'}
                       img={'https://cdn.sanity.io/images/tsbk0zvv/production/c39439e03b41892767854a2dafae387d68e397c5-128x128.png?w=64&fit=max&auto=format'}/>
                <Card_ BackG_color={'#651e3e'} text={'Trợ giúp tài khoản'}
                       img={'https://cdn.sanity.io/images/tsbk0zvv/production/972abc9b7961e17d356b069c8be9dbaaf3ea51f3-128x128.png?w=64&fit=max&auto=format'}/>
            </div>


        </div>
        <Chat/>
        <Restaurant/>
        <Driver/>
        <Eat/>
        <Customer/>
        <Billing/>
        <Account/>
    </>
}

function Card_({img, BackG_color, text}: { img: string, BackG_color: string, text: string }) {
    return <>
        <div style={{backgroundColor: BackG_color, height: '6em',display:'grid',gridTemplateColumns :'auto 4em'}} className={'col-6 col-sm-6 col-md-6 col-lg-4 border' }>
            <h4 style={{color:'whitesmoke'}}>{text}</h4>
            <img src={img} alt="" style={{transform: 'rotate(25deg)',position:'relative',top:'1em'}}/>
        </div>
    </>
}
