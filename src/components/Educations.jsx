import { EDUCATION, EDUCATION_CS50 } from '../constants/index';
import { motion } from 'framer-motion';
const Educations = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.8 }}
        className='my-20 text-center text-5xl font-thin'
      >
        Education
      </motion.h1>
      <motion.div>
        <div className='mb-20 flex flex-wrap lg:justify-center'>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className='w-full lg:w-1/4'
          >
            <p className='mb-2 text-base text-neutral-400'>2020-2024</p>
            <span className='text-m text-neutral-600'>
              Bachelor&apos;s degree
            </span>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className='w-full max-w-xl lg:w-3/4'
          >
            <h6 className='mb-2 font-semibold'>Computer Engineering</h6>
            <p className='mb-6 text-neutral-400 text-lg'>{EDUCATION}</p>
          </motion.div>
        </div>
        <div className='mb-10 flex flex-wrap lg:justify-center'>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className='w-full lg:w-1/4'
          >
            <p className='mb-2 text-base text-neutral-400 '>2022-2023</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className='w-full max-w-xl lg:w-3/4'
          >
            <h6 className='mb-2 font-semibold'>
              CS50: Introduction to Computer Science
            </h6>
            <p className='mb-6 text-neutral-400 text-lg'>{EDUCATION_CS50}</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Educations;
