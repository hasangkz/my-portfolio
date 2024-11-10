import { motion } from 'framer-motion';
import { DOCUMENTS } from '../constants/index';

const Documents = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.8 }}
        className='my-20  text-center text-5xl font-thin'
      >
        My Articles
      </motion.h1>

      <div className='container mx-auto py-10'>
        <div className='grid grid-cols-2 gap-6'>
          {DOCUMENTS.map((doc) => (
            <div
              key={doc.id}
              className='mb-24 p-6 bg-gray-800 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-gray-700'
            >
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className='w-full'
              >
                <h2 className='text-xl font-semibold text-white mb-2'>
                  {doc.title}
                </h2>
                <p className='text-gray-400 mb-4'>{doc.description}</p>
                <a
                  href={doc.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-red-500 hover:underline'
                >
                  Read More
                </a>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      <div />
    </div>
  );
};

export default Documents;
