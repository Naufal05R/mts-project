import { alquran } from "../assets";
import { programList } from "../constants";
import { SectionWrapper } from "../hoc";

const ProgramPage = () => {
  return (
    <div className="relative mx-auto w-full">
      <article className="mb-16 mt-20">
        <div className="w-full text-center">
          <figure className="relative mx-auto mb-[45px] mt-[65px] h-[80px] w-[88px]">
            <img src={alquran} alt="" />
          </figure>

          <h2 className="text-[25px] font-bold md:text-[35px] xl:text-[50px]">
            Hafalan Al-Qur`an
          </h2>
        </div>
      </article>

      <article className='mb-20'>
        <section className="flex flex-col md:grid md:grid-cols-2 xl:grid-cols-3 xl:gap-x-16 md:gap-y-11 md:gap-x-[95px]">
          {programList.map((item, index) => (
            <div key={index} className="">
              {index ? <div className="h-[45px] w-full md:hidden bg-transparent" /> : null}
              <figure className="aspect-[3/2] md:aspect-[4/3] w-full">
                <img src={item.img} className="h-full rounded-[10px] overflow-hidden w-full bg-slate-400" />
              </figure>
            </div>
          ))}
        </section>
      </article>
    </div>
  );
};

export default SectionWrapper(ProgramPage, "");
