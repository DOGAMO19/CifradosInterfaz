import { Link } from 'react-router-dom'
import logoEscuela from '../../public/img/logoUpi.png'

export const HomePage = () => {
  return (
    <div className=' bg-[url(/public/img/headerImg.webp)] bg-no-repeat bg-cover bg-center h-screen flex flex-col'>
        <header className="flex justify-between items-center ">
            {/*hero navbar */}
            <div className='flex items-center ml-10 gap-14'>
                <Link to="https://upiicsa.ipn.mx" target="_blank">
                    <img src={logoEscuela} className="h-20 p-18 m-5 " alt="Upiicsa logo" />
                </Link>
                <p className="text-white font-serif text-4xl">Cifrado de datos a <span> base64 </span>  y <span> AES </span></p>
            </div>
            <div className=' flex  items-end gap-32 mr-10 '>
                <Link to="/base64" className='text-white text-xl hover:text-cyan-400'>Cifrado Base64</Link>
                <Link to="/aes" className='text-white text-xl hover:text-cyan-400'>Cifrado AES</Link>
            </div>
        </header>

        {/* hero contenido  */}
        <div className='flex flex-1 justify-center items-center flex-col h-auto text-center'>
        <div>
            <p className='text-white font-light text-4xl'>Convierte tus datos/links a cifrado base64 y AES</p>
        </div>
        <div className='mt-10 grid grid-cols-2 gap-3'>
                <Link to="/base64" className='rounded-md bg-cyan-500 hover:bg-cyan-700 cursor-pointer text-white font-semibold w-full pr-3 pl-3 pt-2 pb-2 text-center uppercase text-lg"'>Cifrado Base64</Link>
                <Link to="/aes" className='rounded-md bg-cyan-500 hover:bg-cyan-700 cursor-pointer text-white font-semibold w-full pr-3 pl-3 pt-2 pb-2 text-center uppercase text-lg"'>Cifrado AES</Link>
        </div>
        </div>
    </div>
  )
}
