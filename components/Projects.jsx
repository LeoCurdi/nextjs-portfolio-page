import Image from 'next/image'
import React, {useState} from 'react'
import yelpSkiImg from '../public/assets/project-images/yelpSki1-Copy.png'
import sortingVisualizerImg from '../public/assets/project-images/sortingVisualizer.png'
import cosmicClashImg from '../public/assets/project-images/cosmicClash.png'
import matrixImg from '../public/assets/project-images/matrix.png'
import nasaImg from '../public/assets/project-images/nasa.png'
import physicsImg from '../public/assets/project-images/physics.png'
import mathImg from '../public/assets/project-images/mandelbrot.jpg'
import Link from 'next/link'
import {AiOutlineClose, AiOutlineMenu, AiOutlineMail} from 'react-icons/ai'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import ProjectItem from './ProjectItem'


const Projects = () => {
    return (
        <div id='projects' className='w-full'> {/* parent container for projects */}
            <div className='max-w-[1240px] pt-32 mx-auto px-2'>
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
                <h2 className='py-4'>What I&apos;ve Built</h2>
                <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                    <ProjectItem title='YelpSki' backgroundImg={yelpSkiImg} projectUrl='/yelpSki' tech='NodeJS' />
                    <ProjectItem title='Sorting Visualizer' backgroundImg={sortingVisualizerImg} projectUrl='/sortingVisualizer' tech='Javascript' />
                    <ProjectItem title='Cosmic Clash' backgroundImg={cosmicClashImg} projectUrl='/cosmicClash' tech='Javascript' />
                    <ProjectItem title='Matrix Screensaver' backgroundImg={matrixImg} projectUrl='/matrix' tech='Python' />
                    <ProjectItem title='Nasa Photo of the Day' backgroundImg={nasaImg} projectUrl='/nasa' tech='Javascript' />
                    <ProjectItem title='Physics Simulator' backgroundImg={physicsImg} projectUrl='/physics' tech='Matter JS' />
                    <ProjectItem title='Math Visualizations' backgroundImg={mathImg} projectUrl='/math' tech='Javascript' />
                </div>
            </div>
        </div>
    );
};

export default Projects;