import { FaJava, FaHtml5, FaCss3, FaReact, FaDocker } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import {
  SiTypescript,
  SiSpring,
  SiRedis,
  SiGraphql,
  SiMongodb,
  SiPostgresql,
} from 'react-icons/si';

const Techs = () => {
  return (
    <div className='border-b border-neutral-800 pb-20'>
      <h1 className='my-20 text-center text-5xl font-thin'>Tech Stack</h1>
      <div className='flex flex-wrap items-center justify-center gap-12'>
        <div className='rounded-2xl border-4 border-neutral-100 p-4'>
          <FaHtml5 className='text-6xl text-orange-500' />
        </div>
        <div className='rounded-2xl border-4 border-neutral-100 p-4'>
          <FaCss3 className='text-6xl text-blue-400' />
        </div>
        <div className='rounded-2xl border-4 border-neutral-100 p-4'>
          <IoLogoJavascript className='text-6xl text-yellow-500' />
        </div>
        <div className='rounded-2xl border-4 border-neutral-100 p-4'>
          <SiTypescript className='text-6xl text-sky-600' />
        </div>
        <div className='rounded-2xl border-4 border-neutral-100 p-4'>
          <FaReact className='text-6xl text-blue-500' />
        </div>
        <div className='rounded-2xl border-4 border-neutral-100 p-4'>
          <FaJava className='text-6xl text-gray-300' />
        </div>
        <div className='rounded-2xl border-4 border-neutral-100 p-4'>
          <SiSpring className='text-6xl text-green-600' />
        </div>
        <div className='rounded-2xl border-4 border-neutral-100 p-4'>
          <SiGraphql className='text-6xl text-pink-700' />
        </div>
        <div className='rounded-2xl border-4 border-neutral-100 p-4'>
          <SiRedis className='text-6xl text-red-600' />
        </div>
        <div className='rounded-2xl border-4 border-neutral-100 p-4'>
          <FaDocker className='text-6xl text-blue-800' />
        </div>
        <div className='rounded-2xl border-4 border-neutral-100 p-4'>
          <SiMongodb className='text-6xl text-green-800' />
        </div>
        <div className='rounded-2xl border-4 border-neutral-100 p-4'>
          <SiPostgresql className='text-6xl text-gray-400' />
        </div>
      </div>
    </div>
  );
};

export default Techs;
