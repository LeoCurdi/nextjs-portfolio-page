import Image from 'next/image'
import React, {useState} from 'react'
import Link from 'next/link'
import {AiOutlineClose, AiOutlineMenu, AiOutlineMail} from 'react-icons/ai'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import SkillItem from './SkillItem'

import htmlImg from '../public/assets/skill-icons/html.png'
import cssImg from '../public/assets/skill-icons/css.png'
import jsImg from '../public/assets/skill-icons/javascript.png'
import reactImg from '../public/assets/skill-icons/react.png'
import tailwindImg from '../public/assets/skill-icons/tailwind.png'
import firebaseImg from '../public/assets/skill-icons/firebase.png'
import nextImg from '../public/assets/skill-icons/nextjs.png'
import nodeImg from '../public/assets/skill-icons/node.png'
import mongoImg from '../public/assets/skill-icons/mongo.png'
import expressImg from '../public/assets/skill-icons/express.png'
import gitImg from '../public/assets/skill-icons/git.png'
import cImg from '../public/assets/skill-icons/c.png'
import cppImg from '../public/assets/skill-icons/cpp.png'
import pythonImg from '../public/assets/skill-icons/python.png'
import csharpImg from '../public/assets/skill-icons/csharp.png'
import winformsImg from '../public/assets/skill-icons/winforms.png'


const Skills = () => {
    return (
        <div id='skills' className='w-full lg:h-screen p-2'>
            <div className='max-w-[1240px] pt-16 mx-auto flex flex-col justify-center h-full'>
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Skills</p>
                <h2 className='py-4'>What I Can Do</h2>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6'>
                    
                    <SkillItem name='C#' backgroundImg={csharpImg} />
                    <SkillItem name='JavaScript' backgroundImg={jsImg} />
                    <SkillItem name='Python' backgroundImg={pythonImg} />
                    <SkillItem name='C/C++' backgroundImg={cppImg} />

                    <SkillItem name='WinForms' backgroundImg={winformsImg} />
                    <SkillItem name='ReactJS' backgroundImg={reactImg} />
                    <SkillItem name='NextJS' backgroundImg={nextImg} />
                    <SkillItem name='Tailwind' backgroundImg={tailwindImg} />

                    <SkillItem name='Git' backgroundImg={gitImg} />
                    <SkillItem name='MongoDB' backgroundImg={mongoImg} />
                    <SkillItem name='NodeJS' backgroundImg={nodeImg} />
                    <SkillItem name='ExpressJS' backgroundImg={expressImg} />
                    
                    {/* <SkillItem name='HTML' backgroundImg={htmlImg} />
                    <SkillItem name='CSS' backgroundImg={cssImg} />
                    <SkillItem name='Firebase' backgroundImg={firebaseImg} />
                    <SkillItem name='C' backgroundImg={cImg} /> */}
                </div>
            </div>
        </div>
    );
};

export default Skills;