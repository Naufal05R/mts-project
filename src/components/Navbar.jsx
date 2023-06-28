import { useState } from 'react';

import { navLinks } from '../constants';
import { logo } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('Home');
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='relative text-white'>
      <div className={`z-10 w-full bg-black/40 px-[25px] py-[10px] xl:px-9`}>
        <div className='flex items-center justify-between'>
          <a
            href='#'
            className='text-title-navbar inline-flex items-center'
            onClick={() => {
              setActive('');
              window.scroll(0, 0);
            }}
          >
            <div className='mr-[15px] h-12 w-12'>
              <img
                src={logo}
                alt=''
                className='h-full w-full'
              />
            </div>
            MA. Sirojul Falah
          </a>
          <ul className='hidden list-none flex-row gap-9 text-[22px] font-semibold sm:flex'>
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${active === link.title ? 'border-b-[3px]' : 'text-white'} cursor-pointer border-primary text-[18px] font-medium hover:text-white`}
                onClick={() => {
                  setActive(link.title);
                }}
              >
                <a href={`#${link.id}`}>{`${link.title}`}</a>
              </li>
            ))}
          </ul>

          <div
            className='flex h-8 flex-col items-center justify-between p-[3.5px] sm:hidden'
            onClick={() => setToggle(!toggle)}
          >
            <span className={`w-8 origin-top-right rounded-full border-2 border-white transition-all duration-500 ${toggle && '-rotate-45'}`} />
            <span className={`w-8 rounded-full border-2 border-white transition-all duration-500 ${toggle && 'scale-0'}`} />
            <span className={`w-8 origin-bottom-right rounded-full border-2 border-white transition-all duration-500 ${toggle && 'rotate-45'}`} />
          </div>
        </div>
      </div>
      <div className={`${toggle ? 'flex' : 'hidden'} shadow-card-xs absolute right-0 top-20 z-20 mx-4 my-2 min-w-[140px] rounded-xl border-b border-l border-neutral-100 bg-black/40 p-6`}>
        <ul className='flex list-none flex-col items-start justify-end gap-4'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.title ? 'border-b-[3px]' : 'text-white'} cursor-pointer border-primary text-[18px] font-medium hover:text-white`}
              onClick={() => {
                setToggle(!toggle);
                setActive(link.title);
              }}
            >
              <a href={`#${link.id}`}>{`${link.title}`}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
