

export const InputForm = ({title,sitio,setSitio}) => {

  const cifrarBase = (texto) =>{
    let textoCifrado = btoa(texto)
    return textoCifrado
  }

  return (
    <div >
      <form  className=' flex flex-col justify-center items-center'>
      <label htmlFor="inputLink" className=" text-xl mb-5">{title}</label>
      <input 
        type="text"
        name="inputLink"
        id='inputLink'
        placeholder='Link'
        className=" placeholder:italic placeholder:text-gray-700 block bg-white w-3/4 border border-gray-600 rounded-md py-1 pl-3 pr-3 shadow-md focus:outline-none focus:border-sky-500 sm:text-sm" 
        value={sitio}
        onChange={ (event) => setSitio(event.target.value) }
        />
      <p className="mt-5 text-lg">Resultado Cifrado en base64</p>
      <textarea name="resultadoCifrado"  cols="30" rows="10" placeholder="Resultado cifrado" className=" resize-none mt-5 placeholder:italic placeholder:text-gray-700 block bg-white w-3/4 border border-gray-600 rounded-md py-1 pl-3 pr-3 shadow-md focus:outline-none focus:border-sky-500 sm:text-sm"></textarea>
      
      </form>

    </div>
  )
}
