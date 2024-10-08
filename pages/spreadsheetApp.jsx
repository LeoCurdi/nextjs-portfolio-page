import Image from 'next/image'
import React, {useState} from 'react'
import SpreadsheetImg from '../public/assets/project-images/spreadsheet.png'
import Link from 'next/link'
import {RiRadioButtonFill} from 'react-icons/ri'

const SpreadsheetApp = () => {
    return (
        <div className='w-full overflow-hidden'>
            <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
                <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/70 z-10' /> {/* self closing div tag (we're not putting anything in it) */}
                <Image className='absolute z-1' layout='fill' objectFit='cover' src={SpreadsheetImg} alt='/' />
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                    <h2 className='py-2'>Spreadsheet App</h2>
                    <h3>WinForms</h3>
                </div>
            </div>

            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
                <div className='col-span-4'>
                    {/* <p>Project</p> */}
                    <h2>Overview</h2>
                    <p className='pt-1'>
                    I built a fully functional GUI spreadsheet application as my project for CS 321 (Object-Oriented Software Principles) at WSU. The application includes features like undo/redo functionality, loading and saving in XML file format, and robust handling of user input errors.
                    </p>
                    <p className='pt-1'> 
                    The project is architected with a clear separation between the logic and UI layers. The logic layer, implemented as a dynamic-link library (DLL), handles core functionalities such as expression evaluation with expression trees, error handling for circular references, malformed data, and more. The UI layer is built using WinForms, providing users with a responsive and intuitive interface.
                    </p>
                    <p className='pt-1'> 
                    Throughout the development, I also gained experience with NUnit, applying comprehensive unit testing to ensure the reliability of the underlying logic.
                    </p>
                    <a href="https://youtu.be/JXlf8_atGJo" target='_blank' rel='noreferrer'><button className='px-8 py-2 mt-4 mr-4 sm:mr-8'>View Demo Video</button></a>
                    <a href="https://github.com/LeoCurdi/Spreadsheet-App-for-cpts321" target='_blank' rel='noreferrer'><button className='px-8 py-2 mt-4'>View Code</button></a>
                </div>
                <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='p-2'>
                        <p className='text-center font-bold pb-2'>Technologies</p>
                        <div className='grid grid-cols-3 md:grid-cols-1'>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>C#</p>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>WinForms</p>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>NUnit</p>
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

export default SpreadsheetApp;