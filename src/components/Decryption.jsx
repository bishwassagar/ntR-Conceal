

function Decryption() {
  return (
    <div id="decryption" className="flex flex-col items-center justify-center h-screen">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        D3crypt Files
      </h1>
      <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 text-center">
        Upload your files here and let the tool do it&apos;s thing! Download button will activate after the file has been decrypted.
      </p>
      <div className='flex space-x-20'>
        <input id="denckey-value" className="block w-full px-6 py-3 text-black bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm max-w-[220px]" placeholder="Enter Key Value" type="password" />
        <button className="bg-white w-36 h-12 rounded-md border-2 border-[#333] cursor-pointer relative group hover:bg-[#333] transition duration-300 ease-in hover:-translate-x-2 hover:translate-y-2 object-bottom">

          <h1 className="group-hover:text-white text-[#333] font-bold">
            Upload!
          </h1>
          <div className="rounded-md group-hover:border-0 w-36 h-12 border-2 border-[#333] absolute top-1 -left-2 -z-10">
            <div className="rounded-md group-hover:border-0 w-36 h-12 border-2 border-[#333] absolute top-1 -left-2 -z-10"></div>
          </div>
        </button>
        <button className="bg-white w-36 h-12 rounded-md border-2 border-[#333] cursor-pointer relative group hover:bg-[#333] transition duration-300 ease-in hover:-translate-x-2 hover:translate-y-2 object-bottom">

          <h1 className="group-hover:text-white text-[#333] font-bold">
            Decrypt!
          </h1>
          <div className="rounded-md group-hover:border-0 w-36 h-12 border-2 border-[#333] absolute top-1 -left-2 -z-10">
            <div className="rounded-md group-hover:border-0 w-36 h-12 border-2 border-[#333] absolute top-1 -left-2 -z-10"></div>
          </div>
        </button>
      </div>
    </div>
  )
}

export default Decryption