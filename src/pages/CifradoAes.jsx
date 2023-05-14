import { useState } from "react"
import CryptoJS from "crypto-js"
import { InputForm, InputFormDescifrar, InputFormDoble } from "../components/InputForm"
import { Header } from "../layouts/Header"


export const CifradoAes = () => {


  const [sitio, setSitio] = useState("")
  const [sitioCifrarDos, setSitioCifrarDos] = useState("")
  const [resultadoCifrado, setResultadoCifrado] = useState("")
  const [resultadoCifradoDos, setResultadoCifradoDos] = useState("")
  const [sitioDescifrar, setSitioDescifrar] = useState("")
  const [resultadoDescifrado, setResultadoDescifrado] = useState("")

  const cifrarAes = (texto) =>{
    let textoCifrado = CryptoJS.AES.encrypt(texto,'@criptografia').toString()
    return setResultadoCifrado(textoCifrado)
  }

  const descifrarAes = (texto) => {
    let cifradoBytes = CryptoJS.AES.decrypt(texto,'@criptografia')
    let textoDescifrado = cifradoBytes.toString(CryptoJS.enc.Utf8)
    let textoDescifradoDoble = window.atob(textoDescifrado)
    return setResultadoDescifrado(textoDescifradoDoble)
  }

  const cifrarBase = (texto) =>{
    let textoCifrado = btoa(texto)
    return setResultadoCifradoDos(textoCifrado)
  }

  return (
      <div className="bg-gray-300 min-h-screen">
        <Header />
        <div className="container shadow-md rounded-md bg-gray-200 w-3/4 mt-5 h-full pt-6 pb-6">
          {/* Form cifrado Base64 */}
          <InputFormDoble 
          title = "Link a cifar en base64 - Primer Cifrado"
          subtitle = "Link cifrado a base64"
          sitioCifrarDos = { sitioCifrarDos }
          setSitioCifrarDos = { setSitioCifrarDos }
          resultadoCifradoDos={ resultadoCifradoDos }
          setResultadoCifradoDos = { setResultadoCifradoDos }
          />
          <div className="flex flex-col justify-center items-center">
            <button
            type="submit"
            onClick={() => cifrarBase(sitioCifrarDos)}
            className=" mb-5 bg-cyan-500 hover:bg-cyan-700 cursor-pointer text-white font-semibold md:w-1/4 w-1/2 p-3 mt-5 uppercase text-lg"  
            >
            Cifrar a Base64
            </button>
          </div>
          {/* Form cifrado AES */}
          <InputForm 
          title="Link a cifrar en formato AES - Segundo Cifrado" 
          subtitle="Resultado cifrado en formato AES"
          sitio={sitio}
          setSitio={setSitio}
          resultadoCifrado = {resultadoCifrado}
          setResultadoCifrado = { setResultadoCifrado }
          />
          <div className="flex flex-col justify-center items-center">
            <button
              type="submit"
              onClick={() => cifrarAes(sitio)}
              className=" mb-5 bg-cyan-500 hover:bg-cyan-700 cursor-pointer text-white font-semibold md:w-1/4 w-1/2 p-3 mt-5 uppercase text-lg"  
            >
              Cifrar a formato AES
            </button>
          </div>
          {/* Form descifrado de AES  */}
          <InputFormDescifrar
          title="Cifrado Doble a Descifrar" 
          subtitle="Resultado doble descifrado"
          sitioDescifrar={sitioDescifrar}
          setSitioDescifrar={setSitioDescifrar}
          resultadoDescifrado = {resultadoDescifrado}
          setResultadoDescifrado = { setResultadoCifrado }
          />
          <div className="flex flex-col justify-center items-center">
            <button
              type="submit"
              onClick={() => descifrarAes(sitioDescifrar)}
              className="  bg-cyan-500 hover:bg-cyan-700 cursor-pointer text-white font-semibold md:w-1/4 w-1/2 p-3 mt-5 uppercase text-lg"  
            >
              Descifrar de formato AES y Base64
            </button>
          </div>
        </div>
  
      </div>
  )
}
