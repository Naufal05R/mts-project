import SwiperGallery from './SwiperGallery';

const Gallery = () => {
  return (
    <section className='relative mx-auto w-full mt-[145px] md:px-10 px-[25px] py-20 overflow-clip' id='gallery'>
      <div className='w-full text-center'>
        <h2 className='text-[50px] font-bold'>Galleries</h2>
      </div>
      <SwiperGallery />
    </section>
  );
};

export default Gallery;
