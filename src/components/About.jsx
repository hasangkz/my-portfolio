import { ABOUT_ME } from '../constants/index';
import me from '../assets/me.jpg';
const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 '>
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-1/2'>
          <div className='flex flex-col items-center lg:items-start'>
            <h1 className='pb-16 text-6xl font-semibold tracking-tight mt-20 lg:text-8xl'>
              Hasan Gokgoz
            </h1>
            <span className='bg-gradient-to-r from-purple-300 via-slate-500 to-purple-900 bg-clip-text text-4xl tracking-tight text-transparent'>
              Full Stack Developer
            </span>
            <p className='my-4 max-w-xl py-8 font-light'>{ABOUT_ME}</p>
          </div>
        </div>
        <div className='w-full lg:w-1/2 lg:p-8 mt-10'>
          <div className='flex justify-center '>
            <img src={me} alt='Hasan Gokgoz' className='rounded-xl p-5' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
