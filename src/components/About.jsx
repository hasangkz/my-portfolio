import { ABOUT_ME } from '../constants/index';
import { motion } from 'framer-motion';
import { BsDownload } from 'react-icons/bs';
import { Button } from '@chakra-ui/react';

const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <div className='flex flex-wrap'>
        <div className='w-full'>
          <div className='flex flex-col items-center'>
            <motion.h1
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.8 }}
              animate='visible'
              className='pb-16 font-thin text-6xl tracking-tight mt-10 lg:text-8xl'
            >
              Hasan Gokgoz
            </motion.h1>
            <motion.span
              animate='visible'
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className='text-red-500 text-4xl tracking-tight'
            >
              Software Developer
            </motion.span>
            <motion.p
              animate='visible'
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1.2 }}
              className='w-full py-8 font-light text-lg text-center whitespace-pre-line'
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
                className='download-button bg-gray-800'
                rightIcon={<BsDownload />}
                loadingText='Downloading...'
                size='lg'
                type='submit'
                variant='solid'
              >
                <a
                  href='https://drive.google.com/file/d/1ZEv9W54tUAYMf3jB2tCihReIkq86DI8I/view?usp=sharing'
                  download={
                    'https://drive.google.com/file/d/1ZEv9W54tUAYMf3jB2tCihReIkq86DI8I/view?usp=sharing'
                  }
                  target='_blank'
                >
                  My Resume
                </a>
              </Button>
            </motion.div>
            <br />
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default About;
