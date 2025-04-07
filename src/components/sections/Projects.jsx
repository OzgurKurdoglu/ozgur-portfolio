import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('./data/data.json')
            .then((res) => res.json())
            .then((data) => setProjects(data.projects));
    }, []);

    return (
        <section id='projects' className='min-h-screen flex items-center justify-center py-20'>
            <motion.div
                variants={fadeIn("left", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }} className='max-w-5xl mx-auto px-4'>
                <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-center'>
                    Featured Projects
                </h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {projects.map((project, index) => (
                        <a key={index} href={project.github} target='_blank' rel='noopener noreferrer' className='p-6 rounded-xl border border-white/20 transition-transform transform hover:scale-105 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] '>
                            <h3 className='text-xl font-bold mb-2'>{project.title}</h3>
                            <p className='text-gray-400 mb-4'>{project.description}</p>
                            <div className='flex flex-wrap gap-4 mb-2'>
                                {project.technologies.map((tech, key) => (
                                    <span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm'>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </a>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}

export default Projects;
