/* eslint-disable react/prop-types */
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { primeList } from '../constants';

import { SectionWrapper } from '../hoc';
import { fadeIn } from '../utils/motion';

const PrimeCards = ({ url, content, index }) => (
  <motion.article
    className='w-full h-full'
    variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
  >
    <Tilt
      options={{
        max: 50,
        scale: 1.2,
        speed: 500,
      }}
      className='relative min-h-[165px] w-full min-w-[165px] flex-1 overflow-clip rounded-[10px] shadow-card xs:mx-auto md:max-w-[257px] xl:max-w-none'
    >
      <div className={`w-full bg-white pb-[100%]`} />
      <div className='absolute top-1/2 flex w-full -translate-y-1/2 flex-col items-center gap-[15px] px-[13px] py-[43px]'>
        <div className='h-[60px] flex-1 md:h-[80px]'>
          <img
            src={url}
            className='h-full w-full'
            alt=''
          />
        </div>
        <p className='w-[150px] max-w-[230px] text-[16px] font-medium md:text-[20px] xl:text-[24px]'>{content}</p>
      </div>
    </Tilt>
  </motion.article>
);

const Prime = () => {
  return (
    <>
      <div className='w-full text-center'>
        <h2 className='text-[25px] font-bold md:text-[35px] xl:text-[50px]'>Program Unggulan</h2>
      </div>

      <div className='mt-[65px] flex flex-wrap justify-between text-center'>
        <p className='x:text-[24px] w-full grow text-[16px] font-medium md:text-[20px] xl:mx-[17px]'>Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>

        <div className='mt-[45px] grid w-full place-items-center gap-10 xs:grid-cols-2 xs:gap-14 md:gap-[95px] xl:grid-cols-4 xl:gap-[57px]'>
          {primeList.map((item, index) => (
            <PrimeCards
              key={index}
              index={index}
              {...item}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Prime, { idName: 'program', className: '' });
