const Footer = () => {
  return (
    <footer className='w-full font-medium text-lg'>
      <div className='py-4 flex items-center justify-between'>
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
        <div>
          <span>Build by </span>
          <span className='underline underline-offset-2 text-red-500'>
            hasangkz
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
