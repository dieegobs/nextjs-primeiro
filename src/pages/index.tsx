import Image from 'next/image'
import Logo from '../pages/assets/ebaylogo.png'


export default function Home() {
  return (
    <div>
      <Image 
        src={Logo}
        alt='Logo Ebay'
      />
    </div>
  )
}
