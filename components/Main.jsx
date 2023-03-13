import Image from 'next/image'
import React from 'react'
import { AiOutlineMail} from 'react-icons/ai'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'


const Main = () => {
    return (
        <div className='w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div>
                    <p className='uppercase text-sm tracking-widest text-gray-600'>Let's build something together</p>
                    <h1 className='py-4 text-gray-700'>Hi, I'm <span className='text-[#5651e5]'>Leo</span></h1>
                    <h1 className='py-4 text-gray-700'>A Full-Stack Developer</h1>
                    <p className='py-4 text-gray-600 max-width-[70%] m-auto'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis optio iste culpa mollitia. Ratione odio deserunt dolorum vero aspernatur. Distinctio et mollitia doloremque porro minus esse, repellat ea deserunt nesciunt?</p>
                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaLinkedinIn />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaGithub />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AiOutlineMail />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <BsFillPersonLinesFill />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;