import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import { FaDownload } from "react-icons/fa";

function About() {

    const [education, setEducation] = useState([]);
    const [experience, setExperience] = useState([]);

    useEffect(() => {
        fetch('./data/data.json')
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Failed to fetch data');
                }
                return res.json();
            })
            .then((data) => {

                setEducation(data.education);
                setExperience(data.experience);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });

    }, []);
    return (
        <section id='about' className='min-h-auto flex items-center justify-center py-20 px-4'>
            <motion.div
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2}}
                className='w-full max-w-6xl mx-auto'
            >
                <h2 className='text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-center'>
                    About Me
                </h2>

                <div className='p-6 md:p-8 rounded-xl border border-white/20 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition'>
                    <div className='flex flex-col md:flex-row items-center md:items-start gap-8'>
                        <div className='flex-1'>
                            <p className='text-gray-300 mb-6 text-base sm:text-lg'>
                                I am a recent graduate in Computer Engineering with a solid foundation in backend development, databases, and cybersecurity. I am proficient in Java, C#, SQL, and Python, and have hands-on experience with technologies such as .NET, Spring Boot, and Microservices. I am passionate about creating scalable software solutions and continuously improving my technical skills to stay ahead in the industry.
                            </p>

                            <a
                                href="./assets/OzgurKurdoglu.pdf"
                                download
                                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-200 text-gray-800 hover:text-indigo-500 hover:bg-gray-300 transition-all duration-300 transform hover:scale-105 rounded-lg mt-8 text-lg"
                            >
                                <FaDownload className="text-xl" /> CV
                            </a>
                        </div>

                        <div className='w-50 max-w-xs h-70 rounded-xl overflow-hidden border border-indigo-500 transition-all duration-300 transform hover:scale-105 shadow-md flex-shrink-0'>
                            <img
                                src='./assets/img/ozgur.jpg'
                                alt='Özgür Kurdoğlu'
                                className='w-full h-full object-cover'
                            />
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-5'>
                    <div className='p-6 rounded-xl border border-white/20 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition'>
                        <h3 className='text-xl font-bold mb-6'>Education</h3>
                        {education.map((item, index) => (
                            <div key={index} className='flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-6'>
                                <img src={item.imgSrc} className='w-20 h-20 rounded-full' />
                                <div className='text-white'>
                                    <h4 className='text-lg font-semibold'>{item.degree} - {item.institution}</h4>
                                    <p className='text-gray-400'>{item.duration}</p>
                                    <p className='text-gray-500'>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className='p-6 rounded-xl border border-white/20 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition'>
                        <h3 className='text-xl font-bold mb-6'>Work</h3>
                        <div className='space-y-6 text-gray-300'>
                            {experience.map((item, index) => (
                                <div key={index} className='flex flex-col sm:flex-row items-center sm:items-start gap-4'>
                                    <img src={item.imgSrc} className='w-20 h-20 rounded-lg' />
                                    <div>
                                        <h4 className='font-semibold'>{item.position} at {item.company}</h4>
                                        <p className='text-gray-400'>{item.duration}</p>
                                        <p className='text-gray-500'>{item.description}</p>
                                        <div className='flex flex-wrap gap-2 mt-2'>
                                            {item.technologies.map((tech, key) => (
                                                <span
                                                    key={key}
                                                    className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition'
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>

    )
}

export default About