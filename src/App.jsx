import { useState } from "react";
import { LC, NC, SC, UC } from "./data/PassCharacters";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../public/pngegg.png'

function App() {
  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(false);
  const [number, setNumber] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const [passlength,setPasslength]= useState(10)
  const [showfinalpass,setShowFinalpass]=useState("")
  let createPassword = () => {
    let finalPass=""
    let charset = "";
    if (uppercase || lowercase || number || symbols) {
      if (uppercase) charset += UC;
      if (lowercase) charset += LC;
      if (number) charset += NC;
      if (symbols) charset += SC;
      for(let i=1; i<=passlength; i++){
        finalPass+=charset.charAt(Math.floor(Math.random()*charset.length))
      }
      setShowFinalpass(finalPass)
    } else {
      alert("Please select atleast one checkbox");
    }
  };
  let copyPass=()=>{
    navigator.clipboard.writeText(showfinalpass);
    toast.success("Copied successfully!",{
      position: "top-right",
      autoClose: 1000,
      })
  }
  return (
    <>
      <section className="dark:bg-gray-900 !h-screen bg-blue-300">
      <ToastContainer />
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img
              className="w-8 h-8 mr-2"
              src={logo}
              alt="logo"
            />
            Password Generator App
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white capitalize">
                choose your password type...
              </h1>
              <div className="space-y-4 md:space-y-6">
                <div className="flex justify-between items-center">
                  <input
                    value={showfinalpass}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 w-3/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    type="text"
                    readOnly
                  />{" "}
                  <button onClick={copyPass} className="py-2 px-6 bg-red-500 text-white rounded-full">
                    Copy
                  </button>
                </div>
                <div className="flex justify-between items-center">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Enter Your Password Length
                  </label>
                  <input
                    min={10}
                    max={20}
                    value={passlength}
                    onChange={(e)=>setPasslength(e.target.value)}
                    type="number"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-1/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <label
                    htmlFor="uppercase-letters"
                    className="cursor-pointer text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Include uppercase letters
                  </label>
                  <input
                    id="uppercase-letters"
                    type="checkbox"
                    checked={uppercase}
                    onChange={() => setUppercase(!uppercase)}
                    class="w-4 h-4 text-blue-600 cursor-pointer bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <label
                    htmlFor="lowecase-letters"
                    className="cursor-pointer text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Include lowecase letters
                  </label>
                  <input
                    id="lowecase-letters"
                    type="checkbox"
                    checked={lowercase}
                    onChange={() => setLowercase(!lowercase)}
                    class="w-4 h-4 text-blue-600 cursor-pointer bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <label
                    htmlFor="Numbers"
                    className="cursor-pointer text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Include numbers
                  </label>
                  <input
                    id="Numbers"
                    type="checkbox"
                    checked={number}
                    onChange={() => setNumber(!number)}
                    class="w-4 h-4 text-blue-600 cursor-pointer bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <label
                    htmlFor="symbols"
                    className="cursor-pointer text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Include symbols
                  </label>
                  <input
                    id="symbols"
                    type="checkbox"
                    checked={symbols}
                    onChange={() => setSymbols(!symbols)}
                    class="w-4 h-4 text-blue-600 cursor-pointer bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                </div>
                {/* generate btn */}
                <button
                  type="submit"
                  onClick={createPassword}
                  className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Generate Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
