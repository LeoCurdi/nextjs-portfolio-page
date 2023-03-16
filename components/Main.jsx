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
                    <p className='py-4 text-gray-600 max-width-[70%] m-auto'>I&apos;m focused on building responsive front-end web applications that connect with API&apos;s and other backend technologies</p>
                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                        <a href="http://www.linkedin.com/in/leo-curdi" target='_blank' rel='noreferrer'>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-[1.2rem] cursor-pointer hover:scale-110 ease-in duration-200'>
                                <FaLinkedinIn size={25} />
                            </div>
                        </a>
                        <a href="https://github.com/LeoCurdi" target='_blank' rel='noreferrer'>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-[1.2rem] cursor-pointer hover:scale-110 ease-in duration-200'>
                                <FaGithub size={25} />
                            </div>
                        </a>
                        <a href="/#contact">
                            <div className='rounded-full shadow-lg shadow-gray-400 p-[1.2rem] cursor-pointer hover:scale-110 ease-in duration-200'>
                                <AiOutlineMail size={25} />
                            </div>
                        </a>
                        <a href="/assets/Resume.pdf" rel='noreferrer'>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-[1.2rem] cursor-pointer hover:scale-110 ease-in duration-200'>
                                <BsFillPersonLinesFill size={25} />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;