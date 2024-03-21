import React, { useState } from 'react'

const MainScreen = () => {
    const [toggle, settoggle] = useState(true)

    function handleClick() {
        settoggle(!toggle)
    }
    return (
        toggle ?
            <div className='bg-black gap-6 h-screen flex items-center  flex-col'>
                <button onClick={handleClick} className='absolute right-4 '>
                    <img className='h-14' src='../public/Page 1/Group 46.png' />
                </button>
                <img className='h-24 mt-16' src='../public/Page 1/moptro logo.png' />
                <input type='text' placeholder='search here' className='input'></input>
                <div>

                    <div>
                        <div className='flex gap-4'>
                            <p>Productivity on Monday</p> <p className="text-green-500">92%</p>
                        </div>
                        <progress value={92} max={100} className='bg-gray-600 text-green-500'></progress>
                    </div>
                    <div>
                        <div className='flex gap-4'>
                            <p>Productivity on Tuesday</p> <p className="text-green-500">92%</p>
                        </div>
                        <progress value={92} max={100} className='bg-gray-600 text-green-500'></progress>
                    </div>
                    <div>
                        <div className='flex gap-4'>
                            <p>Productivity on Wednesday</p> <p className="text-green-500">92%</p>
                        </div>
                        <progress value={92} max={100} className='bg-gray-600 text-green-500'></progress>
                    </div>
                    <div>
                        <div className='flex gap-4'>
                            <p>Productivity on Thrusday</p> <p className="text-green-500">92%</p>
                        </div>
                        <progress value={92} max={100} className='bg-gray-600 text-green-500'></progress>
                    </div>
                    <div>
                        <div className='flex gap-4'>
                            <p>Productivity on Friday</p> <p className="text-green-500">92%</p>
                        </div>
                        <progress value={92} max={100} className='bg-gray-600 text-green-500'></progress>
                    </div>
                    <div>
                        <div className='flex gap-4'>
                            <p>Productivity on Saturday</p> <p className="text-green-500">92%</p>
                        </div>
                        <progress value={92} max={100} className='bg-gray-600 text-green-500'></progress>
                    </div>
                </div>
            </div> : <div className='bg-black gap-6 h-screen flex items-center  flex-col'>
                <button onClick={handleClick} className='absolute right-4 '>
                    <img className='h-14' src='../public/Page 1/Group 46.png' />
                </button>
                <img className='h-24 mt-16' src='../public/Page 1/moptro logo.png' />
                <input type='text' placeholder='search here' className='input'></input>
                <div>
                     <div className='bg-gray-600 w-64 p-4 rounded-2xl'>
                        <div className='flex gap-4'>
                            <p>Emp id :</p> <p className="text-green-500">1</p>
                        </div>
                        <div className='flex gap-4'>
                            <p>Name :</p> <p className="text-green-500">Aman</p>
                        </div>
                        <div className='flex gap-4'>
                            <p>DOB :</p> <p className="text-green-500">12 april 2003</p>
                        </div>
                        <div className='flex gap-4'>
                            <p>Role :</p> <p className="text-green-500">CEO</p>
                        </div> 
                     </div>
                     <div className='bg-gray-600 w-64 p-4 rounded-2xl mt-4'>
                        <div className='flex gap-4'>
                            <p>Emp id :</p> <p className="text-green-500">1</p>
                        </div>
                        <div className='flex gap-4'>
                            <p>Name :</p> <p className="text-green-500">Aman</p>
                        </div>
                        <div className='flex gap-4'>
                            <p>DOB :</p> <p className="text-green-500">12 april 2003</p>
                        </div>
                        <div className='flex gap-4'>
                            <p>Role :</p> <p className="text-green-500">CEO</p>
                        </div> 
                     </div>
                      
                </div>
                </div>
                )   
}

                export default MainScreen