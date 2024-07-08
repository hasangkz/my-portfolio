import { FaLocationArrow } from 'react-icons/fa';
import { PROJECTS } from '../constants/index';
import { Container } from './3d-pin';
import { Button } from '@chakra-ui/react';
import { motion } from 'framer-motion';
const Projects = () => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const handleProject = (link) => {
    window.open(link, '_blank');
  };

  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.8 }}
        className='my-20 text-center text-5xl font-thin'
      >
        A small selection of{' '}
        <span className='text-purple-400'>recent projects</span>{' '}
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        variants={container}
        initial='hidden'
        animate='visible'
        className='container flex flex-wrap items-center justify-center p-6 gap-x-24 gap-y-6 my-20'
      >
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            variants={item}
            className='item lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]'
          >
            <Container title={project.link} href={project.link}>
              <div className='relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10'>
                <img
                  src={project.image}
                  alt={project.title}
                  className='z-10 absolute bottom-0 '
                />
              </div>
              <h1 className='font-bold text-base line-clamp-1 lg:text-2xl md:text-xl'>
                {project.title}
              </h1>

              <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-4 text-neutral-400'>
                {project.description}
              </p>
              <div className='flex items-center justify-between mt-6 mb-4'>
                <div className='flex items-center gap-5'>
                  {project.technologies.map((icon, index) => (
                    <div
                      key={icon}
                      className='border border-white/[0.2] rounded-full bg-white  lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center'
                      style={{ transform: `translateX(-${5 * index * 2}px)` }}
                    >
                      <img src={icon} alt='icon' className='p-2' />
                    </div>
                  ))}
                </div>

                <div className='flex justify-center items-center'>
                  <Button
                    className='flex lg:text-xl md:text-xs text-sm text-purple-500'
                    onClick={() => handleProject(project.link)}
                  >
                    Check Github
                  </Button>
                  <FaLocationArrow className='ms-2' color='#CBACF9' />
                </div>
              </div>
            </Container>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
