import { Header } from "../layouts/Header"
import { InputForm } from "../components/InputForm"
import { useState } from "react"


export const CifradoBase = () => {

  const [sitio, setSitio] = useState("")

  return (
    <div className="bg-gray-300 min-h-screen">
      <Header />
      <div className="container shadow-md rounded-md bg-gray-200 w-3/4 mt-5 h-full pt-6 pb-6">
        <InputForm 
        title="Link a cifrar en base64" 
        sitio={sitio}
        setSitio={setSitio}
        />
        <div className="flex flex-col justify-center items-center">
          <button
            type="submit"
            className="  bg-emerald-500 hover:bg-emerald-700 cursor-pointer text-white font-semibold w-1/2 p-3 mt-5 uppercase text-lg"  
          >
            Cifrar a Base64
          </button>
        </div>
      </div>

    </div>
  )
}
