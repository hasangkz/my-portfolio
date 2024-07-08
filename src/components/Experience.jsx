import { EXPERIENCES } from '../constants/index';
const Experience = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <h1 className='my-20 text-center text-5xl font-thin'>Experience</h1>
      <div>
        {EXPERIENCES.map((item, index) => (
          <div key={index} className='mb-10 flex flex-wrap lg:justify-center'>
            <div className='w-full lg:w-1/4'>
              <p className='mb-2 text-sm text-neutral-400'>{item.year}</p>
            </div>
            <div className='w-full max-w-xl lg:w-3/4'>
              <h6 className='mb-2 font-semibold'>
                {item.role} <span className='text-sm text-neutral-600'>/</span>{' '}
                <span className='text-sm text-red-500'>{item.company}</span>
              </h6>
              <p className='mb-6 text-neutral-400'>{item.description}</p>
              {item.technologies.map((tech, index) => (
                <span
                  className='mr-4 rounded bg-neutral-300 px-2 py-1 text-sm font-bold text-purple-600'
                  key={index}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
