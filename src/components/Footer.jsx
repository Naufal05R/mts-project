import { logo } from '../assets';
import { footerList } from '../constants';

const Footer = () => {
  return (
    <footer className='relative mx-auto w-full text-white bg-black/40 pt-10 md:px-10 px-6 pb-[22px]'>
      <article className='flex justify-between gap-10 items-start flex-wrap'>
        <a
          className='flex gap-[15px] max-lg:w-full items-center flex-wrap whitespace-nowrap'
          href='#'
        >
          <img
            src={logo}
            alt=''
          />
          <span className='font-semibold text-[18px] md:text-[26px] xl:text-[32px]'>MA. Sirojul Falah</span>
        </a>
        {footerList.map((item, index) => (
          <div
            className='flex flex-col lg:max-w-[182px] xl:max-w-[378px] gap-[30px]'
            key={index}
          >
            <h6 className='sm:text-[18px] xl:text-[22px] font-semibold'>{item.title}</h6>
            <div className='sm:text-[14px] xl:text-[18px] font-medium space-y-[18px]'>
              {item.body.map((item, index) => (
                <a
                  href='/'
                  className='block hover:underline hover:text-primary transition-all duration-300 ease-in-out'
                  key={index}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        ))}
      </article>
      <div className='border-t border-white text-white/60 text-center pt-[15px] mt-[85px] font-normal text-[14px]'>
        <p>Copyright &copy; 2023 All rights reserved | IDN Boarding School Student</p>
      </div>
    </footer>
  );
};

export default Footer;
