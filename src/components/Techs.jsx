import {
  FaJava,
  FaHtml5,
  FaCss3,
  FaReact,
  FaDocker,
  FaNodeJs,
  FaAws,
} from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import {
  SiTypescript,
  SiSpring,
  SiRedis,
  SiGraphql,
  SiMongodb,
  SiPostgresql,
} from 'react-icons/si';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';

const Techs = () => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.8,
        staggerChildren: 0.5,
      },
    },
  };

  const item = (duration) => ({
    animate: {
      y: [10, -10],
      transition: {
        duration,
        ease: 'linear',
        repeat: Infinity,
        repeatType: 'reverse',
      },
    },
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  });

  return (
    <div className='border-b border-neutral-800 pb-20'>
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.8 }}
        className='my-20 text-center text-5xl font-thin'
      >
        Tech Stack
      </motion.h1>
      <motion.div
        variants={container}
        animate='visible'
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className=' flex flex-wrap items-center justify-center gap-12'
      >
        <Tooltip id='html-tooltip' />
        <motion.div
          data-tooltip-id='html-tooltip'
          data-tooltip-content='HTML'
          data-tooltip-place='top'
          variants={item(1)}
          initial='initial'
          animate='animate'
          whileHover={{ scale: 1.2, rotate: 90 }}
          whileTap={{
            scale: 0.8,
            rotate: -90,
            borderRadius: '100%',
          }}
          className='rounded-2xl item border-4 border-neutral-100 p-4'
        >
          <FaHtml5 className='text-6xl text-orange-500' />
        </motion.div>
        <Tooltip id='css-tooltip' />
        <motion.div
          data-tooltip-id='css-tooltip'
          data-tooltip-content='CSS'
          data-tooltip-place='top'
          variants={item(1.5)}
          initial='initial'
          animate='animate'
          whileHover={{ scale: 1.2, rotate: -90 }}
          whileTap={{
            scale: 0.8,
            rotate: -90,
            borderRadius: '100%',
          }}
          className='rounded-2xl item border-4 border-neutral-100 p-4'
        >
          <FaCss3 className='text-6xl text-blue-400' />
        </motion.div>
        <Tooltip id='js-tooltip' />
        <motion.div
          data-tooltip-id='js-tooltip'
          data-tooltip-content='Javascript'
          data-tooltip-place='top'
          variants={item(1.6)}
          initial='initial'
          animate='animate'
          whileHover={{ scale: 1.2, rotate: 90 }}
          whileTap={{
            scale: 0.8,
            rotate: -90,
            borderRadius: '100%',
          }}
          className='rounded-2xl item border-4 border-neutral-100 p-4'
        >
          <IoLogoJavascript className='text-6xl text-yellow-500' />
        </motion.div>
        <Tooltip id='ts-tooltip' />
        <motion.div
          data-tooltip-id='ts-tooltip'
          data-tooltip-content='Typescript'
          data-tooltip-place='top'
          variants={item(1.7)}
          initial='initial'
          animate='animate'
          whileHover={{ scale: 1.2, rotate: -90 }}
          whileTap={{
            scale: 0.8,
            rotate: -90,
            borderRadius: '100%',
          }}
          className='rounded-2xl item border-4 border-neutral-100 p-4'
        >
          <SiTypescript className='text-6xl text-sky-600' />
        </motion.div>
        <motion.div
          data-tooltip-id='nodejs-tooltip'
          data-tooltip-content='Nodejs'
          data-tooltip-place='top'
          variants={item(1.7)}
          initial='initial'
          animate='animate'
          whileHover={{ scale: 1.2, rotate: -90 }}
          whileTap={{
            scale: 0.8,
            rotate: -90,
            borderRadius: '100%',
          }}
          className='rounded-2xl item border-4 border-neutral-100 p-4'
        >
          <FaNodeJs className='text-6xl text-green-700' />
        </motion.div>
        <Tooltip id='nodejs-tooltip' />
        <motion.div
          data-tooltip-id='react-tooltip'
          data-tooltip-content='React'
          data-tooltip-place='top'
          variants={item(1.8)}
          initial='initial'
          animate='animate'
          whileHover={{ scale: 1.2, rotate: 90 }}
          whileTap={{
            scale: 0.8,
            rotate: -90,
            borderRadius: '100%',
          }}
          className='rounded-2xl item border-4 border-neutral-100 p-4'
        >
          <FaReact className='text-6xl text-blue-500' />
        </motion.div>
        <Tooltip id='java-tooltip' />
        <motion.div
          data-tooltip-id='java-tooltip'
          data-tooltip-content='Java'
          data-tooltip-place='top'
          variants={item(1.9)}
          initial='initial'
          animate='animate'
          whileHover={{ scale: 1.2, rotate: -90 }}
          whileTap={{
            scale: 0.8,
            rotate: -90,
            borderRadius: '100%',
          }}
          className='rounded-2xl item border-4 border-neutral-100 p-4'
        >
          <FaJava className='text-6xl text-gray-300' />
        </motion.div>
        <Tooltip id='spring-tooltip' />
        <motion.div
          data-tooltip-id='spring-tooltip'
          data-tooltip-content='Spring'
          data-tooltip-place='top'
          variants={item(2)}
          initial='initial'
          animate='animate'
          whileHover={{ scale: 1.2, rotate: 90 }}
          whileTap={{
            scale: 0.8,
            rotate: -90,
            borderRadius: '100%',
          }}
          className='rounded-2xl item border-4 border-neutral-100 p-4'
        >
          <SiSpring className='text-6xl text-green-600' />
        </motion.div>
        <Tooltip id='graphql-tooltip' />
        <motion.div
          data-tooltip-id='graphql-tooltip'
          data-tooltip-content='GraphQL'
          data-tooltip-place='top'
          variants={item(2.1)}
          initial='initial'
          animate='animate'
          whileHover={{ scale: 1.2, rotate: -90 }}
          whileTap={{
            scale: 0.8,
            rotate: -90,
            borderRadius: '100%',
          }}
          className='rounded-2xl item border-4 border-neutral-100 p-4'
        >
          <SiGraphql className='text-6xl text-pink-700' />
        </motion.div>
        <Tooltip id='redis-tooltip' />
        <motion.div
          data-tooltip-id='redis-tooltip'
          data-tooltip-content='Redis'
          data-tooltip-place='top'
          variants={item(2.2)}
          initial='initial'
          animate='animate'
          whileHover={{ scale: 1.2, rotate: 90 }}
          whileTap={{
            scale: 0.8,
            rotate: -90,
            borderRadius: '100%',
          }}
          className='rounded-2xl item border-4 border-neutral-100 p-4'
        >
          <SiRedis className='text-6xl text-red-600' />
        </motion.div>
        <Tooltip id='docker-tooltip' />
        <motion.div
          data-tooltip-id='docker-tooltip'
          data-tooltip-content='Docker'
          data-tooltip-place='top'
          variants={item(2.3)}
          initial='initial'
          animate='animate'
          whileHover={{ scale: 1.2, rotate: -90 }}
          whileTap={{
            scale: 0.8,
            rotate: -90,
            borderRadius: '100%',
          }}
          className='rounded-2xl item border-4 border-neutral-100 p-4'
        >
          <FaDocker className='text-6xl text-blue-800' />
        </motion.div>
        <motion.div
          data-tooltip-id='aws-tooltip'
          data-tooltip-content='AWS'
          data-tooltip-place='top'
          variants={item(1.7)}
          initial='initial'
          animate='animate'
          whileHover={{ scale: 1.2, rotate: -90 }}
          whileTap={{
            scale: 0.8,
            rotate: -90,
            borderRadius: '100%',
          }}
          className='rounded-2xl item border-4 border-neutral-100 p-4'
        >
          <FaAws className='text-6xl text-orange-300' />
        </motion.div>
        <Tooltip id='aws-tooltip' />
        <motion.div
          data-tooltip-id='mongo-tooltip'
          data-tooltip-content='MongoDB'
          data-tooltip-place='top'
          variants={item(2.4)}
          initial='initial'
          animate='animate'
          whileHover={{ scale: 1.2, rotate: 90 }}
          whileTap={{
            scale: 0.8,
            rotate: -90,
            borderRadius: '100%',
          }}
          className='rounded-2xl item border-4 border-neutral-100 p-4'
        >
          <SiMongodb className='text-6xl text-green-800' />
        </motion.div>
        <Tooltip id='postgres-tooltip' />
        <motion.div
          data-tooltip-id='postgres-tooltip'
          data-tooltip-content='PostgreSQL'
          data-tooltip-place='top'
          variants={item(2.5)}
          initial='initial'
          animate='animate'
          whileHover={{ scale: 1.2, rotate: -90 }}
          whileTap={{
            scale: 0.8,
            rotate: -90,
            borderRadius: '100%',
          }}
          className='rounded-2xl item border-4 border-neutral-100 p-4'
        >
          <SiPostgresql className='text-6xl text-gray-400' />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Techs;
