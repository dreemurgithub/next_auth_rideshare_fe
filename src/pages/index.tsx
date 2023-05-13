import {Inter} from 'next/font/google'

const inter = Inter({subsets: ['latin']})
import {useSession, signIn, signOut} from "next-auth/react"
import {useEffect, useState} from "react";

export default function Home() {
    const {data: session} = useSession()
    return <>
        <Header/>
        <Middle1/>
        <Middle_slide/>
    </>
}

function Header() {
    return <>
        <div style={{
            backgroundImage: 'url("https://www.w3schools.com/w3images/photographer.jpg")'
            ,
            height: '30em',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            paddingLeft: '50em',
            marginLeft: '-20em',
            paddingRight: '50em',
            marginRight: '-50em'
        }}>
            <div style={{
                width: '20em',
                position: 'relative',
                top: '5em',
                // left: 'min(10vw, 10em);',
                backgroundColor: 'whitesmoke',
                textAlign: 'justify',
                marginLeft:'-30em'
            }}
                 className={'card'}
            >
                <div className={'card-body'}>
                    <h3 style={{textAlign: 'center'}}>Why us</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea eligendi est eveniet modi nihil quam
                        ratione! A accusantium aliquid ea, eaque laudantium nesciunt nisi numquam quas, quasi, similique
                        sunt unde.</p>
                    <div className="input-group mb-3 ">
                        <input type="text" className="form-control" placeholder="Your Email" aria-label="Username"
                               aria-describedby="basic-addon1"/>
                        <span className="input-group-text btn btn-success" id="basic-addon1">Register</span>

                    </div>
                    <ul className="list-group list-group-flush">
                        <div className="list-group-item" style={{display: 'flex', justifyContent: 'space-around'}}>
                            <span>Lorem</span>
                            <span>Ipsum</span>
                            <span>dolor</span>
                            <span>sit</span>
                        </div>
                    </ul>
                </div>

            </div>
        </div>
    </>
}

function Middle1() {
    const [state,setState] = useState({
        padTop: '5em' , height:'30em'})
    useEffect(()=>{
        if(window.screen.width<991) setState({
            padTop: '0em',
            height: '30em'
        })
    } ,[])
    return <>
        <div
            style={{
                backgroundColor: '#0d6efd',
                backgroundSize: 'cover',
                height: state.height,
                width:'100vw',
                paddingLeft:'10vw',
                paddingRight:'10vw',
                marginRight:'-10vw',
                marginLeft :'-10vw' ,

            }} className={'container-fluid'}>
            <div className={'row'}
                 style={ {paddingTop:state.padTop} }
            >
                <div className={'col-sm-12 col-md-10 col-lg-6'}>
                    <h3>Save up to 25% with UberX Share</h3>
                    <p>With UberX Share, get everything you love about UberX for a more affordable price. Save up to 25%
                        when matched with a rider along your route. Terms apply. Currently available in certain US
                        cities.</p>
                    <button type="button" className="btn btn-dark">Learn about UberX</button>
                </div>
                <div className={'col-sm-12 col-md-10 col-lg-6'}>
                    <img style={{maxWidth:'100%' } }
                         src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_558,h_314/v1681484528/assets/1f/8da917-59a4-452a-8bc0-148f4a48c0f5/original/img_1.png"
                         alt=""/>
                </div>
            </div>

        </div>
    </>
}

function Middle_slide() {
    const [slide,setSlide] = useState(['block','none','none'])

    const [state,setState] = useState({
        padTop: '5em' , height:'30em'})
    useEffect(()=>{
        if(window.screen.width<991) setState({
            padTop: '5em',
            height: '40em'
        })
    } ,[])
    return <>
        <div
            style={{
                backgroundSize: 'cover',
                height: state.height,
                width:'100vw',
                paddingLeft:'10vw',
                paddingRight:'10vw',
                marginRight:'-10vw',
                marginLeft :'-10vw' ,

            }} className={'container-fluid'}>
            <div className={'row'}
                 style={ {paddingTop:state.padTop} }
            >

                <div className={'col-sm-12 col-md-10 col-lg-6'}>
                    <img style={{maxWidth:'90%',display:slide[0] } }
                         src="https://deskrush.com/wp-content/uploads/2018/06/Bugatti-Chiron4.jpg"
                         alt=""/>
                    <img style={{maxWidth:'90%' ,display:slide[1]} }
                         src="https://www.topgear.com/sites/default/files/images/cars-road-test/carousel/2015/07/73c210887e9dc7032a346e52ce036241/675lt1.jpg"
                         alt=""/>
                    <img style={{maxWidth:'90%',display:slide[2] } }
                         src="https://i1.wp.com/autordee.com/wp-content/uploads/2015/11/Koenigsegg-CCR.jpg"
                         alt=""/>
                </div>
                <div className={'col-sm-12 col-md-10 col-lg-6'}>
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-primary" onClick={ ()=>setSlide(['block','none','none']) }>First Slide</button>
                        <button type="button" className="btn btn-outline-dark" onClick={ ()=>setSlide(['none','block','none']) }>Sencond Slide</button>
                        <button type="button" className="btn btn-secondary" onClick={ ()=>setSlide(['none','none','block']) }>Third Slide</button>
                    </div>
                    <div style={ {display:slide[0]} }>

                        <h3>Lorem ipsum 1</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi ratione repellendus tempore voluptatibus? Consequuntur distinctio eligendi explicabo itaque quae quasi quidem ratione. Accusantium consequuntur eos omnis porro sit voluptates!</p>
                        <button type="button" className="btn btn-dark">Lorem 1</button>
                    </div>

                    <div  style={ {display:slide[1]} }>
                        <h3>Lorem ipsum 2</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi ratione repellendus tempore voluptatibus? Consequuntur distinctio eligendi explicabo itaque quae quasi quidem ratione. Accusantium consequuntur eos omnis porro sit voluptates!</p>
                        <button type="button" className="btn btn-dark">Lorem 2</button>
                    </div>

                    <div  style={ {display:slide[2]} }>
                        <h3>Lorem ipsum 3</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi ratione repellendus tempore voluptatibus? Consequuntur distinctio eligendi explicabo itaque quae quasi quidem ratione. Accusantium consequuntur eos omnis porro sit voluptates!</p>
                        <button type="button" className="btn btn-dark">Lorem 3</button>
                    </div>
                </div>

            </div>

        </div>
    </>
}

