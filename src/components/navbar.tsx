import Link from 'next/link'
export default function Navbar(){
    return <>
        <nav>
            <ul style={{display:'flex',gap:'2em'}}>
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/user'}>User</Link></li>
                <li><Link href={'/trip'}>trip</Link></li>
                <li><Link href={'/driver'}>driver</Link></li>
                <li><Link href={'/help'}>Help</Link></li>
            </ul>
        </nav>
    </>
}
