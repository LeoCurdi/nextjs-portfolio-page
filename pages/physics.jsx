import Image from 'next/image'
import React, {useState} from 'react'
import physicsImg from '../public/assets/project-images/physics.png'
import Link from 'next/link'
import {AiOutlineClose, AiOutlineMenu, AiOutlineMail} from 'react-icons/ai'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {RiRadioButtonFill} from 'react-icons/ri'

const physics = () => {
    return (
        <div className='w-full overflow-hidden'>
            <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
                <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/70 z-10' /> {/* self closing div tag (we're not putting anything in it) */}
                <Image className='absolute z-1' layout='fill' objectFit='cover' src={physicsImg} alt='/' />
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                    <h2 className='py-2'>Physics Simulator</h2>
                    <h3>Matter JS</h3>
                </div>
            </div>

            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
                <div className='col-span-4'>
                    {/* <p>Project</p> */}
                    <h2>Overview</h2>
                    <p className='pt-1'>
                        *Add description here*
                    </p>
                    <a href="https://physics-simulator-one.vercel.app/" target='_blank' rel='noreferrer'><button className='px-8 py-2 mt-4 mr-4 sm:mr-8'>View Project</button></a>
                    <a href="https://github.com/LeoCurdi/physicsSimulator" target='_blank' rel='noreferrer'><button className='px-8 py-2 mt-4'>View Code</button></a>
                </div>
                <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='p-2'>
                        <p className='text-center font-bold pb-2'>Technologies</p>
                        <div className='grid grid-cols-3 md:grid-cols-1'>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>HTML</p>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>CSS</p>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Javascript</p>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Matter JS</p>
                        </div>
                    </div>
                </div>
                <Link href='/#projects'>
                    <p className='underline cursor-pointer'>Back</p>
                </Link>
            </div>
        </div>
    );
};

export default physics;