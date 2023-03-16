import Image from 'next/image'
import React, {useState} from 'react'
import Link from 'next/link'
import {AiOutlineClose, AiOutlineMenu, AiOutlineMail} from 'react-icons/ai'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'


const SkillItem = ({backgroundImg, name}) => {
    return (

        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-200'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                <Image src={backgroundImg} width='64' height='64' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>{name}</h3>
                </div>
            </div>
        </div>

    );
};

export default SkillItem;