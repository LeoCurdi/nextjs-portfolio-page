import React from 'react'
import Image from 'next/image'
import aboutImg from '../public/assets/about.jpg'
import Link from 'next/link'

const About = () => {
    return (
        <div id='about' className='w-full md:h-screen p-2 flex items-center'>
            <div className='max-w-[1240px] py-16 m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
                    <h2 className='py-4'>Who I Am</h2>
                    <p className='py-2 text-gray-600'> { "I'm a senior at Washington State University, pursuing a BS in Computer Science. My passion for coding began about ten years ago when I started experimenting with Minecraft mods and tweaking the function of the game." } </p>
                    <p className='py-2 text-gray-600'> { "Recently, I've been focusing on cybersecurity, computer networks, and machine learning, though I have a strong foundation in software engineering and full-stack web development. In my personal projects, I've built robust, well-tested software, and developed responsive sites that utilize backend technologies. I'm most proficient in C# and WinForms, having developed a Microsoft Excel clone. Additionally, I've built projects leveraging Node.js, MongoDB, Express, and React, and I'm always ready to adapt to new tech stacks as needed." } </p>
                    <p className='py-2 text-gray-600'> { "My additional interests extend to cloud computing, data science, business, and investing." } </p>
                    <p className='py-2 text-gray-600'> { "In my free time, I enjoy climbing, snowboarding, and capturing my adventures through filmmaking." } </p>
                    <Link href='/#projects'>
                        <p className='py-2 text-gray-600 underline cursor-pointer'>Check out some of my latest projects</p>
                    </Link>
                </div>
                <div className='hidden md:flex w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl items-center justify-center p-4'> {/* hover:scale-105 ease-in duration-300 */}
                    <Image src={aboutImg} className='rounded-xl' alt='/' />
                </div>
            </div>
        </div>
    );
};

export default About;