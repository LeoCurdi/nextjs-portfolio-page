import Image from 'next/image'
import React, {useState} from 'react'
import Link from 'next/link'
import {AiOutlineClose, AiOutlineMenu, AiOutlineMail} from 'react-icons/ai'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'


const ProjectItem = ({title, backgroundImg, projectUrl, tech}) => {
    return (
        <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] ease-in duration-200 hover:scale-[1.025]'>
            <Image className='rounded-xl group-hover:opacity-10' src={backgroundImg} alt='/' />
            <div className='hidden group-hover:block absolute p-8'> {/*top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] this is how we center absolute elements with tailwind */}
                <h3 className='text-2xl text-white tracking-wider text-center'>{title}</h3>
                <p className='pb-4 pt-2 text-white text-center'>{tech}</p>
                <Link href={projectUrl}>
                    <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer hover:scale-[1.02] ease-in duration-200'>More Info</p>
                </Link>
            </div>
        </div>
    );
};

export default ProjectItem;