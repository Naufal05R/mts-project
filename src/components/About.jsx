import { motion } from 'framer-motion';

import { SectionWrapper } from '../hoc';
import { objectVariants, staggerContainer, textVariant, zoomIn } from '../utils';

const About = () => {
  return (
    <div className='relative mx-auto w-full'>
      <div className='w-full text-center'>
        <h2 className='text-[25px] font-bold md:text-[35px] xl:text-[50px]'>Tentang Kami</h2>
      </div>

      <motion.div
        className='mt-[65px] flex flex-col  flex-wrap justify-between gap-[35px] md:flex-row'
        variants={staggerContainer()}
      >
        <motion.article
          className='mr-10 w-full flex-1 max-md:grid max-md:pb-[66.666%] md:min-h-[300px] md:w-6/12'
          variants={objectVariants('left')}
        >
          <div className='absolute left-1/2 top-1/2 h-[90%] w-[90%] -translate-x-1/2 -translate-y-1/2 overflow-clip rounded-[10px]'>
            <img
              className='h-full w-full object-cover object-center'
              src=''
              alt=''
            />
          </div>
        </motion.article>

        <div className='md:min-w-5/12 flex max-w-full flex-1 flex-col gap-[25px]'>
          <motion.p variants={textVariant(1)} className='w-full grow text-justify text-[16px] font-medium md:text-[20px] xl:text-[24px]'>Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</motion.p>
          <motion.button variants={zoomIn(0.75, 0.25)} className='w-fit rounded-[6px] bg-primary px-[15px] py-2 text-[12px] font-semibold transition duration-500 hover:bg-black hover:text-primary md:px-5 md:py-[10px] md:text-[16px] xl:px-[30px] xl:py-5 xl:text-[20px]'>Lihat Selengkapnya</motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(About, { idName: 'profile', className: '' });
