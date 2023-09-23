import "./App.css";
import { Link } from "react-scroll";

function App() {

  return (
    <div id="home" className="flex flex-col items-center justify-center h-screen">
    <div className="loader"></div>
    <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        ntR-Conceal
    </h1>
    <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 text-center">
    ntR-Conceal is your trusted solution for securing your files through encryption. Keep your sensitive data safe and concealed from prying eyes.
    </p>
    <div className='flex space-x-20'> 
    <Link
        activeClass="active"
        to="encryption" // Provide the ID of the element to scroll to
        spy={true}
        smooth={true}
        offset={0} // Adjust the offset according to your layout
        duration={850} // Duration of the scrolling animation in milliseconds
    >
        <button className="bg-white w-36 h-12 rounded-md border-2 border-[#333] cursor-pointer relative group hover:bg-[#333] transition duration-300 ease-in hover:-translate-x-2 hover:translate-y-2 object-bottom">
            <h1 className="group-hover:text-white text-[#333] font-bold">
            Encrypt Files!
            </h1>
            <div className="rounded-md group-hover:border-0 w-36 h-12 border-2 border-[#333] absolute top-1 -left-2 -z-10">
                <div className="rounded-md group-hover:border-0 w-36 h-12 border-2 border-[#333] absolute top-1 -left-2 -z-10"></div>
            </div>
        </button>
    </Link>
    <Link
        activeClass="active"
        to="decryption" // Provide the ID of the element to scroll to
        spy={true}
        smooth={true}
        offset={0} // Adjust the offset according to your layout
        duration={1700} // Duration of the scrolling animation in milliseconds
    >
        <button className="bg-white w-36 h-12 rounded-md border-2 border-[#333] cursor-pointer relative group hover:bg-[#333] transition duration-300 ease-in hover:-translate-x-2 hover:translate-y-2 object-bottom">
            <h1 className="group-hover:text-white text-[#333] font-bold">
                Decrypt Files!
            </h1>
            <div className="rounded-md group-hover:border-0 w-36 h-12 border-2 border-[#333] absolute top-1 -left-2 -z-10">
                <div className="rounded-md group-hover:border-0 w-36 h-12 border-2 border-[#333] absolute top-1 -left-2 -z-10"></div>
            </div>
        </button>
    </Link>
    </div>
</div>
  );
}

export default App;
