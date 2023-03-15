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
    useEffect(() => {
        if (!(router.asPath === '/' || router.asPath === '/#about' || router.asPath === '/#skills' || router.asPath === '/#projects' || router.asPath === '/#contact'))/* (router.asPath === '/sortingVisualizer' || router.asPath === '/cosmicClash' || router.asPath === '/matrix' || router.asPath === '/nasa' || router.asPath === '/physics' || router.asPath === '/math') */ {
            // if we're on a project page. we still want the nav bar to be opaque if the user scrolls down a project page
            const handleShadow = () => {
                if (window.scrollY >= 90) {
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
            window.addEventListener('scroll', handleShadow);
        }
        else {
            // if were anywhere on the main page
            setShadow(true);
            setNavBg('#ecf0f3')
            setLinkColor('#1f2937')
            setHamburgerIconColor('#1f2937')
        }
    }, [router])

    const handleNav = () => {
        setNav(!nav) /* switch */
    }

    return (
        <div style={{backgroundColor: `${navBg}`}} className={shadow ? 'fixed w-full h-20 shadow-xl z-[100]' : 'fixed w-full h-20 z-[100]'}> {/* the brackets lets you choose your own value instead of being confined to tailwind's pre set intervals */}
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                <Link href='/'>
                    <Image src="/assets/logo.png" alt="/" width='125' height='50' /> {/* lazy loading image */}
                </Link>
                <div>
                    <ul style={{color: `${linkColor}`}} className='hidden md:flex'> {/* tailwind is mobile first, so this is saying: hide nav items on mobile, and display them as flex on anything above medium screen size */}
                        <Link href='/'>
                            <li className='ml-10 text-sm uppercase hover:border-b hover:mt-[-.05rem]'>Home</li>
                        </Link>
                        <Link href='/#about'>
                            <li className='ml-10 text-sm uppercase hover:border-b hover:mt-[-.05rem]'>About</li>
                        </Link>
                        <Link href='/#skills'>
                            <li className='ml-10 text-sm uppercase hover:border-b hover:mt-[-.05rem]'>Skills</li>
                        </Link>
                        <Link href='/#projects'>
                            <li className='ml-10 text-sm uppercase hover:border-b hover:mt-[-.05rem]'>Projects</li>
                        </Link>
                        <Link href='/#contact'>
                            <li className='ml-10 text-sm uppercase hover:border-b hover:mt-[-.05rem]'>Contact</li>
                        </Link>   
                    </ul>
                    <div onClick={handleNav} style={{color: `${hamburgerIconColor}`}} className='md:hidden'>
                        <AiOutlineMenu size={25} className='cursor-pointer' />
                    </div>
                </div>
            </div>
            <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 ease-out duration-300' : ''}> {/* 70 is alpha (opacity) */}
                <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-out duration-[300ms]' 
                                    : 'fixed left-[-100%] top-0 p-10 ease-in duration-[300ms]'}>
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
                    <div className='py-4 flex flex-col'>
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
                            <Link href='/#contact'>
                                <li onClick={handleNav} className='py-4 text-sm'>Contact</li>
                            </Link>  
                        </ul>
                        <div className='pt-16'>
                            <p className='uppercase tracking-widest text-[#5651e5]'>Let&apos;s Connect</p>
                            <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <FaLinkedinIn />
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <FaGithub />
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <AiOutlineMail />
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <BsFillPersonLinesFill />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;