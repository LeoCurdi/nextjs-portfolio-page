import Image from 'next/image'
import React, {useState} from 'react'
import yelpSkiImg from '../public/assets/project-images/yelpSki6.png'
import Link from 'next/link'
import {AiOutlineClose, AiOutlineMenu, AiOutlineMail} from 'react-icons/ai'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {RiRadioButtonFill} from 'react-icons/ri'

const cosmicClash = () => {
    return (
        <div className='w-full overflow-hidden'>
            <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
                <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/70 z-10' /> {/* self closing div tag (we're not putting anything in it) */}
                <Image className='absolute z-1' layout='fill' objectFit='cover' src={yelpSkiImg} alt='/' />
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                    <h2 className='py-2'>YelpSki</h2>
                    <h3>NodeJS</h3>
                </div>
            </div>

            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
                <div className='col-span-4'>
                    {/* <p>Project</p> */}
                    <h2>Overview</h2>
                    <p className='pt-1'>
                        YelpSki is a full-stack web application developed as part of Colt Steele&apos;s web developer course on Udemy. It allows ski enthusiasts to register, 
                        post ski resorts, and leave reviews. Users can explore resort locations on an interactive cluster map powered by Mapbox API. 
                        Overall, YelpSki provides a user-friendly, secure, and visually appealing platform for ski enthusiasts to connect and share their experiences.
                    </p>
                    <p className='pt-1'> 
                        The back-end is built with NodeJS, Express, and MongoDB, allowing persistent data storage and encrypted user information.
                        Key features include authentication with Passport, full CRUD functionality, error handling, input validation, and file uploads with Cloudinary. 
                        Authorization is set up such that contributions to the site are linked to user accounts and thus can only be modified by the author.
                        Additionally, the application implements various cybersecurity strategies like injection and input sanitization.
                    </p>
                    <a href="https://yelpski.ldcurdi.com" target='_blank' rel='noreferrer'><button className='px-8 py-2 mt-4 mr-4 sm:mr-8'>View Demo</button></a>
                    <a href="https://github.com/LeoCurdi/yelpSki" target='_blank' rel='noreferrer'><button className='px-8 py-2 mt-4'>View Code</button></a>
                </div>
                <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='p-2'>
                        <p className='text-center font-bold pb-2'>Technologies</p>
                        <div className='grid grid-cols-3 md:grid-cols-1'>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>NodeJS</p>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>MongoDB</p>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>ExpressJS</p>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Bootstrap</p>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Passport</p>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Mapbox API</p>
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

export default cosmicClash;