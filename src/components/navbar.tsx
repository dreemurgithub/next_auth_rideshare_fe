import Link from 'next/link'
import {useEffect, useState} from "react";
import {useSession, signIn, signOut} from "next-auth/react";

export default function Navbar() {
    const [state, setState] = useState({
        bs_theme: 'dark',
        classN: 'bg-dark',
        height: '0vh',
        width:'100vw'
    })
    useEffect(() => {
        if (window.screen.width < 993) setState({
            bs_theme: '',
            classN: '',
            height: '0vh',
            width:'100vw'

        })
        // else setState({
        //     bs_theme: '',
        //     classN: '',
        //     height: '0vh'
        // })
    }, [])

    return <>
        <nav id={'navbar'} className={`navbar navbar-expand-lg bg-body-tertiary ${state.bs_theme}`}
             data-bs-theme={state.bs_theme} style={ {width:state.width} }>
            <div>
                <div className={'container-fluid '} >
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" style={{ backgroundColor:'transparent'} }
                            data-bs-target="#navbar-nav" data-bs-theme={state.bs_theme} onClick={() => {
                        if (state.bs_theme !== 'dark') setState({
                            bs_theme: 'dark',
                            classN: 'bg-dark',
                            height: '80vh',
                            width: '40vw'
                        })
                        if (state.bs_theme !== '') setState({
                            bs_theme: '',
                            classN: '',
                            height: '0vh',
                            width: '100vw'
                        })
                    }}
                            aria-controls="navbar-nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <Nav_collapse/>
                    <div style={{height: state.height}}></div>
                </div>
            </div>
        </nav>
    </>
}

function Nav_collapse() {
    const {data: session} = useSession()

    return <>
        <div className={'collapse navbar-collapse'} id="navbar-nav">
            <Link className={'navbar-brand nav-link'} href={'/'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor"
                     className="bi bi-car-front-fill " viewBox="0 0 50 50"
                     style={{marginBottom: '-1.5em', marginRight: '-1em'}}>
                    <path
                        d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679c.033.161.049.325.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.807.807 0 0 0 .381-.404l.792-1.848ZM3 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2H6ZM2.906 5.189a.51.51 0 0 0 .497.731c.91-.073 3.35-.17 4.597-.17 1.247 0 3.688.097 4.597.17a.51.51 0 0 0 .497-.731l-.956-1.913A.5.5 0 0 0 11.691 3H4.309a.5.5 0 0 0-.447.276L2.906 5.19Z"/>
                </svg>
                C-Mart</Link>

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className={'nav-item'}>
                    {(session) ?
                        <span className="nav-link" onClick={() => signOut()} style={{backgroundColor:'#6610f2',borderRadius:'10px',color:'white',cursor:'pointer'} }>Sign Out</span> :
                        <span className="nav-link" onClick={() => signIn()} style={{backgroundColor:'#0d6efd',borderRadius:'10px',color:'white',cursor:'pointer'} }>Sign In</span>}
                </li>
                <li className={'nav-item'}><Link className={'nav-link'} href={'/user'}>User Page</Link></li>
                <li className={'nav-item'}><Link className={'nav-link'} href={'/trip'}>Trip</Link></li>
                <li className={'nav-item'}><Link className={'nav-link'} href={'/driver'}>Driver Page</Link></li>
                <li className={'nav-item'}><Link className={'nav-link'} href={'/help'}>Help Page</Link></li>

                <div className="dropdown">
                    <Link href={'#'} className="dropdown-toggle nav-link" role="button"
                          data-bs-toggle="dropdown" aria-expanded="false">
                        All Drivers </Link>
                    <ul className="dropdown-menu" style={ {textAlign:'center'} }>
                        <li className={'nav-item'}><Link className="dropdown-item" href="/driver/lethanhdat1993">Driver
                            lethanhdat1993</Link></li>
                        <li className={'nav-item'}><Link className="dropdown-item" href="/driver/lethanhdat1994">Driver
                            lethanhdat1994</Link></li>
                        <li className={'nav-item'}><Link className="dropdown-item" href="/driver/lethanhdat1995">Driver
                            lethanhdat1995</Link></li>
                        <li className={'nav-item'}><Link className="dropdown-item" href="/driver/lethanhdat1996">Driver
                            lethanhdat1996</Link></li>
                        <li className={'nav-item'}><Link className="dropdown-item" href="/driver/lethanhdat1997">Driver
                            lethanhdat1997</Link></li>
                    </ul>
                </div>
            </ul>
            <div className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search"
                       aria-label="Search"/>
                <button className="btn btn btn-light">Search</button>
            </div>


        </div>
    </>
}

