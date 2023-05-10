import { Header } from "../layouts/Header"
import { InputForm, InputFormDescifrar } from "../components/InputForm"
import { useState } from "react"


export const CifradoBase = () => {

  const [sitio, setSitio] = useState("")
  const [resultadoCifrado, setResultadoCifrado] = useState("")
  const [sitioDescifrar, setSitioDescifrar] = useState("")
  const [resultadoDescifrado, setResultadoDescifrado] = useState("")

  const cifrarBase = (texto) =>{
    let textoCifrado = btoa(texto)
    return setResultadoCifrado(textoCifrado)
  }

  const descifrarBase = (texto) => {
    let textoDescifrado = window.atob(texto)
    return setResultadoDescifrado(textoDescifrado)
  }


  return (
    <div className="bg-gray-300 min-h-screen">
      <Header />
      <div className="container shadow-md rounded-md bg-gray-200 w-3/4 mt-5 h-full pt-6 pb-6">
        <InputForm 
        title="Link a cifrar en base64" 
        subtitle="Resultado cifrado en Base64"
        sitio={sitio}
        setSitio={setSitio}
        resultadoCifrado = {resultadoCifrado}
        setResultadoCifrado = { setResultadoCifrado }
        />
        <div className="flex flex-col justify-center items-center">
          <button
            type="submit"
            onClick={() => cifrarBase(sitio)}
            className=" mb-5 bg-emerald-500 hover:bg-emerald-700 cursor-pointer text-white font-semibold md:w-1/4 w-1/2 p-3 mt-5 uppercase text-lg"  
          >
            Cifrar a Base64
          </button>
        </div>

        <InputFormDescifrar
        title="Link a descifrar en base64" 
        subtitle="Resultado descifrado en Base64"
        sitioDescifrar={sitioDescifrar}
        setSitioDescifrar={setSitioDescifrar}
        resultadoDescifrado = {resultadoDescifrado}
        setResultadoDescifrado = { setResultadoCifrado }
        />
        <div className="flex flex-col justify-center items-center">
          <button
            type="submit"
            onClick={() => descifrarBase(sitioDescifrar)}
            className="  bg-emerald-500 hover:bg-emerald-700 cursor-pointer text-white font-semibold md:w-1/4 w-1/2 p-3 mt-5 uppercase text-lg"  
          >
            Descifrar de Base64
          </button>
        </div>
      </div>

    </div>
  )
}
