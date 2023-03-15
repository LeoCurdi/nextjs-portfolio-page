import Image from 'next/image'
import React from 'react'
import { AiOutlineMail} from 'react-icons/ai'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'


const Main = () => {
    return (
        <div id='home' className='w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div>
                    <p className='uppercase text-sm tracking-widest text-gray-600'> { "Let's build something together" } </p> {/* the curly brackets on the text prevents the compiler from reading the apostrophe in let's as a string start. can also use &apos; and things like that */}
                    <h1 className='py-4 text-gray-700'>Hi, I&apos;m <span className='text-[#5651e5]'>Leo</span></h1>
                    <h1 className='py-4 text-gray-700'>A Full-Stack Developer</h1>
                    <p className='py-4 text-gray-600 max-width-[70%] m-auto'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis optio iste culpa mollitia. Ratione odio deserunt dolorum vero aspernatur. Distinctio et mollitia doloremque porro minus esse, repellat ea deserunt nesciunt?</p>
                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-[1.2rem] cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaLinkedinIn size={25} />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-[1.2rem] cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaGithub size={25} />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-[1.2rem] cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AiOutlineMail size={25} />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-[1.2rem] cursor-pointer hover:scale-110 ease-in duration-300'>
                            <BsFillPersonLinesFill size={25} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;