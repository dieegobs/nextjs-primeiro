import Image from 'next/image'
import Logo from '../pages/assets/ebaylogo.png'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Image 
        src={Logo}
        alt='Logo Ebay'
        quality={100}
      />

      <ul>
        <li> 
          <Link href="/about">About</Link>
        </li>
        <li> 
          <Link href="/contact">Contact</Link>
          
        </li>

      </ul>
    </div>
  )
}
