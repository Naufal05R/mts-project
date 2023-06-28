import { herobg } from '../assets';
import { heroParagraph } from '../constants';

const Hero = () => {
  return (
    <section className='relative mx-auto min-h-screen w-full overflow-clip' id='home'>
      <div className='absolute z-10 grid h-full w-full place-items-center'>
        <div className='w-full text-center text-white'>
          <h2 className='text-[34px] font-bold md:text-[45px] xl:text-[65px]'>MA. Sirojul Falah</h2>
          <div className='relative h-[33px] md:h-[42px] xl:h-[58.5px] w-full overflow-y-clip'>
            <div className='absolute text-animate flex w-full flex-col'>
              <span className={`relative z-0 mx-auto w-fit text-[18px] font-bold text-white md:text-[24px] xl:text-[35px]`}>
                {heroParagraph[heroParagraph.length - 1]}
                <hr className='w-full rounded-full border-[3px] border-primary' />
              </span>
              {heroParagraph.map((text) => (
                <>
                  <span
                    className={`relative z-0 mx-auto w-fit text-[18px] font-bold text-white md:text-[24px] xl:text-[35px]`}
                    key={text}
                  >
                    {text}
                    <hr className='w-full rounded-full border-[3px] border-primary' />
                  </span>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='absolute top-1/2 h-full w-full -translate-y-1/2 object-cover'>
        <img
          src={herobg}
          className='h-full w-full object-cover object-center'
        />
      </div>
    </section>
  );
};

export default Hero;
