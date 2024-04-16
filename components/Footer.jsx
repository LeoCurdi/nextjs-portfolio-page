import React, {useState} from 'react'
import Link from 'next/link'
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'


const Footer = () => {
    return (
        <div id='footer' className='w-full'>
            <div className='max-w-[1240px] pt-32 m-auto px-2 w-full'>
                <div className='flex justify-center py-12'>
                    <Link href='/'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <HiOutlineChevronDoubleUp className='text-[#5651e5]' size={30} /> {/* using size property of react icons */}
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;