import { SectionWrapper } from "../hoc";
import { aboutList } from "../constants";

const AboutPage = () => {
  return (
    <div className="relative mx-auto w-full">
      <article className="mb-16 mt-24">
        <div className="w-full text-center">
          <h2 className="text-[25px] font-bold md:text-[35px] xl:text-[50px]">
            Tentang Kami
          </h2>
        </div>

        <figure className="relative mx-auto mt-[65px] aspect-video w-full overflow-hidden rounded-2xl xl:w-7/12 md:w-4/5">
          <picture>
            <div className="absolute top-0 w-full bg-slate-400 pb-[56.25%]" />
            <source media="(min-width:768)" />
            <source media="(min-width:1280)" />
            <img src="" alt="" />
          </picture>
        </figure>
      </article>

      <article className="mb-[85px]">
        <div className="mb-[85px]">
          <p className="w-full grow text-justify text-[16px] font-medium md:text-[20px] xl:text-[24px]">
            Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Horem
            ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
            libero et velit interdum, ac aliquet odio mattis. Horem ipsum dolor
            sit amet, consectetur adipiscing elit. Nunc vulputate libero et
            velit interdum, ac aliquet odio mattis. Horem ipsum dolor sit amet,
            consectetur adipiscing elit. Nunc vulputate libero et velit
            interdum, ac aliquet odio mattis.
          </p>
        </div>
        <section className="flex flex-col md:grid md:grid-cols-2 xl:grid-cols-3 xl:gap-x-[65px] md:gap-x-20 md:gap-y-[46px]">
          {aboutList.map((item, index) => (
            <div key={index} className="flex flex-col gap-5">
              <figure className="relative aspect-video w-full self-stretch overflow-hidden rounded-2xl">
                <picture>
                  <source media="(min-width:768)" />
                  <source media="(min-width:1280)" />
                  <img src={item.img.url} alt={item.img.alt} />
                </picture>
                <div className="absolute top-0 w-full bg-slate-400 pb-[56.25%]" />
              </figure>

              <div className="max-md:mb-[45px]">
                <p className="w-full text-center text-[16px] font-medium md:text-[20px] xl:text-[24px]">
                  Masjid
                </p>
              </div>
            </div>
          ))}
        </section>
      </article>
    </div>
  );
};

export default SectionWrapper(AboutPage, "");
