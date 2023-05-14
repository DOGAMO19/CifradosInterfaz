

export const InputForm = ({title,subtitle,sitio,setSitio,resultadoCifrado}) => {



  return (
    <div >
      <form  className=' flex flex-col justify-center items-center'>
      <label htmlFor="inputLink" className=" text-xl mb-5">{title}</label>
      <input 
        type="text"
        name="inputLink"
        id='inputLink'
        placeholder='Texto a Cifrar'
        className=" placeholder:italic placeholder:text-gray-700 block bg-white w-3/4 border border-gray-600 rounded-md py-1 pl-3 pr-3 shadow-md focus:outline-none focus:border-sky-500 sm:text-sm" 
        value={sitio}
        onChange={ (event) => setSitio(event.target.value) }
        />
      <p className="mt-5 text-lg">{subtitle}</p>
      <textarea
        name="resultado"  
        cols="30" 
        rows="10" 
        placeholder="Resultado" 
        value={resultadoCifrado}
        className=" resize-none mt-5 placeholder:italic placeholder:text-gray-700 block bg-white w-3/4 border border-gray-600 rounded-md py-1 pl-3 pr-3 shadow-md focus:outline-none focus:border-sky-500 sm:text-sm" />
      
      </form>

    </div>
  )
}

export const InputFormDescifrar = ({title,subtitle,sitioDescifrar,setSitioDescifrar,resultadoDescifrado}) => {

  return (
    <div >
      <form  className=' flex flex-col justify-center items-center'>
      <label htmlFor="inputLink" className=" text-xl mb-5">{title}</label>
      <input 
        type="text"
        name="inputLink"
        id='inputLink'
        placeholder='Texto a Descifrar'
        className=" placeholder:italic placeholder:text-gray-700 block bg-white w-3/4 border border-gray-600 rounded-md py-1 pl-3 pr-3 shadow-md focus:outline-none focus:border-sky-500 sm:text-sm" 
        value={sitioDescifrar}
        onChange={ (event) => setSitioDescifrar(event.target.value) }
        />
      <p className="mt-5 text-lg">{subtitle}</p>
      <textarea
        name="resultadoDescifrado"  
        cols="30" 
        rows="10" 
        placeholder="Resultado" 
        defaultValue={resultadoDescifrado}
        className=" resize-none mt-5 placeholder:italic placeholder:text-gray-700 block bg-white w-3/4 border border-gray-600 rounded-md py-1 pl-3 pr-3 shadow-md focus:outline-none focus:border-sky-500 sm:text-sm" />
      
      </form>

    </div>
  )
}


export const InputFormDoble = ({title,subtitle,sitioCifrarDos,setSitioCifrarDos,resultadoCifradoDos}) => {

  return (
    <div >
      <form  className=' flex flex-col justify-center items-center'>
      <label htmlFor="inputLink" className=" text-xl mb-5">{title}</label>
      <input 
        type="text"
        name="inputLink"
        id='inputLink'
        placeholder='Texto a Cifrar'
        className=" placeholder:italic placeholder:text-gray-700 block bg-white w-3/4 border border-gray-600 rounded-md py-1 pl-3 pr-3 shadow-md focus:outline-none focus:border-sky-500 sm:text-sm" 
        value={sitioCifrarDos}
        onChange={ (event) => setSitioCifrarDos(event.target.value) }
        />
      <p className="mt-5 text-lg">{subtitle}</p>
      <textarea
        name="resultadoDescifrado"  
        cols="30" 
        rows="10" 
        placeholder="Resultado" 
        defaultValue={resultadoCifradoDos}
        className=" resize-none mt-5 placeholder:italic placeholder:text-gray-700 block bg-white w-3/4 border border-gray-600 rounded-md py-1 pl-3 pr-3 shadow-md focus:outline-none focus:border-sky-500 sm:text-sm" />
      
      </form>

    </div>
  )
}