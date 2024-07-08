import { EDUCATION, EDUCATION_CS50 } from '../constants/index';
const Educations = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <h1 className='my-20 text-center text-5xl font-thin'>Education</h1>
      <div>
        <div className='mb-10 flex flex-wrap lg:justify-center'>
          <div className='w-full lg:w-1/4'>
            <p className='mb-2 text-sm text-neutral-400'>2020-2024</p>
          </div>
          <div className='w-full max-w-xl lg:w-3/4'>
            <h6 className='mb-2 font-semibold'>Computer Engineering</h6>
            <p className='mb-6 text-neutral-400'>{EDUCATION}</p>
          </div>
        </div>
        <div className='mb-10 flex flex-wrap lg:justify-center'>
          <div className='w-full lg:w-1/4'>
            <p className='mb-2 text-sm text-neutral-400'>2022-2023</p>
          </div>
          <div className='w-full max-w-xl lg:w-3/4'>
            <h6 className='mb-2 font-semibold'>
              CS50: Introduction to Computer Science
            </h6>
            <p className='mb-6 text-neutral-400'>{EDUCATION_CS50}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Educations;
