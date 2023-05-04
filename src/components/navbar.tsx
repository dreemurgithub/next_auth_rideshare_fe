import Link from 'next/link'
export default function Navbar(){
    return <>
        <nav id={'navbar'} className={'navbar navbar-expand-lg bg-body-tertiary '}>
            <div className={'container-fluid '}>

                <ul className={'navbar-nav'}>
                    <li className={'nav-item'}><Link className={'nav-link'} href={'/'}>Home</Link></li>
                    <li className={'nav-item'}><Link className={'nav-link'} href={'/user'}>User</Link></li>
                    <li className={'nav-item'}><Link className={'nav-link'} href={'/trip'}>trip</Link></li>
                    <li className={'nav-item'}><Link className={'nav-link'} href={'/driver'}>driver</Link></li>
                    <li className={'nav-item'}><Link className={'nav-link'} href={'/help'}>Help</Link></li>
                </ul>
            </div>
        </nav>
    </>
}
