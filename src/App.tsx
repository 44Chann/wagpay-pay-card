import { useState } from "react";
import { FiSettings, FiArrowDown } from "react-icons/fi";
import Settings from "./componets/settings";


const DefaultToken = () => {
  return (
    <div className="flex items-center p-2 px-4 bg-slate-800 rounded-full cursor-pointer">
      <p>eth</p>
      <FiArrowDown className="ml-4" />
    </div>
  )
}

const SelectToken = () => {
  return (
    <div className="flex items-center pr-3  bg-slate-800 rounded-full cursor-pointer">
      <button className="bg-blue-700  p-3 px-6 rounded-full focus:outline-none">select token</button>
      <FiArrowDown className="ml-4" />
    </div>
  )
}

const InputForToken = () => {
  return (
    <input type=" text" value={1} className="bg-transparent py-6  focus:outline-none " />
  )
}

function App() {
  const [isSettingOpen, setIsSettingOpen] = useState(false)
  return (
    <>
      <div className="h-screen w-full flex justify-center items-center text-white" onClick={() => setIsSettingOpen(false)}>
        <div className=" relative w-full max-w-2xl bg-black px-4 py-6 rounded-xl">
          <div className=" w-ful flex justify-between">
            <h1 className="font-bold text-lg">swap</h1>
            <FiSettings className="cursor-pointer" onClick={(e) => {
              e.stopPropagation()
              setIsSettingOpen(!isSettingOpen)
            }} />
          </div>
          <div className="w-full my-4 px-4 flex items-center justify-between bg-slate-900 rounded-lg">
            <InputForToken />
            <DefaultToken />
          </div>
          <div className="w-full my-4 px-4 flex items-center justify-between bg-slate-900 rounded-lg">
            <InputForToken />
            <SelectToken />
          </div>
          <div className="w-full my-4 flex items-center rounded-full ">
            <button className="w-full p-6 bg-transpernet outline-none rounded-full text-blue-600 bg-blue-300 focus:outline-none">Connect wallet</button>
          </div>
          <Settings isSettingOpen={isSettingOpen} setIsSettingOpen={setIsSettingOpen} />
        </div>
      </div>

    </>

  );
}

export default App;
