import { ABOUT_ME } from '../constants/index';
import me from '../assets/me.jpg';
import { motion } from 'framer-motion';
import { BsDownload } from 'react-icons/bs';
import { Button } from '@chakra-ui/react';

const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 '>
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-1/2'>
          <div className='flex flex-col items-center lg:items-start'>
            <motion.h1
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.8 }}
              animate='visible'
              className='pb-16 font-thin text-6xl tracking-tight mt-20 lg:text-8xl'
            >
              Hasan Gokgoz
            </motion.h1>
            <motion.span
              animate='visible'
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className='bg-gradient-to-r from-purple-300 via-slate-500 to-purple-900 bg-clip-text text-4xl tracking-tight text-transparent'
            >
              Software Developer
            </motion.span>
            <motion.p
              animate='visible'
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1.2 }}
              className='my-4 max-w-xl py-8 font-light'
            >
              {ABOUT_ME}
            </motion.p>

            <motion.div
              animate='visible'
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1.4 }}
              className='flex items-center justify-center align-middle'
            >
              <Button
                className='download-button'
                rightIcon={<BsDownload />}
                loadingText='Downloading...'
                size='lg'
                type='submit'
                colorScheme='pink'
                variant='solid'
              >
                <a
                  href='https://drive.google.com/file/d/1JlXGTegldv6JTJ-4zIGhG8nKwI2ZNmlY/view?usp=sharing'
                  download={
                    'https://drive.google.com/file/d/1JlXGTegldv6JTJ-4zIGhG8nKwI2ZNmlY/view?usp=sharing'
                  }
                  target='_blank'
                >
                  Download CV
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
        <div className='w-full lg:w-1/2 lg:p-8 mt-10'>
          <div className='flex justify-center '>
            <motion.img
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1.6 }}
              animate='visible'
              src={me}
              alt='Hasan Gokgoz'
              className='p-5'
              style={{ borderRadius: '3rem' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
