import { useState } from "react"
import CryptoJS from "crypto-js"
import { InputForm, InputFormDescifrar } from "../components/InputForm"
import { Header } from "../layouts/Header"


export const CifradoAes = () => {


  const [sitio, setSitio] = useState("")
  const [resultadoCifrado, setResultadoCifrado] = useState("")
  const [sitioDescifrar, setSitioDescifrar] = useState("")
  const [resultadoDescifrado, setResultadoDescifrado] = useState("")

  const cifrarAes = (texto) =>{
    let textoCifrado = CryptoJS.AES.encrypt(texto,'@criptografia').toString()
    return setResultadoCifrado(textoCifrado)
  }

  const descifrarAes = (texto) => {
    let cifradoBytes = CryptoJS.AES.decrypt(texto,'@criptografia')
    let textoDescifrado = cifradoBytes.toString(CryptoJS.enc.Utf8)
    return setResultadoDescifrado(textoDescifrado)
  }

  return (
      <div className="bg-gray-300 min-h-screen">
        <Header />
        <div className="container shadow-md rounded-md bg-gray-200 w-3/4 mt-5 h-full pt-6 pb-6">
          <InputForm 
          title="Link a cifrar en formato AES" 
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
              className=" mb-5 bg-emerald-500 hover:bg-emerald-700 cursor-pointer text-white font-semibold md:w-1/4 w-1/2 p-3 mt-5 uppercase text-lg"  
            >
              Cifrar a formato AES
            </button>
          </div>
  
          <InputFormDescifrar
          title="Link a descifrar en formato AES" 
          subtitle="Resultado descifrado en formato AES"
          sitioDescifrar={sitioDescifrar}
          setSitioDescifrar={setSitioDescifrar}
          resultadoDescifrado = {resultadoDescifrado}
          setResultadoDescifrado = { setResultadoCifrado }
          />
          <div className="flex flex-col justify-center items-center">
            <button
              type="submit"
              onClick={() => descifrarAes(sitioDescifrar)}
              className="  bg-emerald-500 hover:bg-emerald-700 cursor-pointer text-white font-semibold md:w-1/4 w-1/2 p-3 mt-5 uppercase text-lg"  
            >
              Descifrar de formato AES
            </button>
          </div>
        </div>
  
      </div>
  )
}
