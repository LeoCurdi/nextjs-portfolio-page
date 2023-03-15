import Image from 'next/image'
import React, {useState} from 'react'
import sortingVisualizerImg from '../public/assets/project-images/sortingVisualizer.png'
import Link from 'next/link'
import {AiOutlineClose, AiOutlineMenu, AiOutlineMail} from 'react-icons/ai'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {RiRadioButtonFill} from 'react-icons/ri'

const sortingVisualizer = () => {
    return (
        <div className='w-full overflow-hidden'>
            <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
                <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' /> {/* self closing div tag (we're not putting anything in it) */}
                <Image className='absolute z-1' layout='fill' objectFit='cover' src={sortingVisualizerImg} alt='/' />
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                    <h2 className='py-2'>Sorting Visualizer</h2>
                    <h3>React JS / Tailwind / Firebase</h3>
                </div>
            </div>

            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
                <div className='col-span-4'>
                    <p>Project</p>
                    <h2>Overview</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum fugit nostrum debitis ipsa exercitationem iusto pariatur consequuntur. Quia ullam cupiditate dolores doloribus voluptatem sequi quo repellat, vitae, aperiam obcaecati perspiciatis?
                        Maxime vitae ducimus fugit eum tempora quasi laudantium placeat inventore iure. Molestias accusantium explicabo iure odit reiciendis delectus possimus ab, consectetur sint itaque temporibus nam nostrum animi exercitationem natus iusto.
                        Numquam, nam. Eaque qui ipsa amet. Delectus, doloremque rem! Ab eveniet omnis voluptas magnam architecto iure a odit eum maiores corporis. Eveniet quaerat adipisci magni nihil dolores magnam vel rerum?
                    </p>
                    <a href="https://sortingvisualizer.ldcurdi.com/" target='_blank' rel='noreferrer'><button className='px-8 py-2 mt-4 mr-8'>Demo</button></a>
                    
                    <button className='px-8 py-2 mt-4'>Code</button>
                </div>
                <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='p-2'>
                        <p className='text-center font-bold pb-2'>Technologies</p>
                        <div className='grid grid-cols-3 md:grid-cols-1'>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>React</p>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Tailwind</p>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Javascript</p>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Firebase</p>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Google API</p>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Zillow API</p>
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

export default sortingVisualizer;