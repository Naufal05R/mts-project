import { motion } from 'framer-motion';

import { staggerContainer } from '../utils';

const SectionWrapper = (Component, { idName, className }) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`px-[25px] md:px-10 ${className} relative z-0 mx-auto mt-6 overflow-x-clip sm:mt-12 lg:mt-20`}
      >
        <span
          className='hash-span'
          id={idName}
        >
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
