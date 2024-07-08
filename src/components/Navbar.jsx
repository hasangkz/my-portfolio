import logo from '../assets/logo.png';
import { CONTACT } from '../constants/index';
import {
  FaLinkedinIn,
  FaGithub,
  FaMedium,
  FaStackOverflow,
} from 'react-icons/fa';

const Navbar = () => {
  const handleRedirect = (value) => {
    switch (value) {
      case 'linkedin':
        window.open(CONTACT.linkedin, '_blank');

        break;
      case 'github':
        window.open(CONTACT.github, '_blank');

        break;
      case 'medium':
        window.open(CONTACT.medium, '_blank');

        break;
      case 'stackOverflow':
        window.open(CONTACT.stackOverflow, '_blank');

        break;

      default:
        break;
    }
  };

  return (
    <nav className='flex items-center justify-between py-1'>
      <div className='flex flex-shrink-0 items-center'>
        <img src={logo} alt='logo' className='w-20 h-20' />
      </div>
      <div className='m-4 flex items-center justify-center gap-4 text-2xl'>
        <FaLinkedinIn
          color='gray'
          cursor={'pointer'}
          onClick={() => handleRedirect('linkedin')}
        />
        <FaGithub
          color='gray'
          cursor={'pointer'}
          onClick={() => handleRedirect('github')}
        />
        <FaMedium
          color='gray'
          cursor={'pointer'}
          onClick={() => handleRedirect('medium')}
        />
        <FaStackOverflow
          color='gray'
          cursor={'pointer'}
          onClick={() => handleRedirect('stackOverflow')}
        />
      </div>
    </nav>
  );
};

export default Navbar;
