import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'


export default function Home() {
    return (
        <section id='home' className='min-h-screen flex items-center justify-center relative px-4'>
            <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.5 }}
                className='text-center z-10 w-full max-w-4xl'
            >
                <h1 className='text-4xl sm:text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-700 bg-clip-text text-transparent leading-snug'>
                    Hi, I'm Özgür Kurdoğlu
                </h1>

                <h2 className='text-2xl sm:text-4xl font-semibold bg-gradient-to-l from-blue-600 to-purple-700 bg-clip-text text-transparent mb-10 max-w-xl mx-auto'>
                    Jr. Software Developer
                </h2>

                <div className='flex flex-col sm:flex-row justify-center items-center gap-4'>
                    <a
                        href='#projects'
                        className='bg-indigo-500 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-white hover:text-indigo-500'
                    >
                        View Projects
                    </a>

                    <a
                        href='#contact'
                        className='border border-blue-500/50 bg-gray-200 text-indigo-500 py-3 px-6 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:bg-indigo-500 hover:text-white hover:shadow-lg'
                    >
                        Contact Me
                    </a>
                </div>
            </motion.div>
        </section>

    )
}
