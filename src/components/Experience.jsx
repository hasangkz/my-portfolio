import { EXPERIENCES } from '../constants/index';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.8 }}
        className='my-20 text-center text-5xl font-thin'
      >
        Experience
      </motion.h1>
      <div>
        {EXPERIENCES.map((item, index) => (
          <div key={index} className='mb-24 flex flex-wrap lg:justify-center'>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className='w-full lg:w-1/4'
            >
              <p className='mb-2 text-base text-neutral-400'>{item.year}</p>
              <span className='text-m text-neutral-600'>{item.location}</span>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className='w-full max-w-xl lg:w-3/4'
            >
              <h6 className='mb-2 font-semibold'>
                {item.role}{' '}
                <span className='text-base text-neutral-600'>/</span>{' '}
                <span className='text-base text-red-500'>{item.company}</span>
              </h6>
              <p className='mb-6 text-neutral-400 text-lg'>
                {item.description}
              </p>
              <div className='flex flex-wrap gap-4'>
                {item.technologies.map((tech, index) => (
                  <span
                    className='rounded bg-neutral-300 px-2 py-1 text-base font-bold text-purple-600'
                    key={index}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
