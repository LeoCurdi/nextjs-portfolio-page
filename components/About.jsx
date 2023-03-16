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
                    <p className='py-2 text-gray-600'> { "I'm currently a college student pursuing a bachelor's degree in Computer Science at Washington State University, but I'm looking for a developer / software engineer position while I finish my degree. I've had an interest in coding ever since 2013 when I started playing around with Minecraft mods and messing with the function of the game. My interests include artificial intelligence, data science, and machine learning. I'm also passionate about investing, business, and finance." } </p>
                    <p className='py-2 text-gray-600'> { "Lately, I've been focusing on web development. I'm teaching myself how to build responsive sites with pleasing UI's that utilize backend technologies such as API's. Currently, I am most proficient in building front-end applications using HTML, CSS, Javascript, and React, but I am a quick learner and can pick up new tech stacks as needed." } </p>
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