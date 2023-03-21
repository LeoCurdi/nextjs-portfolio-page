import Image from 'next/image'
import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import {AiOutlineClose, AiOutlineMenu, AiOutlineMail} from 'react-icons/ai'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {useRouter} from 'next/router'


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [shadow, setShadow] = useState(false)

// give the navbar a background when not on projects page 
    const [navBg, setNavBg] = useState('#ecf0f3') 
    const [linkColor, setLinkColor] = useState('#1f2937')
    const [hamburgerIconColor, setHamburgerIconColor] = useState('#1f2937')
    const router = useRouter()
    const onMain = (router.asPath === '/' || router.asPath === '/#about' || router.asPath === '/#skills' || router.asPath === '/#projects' || router.asPath === '/#contact')
    
    useEffect(() => {
        if (!onMain) {
            // if we're on a project page. we still want the nav bar to be opaque if the user scrolls down a project page
            setShadow(false);
            setNavBg('transparent')
            setLinkColor('#ecf0f3')
            setHamburgerIconColor('#ecf0f3')

            window.addEventListener('scroll', handleShadow);
        }
        else {
            setShadow(true);
            setNavBg('#ecf0f3');
            setLinkColor('#1f2937');
            setHamburgerIconColor('#1f2937');
        }

        return () => {
            window.removeEventListener('scroll', handleShadow);
        };
    }, [router])

    const handleShadow = () => {
        if (window.scrollY >= 50) {
            setShadow(true);
            setNavBg('#ecf0f3')
            setLinkColor('#1f2937')
            setHamburgerIconColor('#1f2937')
        }
        else {
            setShadow(false);
            setNavBg('transparent')
            setLinkColor('#ecf0f3')
            setHamburgerIconColor('#ecf0f3')
        }
    }


    const handleNav = () => {
        setNav(!nav) /* switch */
    }

    return (
        <div style={{backgroundColor: `${navBg}`}} className={shadow ? 'fixed w-full h-20 shadow-xl z-[100]' : 'fixed w-full h-20 z-[100]'}> {/* the brackets lets you choose your own value instead of being confined to tailwind's pre set intervals */}
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                <Link href='/'>
                    <Image src="/assets/logo.png" alt="/" width='90' height='40' /> {/* lazy loading image */}
                </Link>
                <div>
                    <ul style={{color: `${linkColor}`}} className='hidden md:flex'> {/* tailwind is mobile first, so this is saying: hide nav items on mobile, and display them as flex on anything above medium screen size */}
                        <Link href='/'>
                            <div className='px-5 2xl:px-6 py-2  hover:rounded-xl hover:uppercase hover:bg-gradient-to-r hover:from-[#5651e5] hover:to-[#709dff] hover:text-white'>
                                <li className='text-sm uppercase'>Home</li>
                            </div>
                            {/* <li className='ml-10 text-sm uppercase hover:border-b hover:mt-[-.05rem]'>Home</li> */}
                        </Link>
                        <Link href='/#about'>
                            <div className='px-5 2xl:px-6 py-2   hover:rounded-xl hover:uppercase hover:bg-gradient-to-r hover:from-[#5651e5] hover:to-[#709dff] hover:text-white'>
                                <li className='text-sm uppercase'>About</li>
                            </div>
                            {/* <li className='ml-10 text-sm uppercase hover:border-b hover:mt-[-.05rem]'>About</li> */}
                        </Link>
                        <Link href='/#skills'>
                            <div className='px-5 2xl:px-6 py-2  hover:rounded-xl hover:uppercase hover:bg-gradient-to-r hover:from-[#5651e5] hover:to-[#709dff] hover:text-white'>
                                <li className='text-sm uppercase'>Skills</li>
                            </div>
                            {/* <li className='ml-10 text-sm uppercase hover:border-b hover:mt-[-.05rem]'>Skills</li> */}
                        </Link>
                        <Link href='/#projects'>
                            <div className='px-5 2xl:px-6 py-2  hover:rounded-xl hover:uppercase hover:bg-gradient-to-r hover:from-[#5651e5] hover:to-[#709dff] hover:text-white'>
                                <li className='text-sm uppercase'>Projects</li>
                            </div>
                            {/* <li className='ml-10 text-sm uppercase hover:border-b hover:mt-[-.05rem]'>Projects</li> */}
                        </Link>
                        <Link href='/assets/Resume.pdf' target='_blank'>
                            <div className='px-5 2xl:px-6 py-2   hover:rounded-xl hover:uppercase hover:bg-gradient-to-r hover:from-[#5651e5] hover:to-[#709dff] hover:text-white'>
                                <li className='text-sm uppercase'>Resume</li>
                            </div>
                            {/* <li className='ml-10 text-sm uppercase hover:border-b hover:mt-[-.05rem]'>Projects</li> */}
                        </Link>
                        <Link href='/#contact'>
                            <div className='px-5 2xl:px-6 py-2  hover:rounded-xl hover:uppercase hover:bg-gradient-to-r hover:from-[#5651e5] hover:to-[#709dff] hover:text-white'>
                                <li className='text-sm uppercase'>Contact</li>
                            </div>
                            {/* <li className='ml-10 text-sm uppercase hover:border-b hover:mt-[-.05rem]'>Contact</li> */}
                        </Link>   
                    </ul>
                    <div onClick={handleNav} style={{color: `${hamburgerIconColor}`}} className='md:hidden'>
                        <AiOutlineMenu size={25} className='cursor-pointer' />
                    </div>
                </div>
            </div>
            <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 ease-out duration-[400ms]' : 'md:hidden fixed left-0 top-0 w-full h-screen invisible ease-in duration-[400ms]'}> {/* 70 is alpha (opacity) */}
                <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 pt-5 ease-out duration-[400ms]' 
                                    : 'fixed left-[-100%] w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] top-0 p-10 ease-in duration-[400ms]'}>
                    <div>
                        <div className='flex w-full items-center justify-between'>                
                            <Link href='/'>
                                <Image src="/assets/logo.png" alt="/" width='87' height='35' /> {/* lazy loading image */}
                            </Link>
                            <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                                <AiOutlineClose size={25} />
                            </div>
                        </div>
                        <div className='border-b border-gray-300 my-4'>
                            <p className='w-[85%] md:w-[90%] py-4'>Let&apos;s build something legendary together</p>
                        </div>
                    </div>
                    <div className='py-2 flex flex-col'>
                        <ul clasName='uppercase'>
                            <Link href='/'>
                                <li onClick={handleNav} className='py-4 text-sm'>Home</li>
                            </Link>
                            <Link href='/#about'>
                                <li onClick={handleNav} className='py-4 text-sm'>About</li>
                            </Link>
                            <Link href='/#skills'>
                                <li onClick={handleNav} className='py-4 text-sm'>Skills</li>
                            </Link>
                            <Link href='/#projects'>
                                <li onClick={handleNav} className='py-4 text-sm'>Projects</li>
                            </Link>
                            <Link href='/assets/Resume.pdf'>
                                <li onClick={handleNav} className='py-4 text-sm'>Resume</li>
                            </Link>
                            <Link href='/#contact'>
                                <li onClick={handleNav} className='py-4 text-sm'>Contact</li>
                            </Link>  
                        </ul>
                        <div className='pt-8'>
                            <p className='uppercase tracking-widest text-[#5651e5]'>Let&apos;s Connect</p>
                            <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                                <a href="http://www.linkedin.com/in/leo-curdi" target='_blank' rel='noreferrer'>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-200'>
                                        <FaLinkedinIn />
                                    </div>
                                </a>
                                <a href="https://github.com/LeoCurdi" target='_blank' rel='noreferrer'>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-200'>
                                        <FaGithub />
                                    </div>
                                </a>
                                <Link href="/#contact">
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-200' onClick={handleNav} >
                                        <AiOutlineMail />
                                    </div>
                                </Link>
                                <a href="/assets/Resume.pdf" rel='noreferrer'>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-200'>
                                        <BsFillPersonLinesFill />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;