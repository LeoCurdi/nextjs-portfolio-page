import Image from 'next/image'
import React, {useState} from 'react'
import Link from 'next/link'
import {AiOutlineClose, AiOutlineMenu, AiOutlineMail} from 'react-icons/ai'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'


const Skills = () => {
    return (
        <div className='w-full lg:h-screen p-2'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Skills</p>
                <h2 className='py-4'>What I Can Do</h2>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8'>
                    
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-200'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                            <Image src='/../public/assets/skill-icons/html.png' width='64' height='64' alt='/' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>HTML</h3>
                            </div>
                        </div>
                    </div>
                                        
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-200'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                            <Image src='/../public/assets/skill-icons/css.png' width='64' height='64' alt='/' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>CSS</h3>
                            </div>
                        </div>
                    </div>
                                        
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-200'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                            <Image src='/../public/assets/skill-icons/javascript.png' width='64' height='64' alt='/' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>JavaScript</h3>
                            </div>
                        </div>
                    </div>
                                        
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-200'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                            <Image src='/../public/assets/skill-icons/react.png' width='64' height='64' alt='/' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>React</h3>
                            </div>
                        </div>
                    </div>
                                        
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-200'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                            <Image src='/../public/assets/skill-icons/tailwind.png' width='64' height='64' alt='/' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Tailwind</h3>
                            </div>
                        </div>
                    </div>
                                        
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-200'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                            <Image src='/../public/assets/skill-icons/firebase.png' width='64' height='64' alt='/' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Firebase</h3>
                            </div>
                        </div>
                    </div>
{/*                                         
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                            <Image src='/../public/assets/skill-icons/github.png' width='64' height='64' alt='/' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Github</h3>
                            </div>
                        </div>
                    </div>
                                        
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                            <Image src='/../public/assets/skill-icons/shopify.png' width='64' height='64' alt='/' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Shopify</h3>
                            </div>
                        </div>
                    </div>
                           */}                                  
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-200'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                            <Image src='/../public/assets/skill-icons/c.png' width='64' height='64' alt='/' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>C</h3>
                            </div>
                        </div>
                    </div>
                                                            
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-200'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                            <Image src='/../public/assets/skill-icons/cpp.png' width='64' height='64' alt='/' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>C++</h3>
                            </div>
                        </div>
                    </div>
                                                            
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-200'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                            <Image src='/../public/assets/skill-icons/python.png' width='64' height='64' alt='/' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Python</h3>
                            </div>
                        </div>
                    </div>
                                                            
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-200'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                            <Image src='/../public/assets/skill-icons/git.png' width='64' height='64' alt='/' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Git</h3>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Skills;