const Footer = () => {
  return (
    <footer className='border-b border-neutral-900 w-full font-medium text-lg'>
      <div className='py-4 flex items-center justify-between'>
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
        <div>
          <span>Build by </span>
          <span className='text-1xl px-1 text-fuchsia-400'> &#9825;</span>
          <span className='underline underline-offset-2'>hasangkz</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
