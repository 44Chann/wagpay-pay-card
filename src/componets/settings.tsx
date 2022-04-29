interface Props {
    isSettingOpen: boolean
    setIsSettingOpen: Function
}

const Settings = ({ isSettingOpen, setIsSettingOpen }: Props) => {
    return (
        <div>
            {isSettingOpen ?
                < div className="w-full max-w-[400px] bg-gray-900 py-6 px-3 absolute top-6 right-8" onClick={(e) => e.stopPropagation()} >
                    <h2 className="mb-4">Transection settings</h2>
                    <div>
                        <p>Slippage Tolrance ?</p>
                        <div className="flex my-3">
                            <button className="bg-blue-700 px-4 py-1 focus:outline-none outline-none mr-2 rounded-full">Auto</button>
                            <input type="text" className="bg-gray-800 p-2  rounded-full" placeholder="0.10%" />
                        </div>

                    </div>
                    <div className="">
                        <p>Transection Settings</p>
                        <div className="flex ">
                            <input type="text" className="w-20 bg-gray-800 px-4 py-1 rounded-full text-right opacity-80 " value={30} />
                            <p className="mx-4">minutes</p>
                        </div>
                    </div>
                </div > : ""
            }
        </div>

    )


}
export default Settings;