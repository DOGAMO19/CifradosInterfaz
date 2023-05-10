import { useState } from 'react'
import { InputForm } from './components/InputForm'
import { Header } from './layouts/Header'

import './App.css'

function App() {
  const [sitio, setSitio] = useState("")

  return (
    <div className='container bg-gray-200 h-screen '>
      <Header/>
    <main className=''>
      <h1 className=' text-3xl text-center mt-10'>Cifra tus textos</h1>
      {/* Crear componentes base64 y aes, o crear uno y posterior complementar */}
      {/* Crear routing */}
      <div className=' grid grid-cols-2 m-5 items-center'>
        <div>
          <InputForm
            sitio = { sitio }
            setSitio = { setSitio } 
            title = "base 64"/>
        </div>
        <div>
          
          <InputForm
              sitio = { sitio }
              setSitio = { setSitio }
            title = "base 64 y AES. Doble cifrado"/>
        </div>
      </div>





      {/* <div className=" ">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </main>
    </div>
  )
}

export default App
