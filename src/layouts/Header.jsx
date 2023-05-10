import { Link } from 'react-router-dom'
import logoInstituto from '../../public/img/logoIpn.png'
import logoEscuela from '../../public/img/logoUpi.png'

export const Header = () => {
  return (
    <header className=' bg-[url(/public/img/headerImg.webp)] bg-no-repeat bg-cover bg-center flex justify-between items-center'>
        <Link to="https://upiicsa.ipn.mx" target="_blank">
          <img src={logoEscuela} className="h-20 p-18 m-5 " alt="Upiicsa logo" />
        </Link>
        <p className='font-semibold text-4xl text-center uppercase text-white'>Cifrado base64 y AES</p>
        <Link to="/" className='text-white'> Inicio </Link>
        <Link to="/base64" className=' text-white'>Cifrar a base64</Link>
        <Link to="/aes" className=' text-white'>Cifrado doble</Link>
        <Link to="https://ipn.mx" target="_blank">
          <img src={logoInstituto} className="h-28 p-18 m-5" alt="Ipn logo" />
        </Link>
    </header>
      
  )
}
