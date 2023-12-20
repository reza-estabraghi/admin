"use client"
import { PhotoProvider, PhotoView } from 'react-image-previewer';
import img1 from './../../../public/img/1.jpg'
import img2 from './../../../public/img/2.jpg'
import img3 from './../../../public/img/3.jpg'
import img4 from './../../../public/img/4.jpg'
import Image from 'next/image';

export default function Gallery() {
  return (
    <section className='w-full flex flex-wrap justify-evenly p-5'>
      <div className='flex w-[100%] md:w-[45%] h-[400px] rounded-lg overflow-hidden m-3'>
        <PhotoProvider >
          <PhotoView src={img1}>
            <Image className='w-full h-full' src={img1} alt="img1" />
          </PhotoView>
        </PhotoProvider>
        </div>
        <div className='flex w-[100%] md:w-[45%] h-[400px] rounded-lg overflow-hidden m-3'>
        <PhotoProvider>
          <PhotoView src={img2}>
            <Image className='w-full h-full' src={img2} alt="img1" />
          </PhotoView>
        </PhotoProvider>
        </div>
        <div className='flex w-[100%] md:w-[45%] h-[400px] rounded-lg overflow-hidden m-3'>
        <PhotoProvider>
          <PhotoView src={img3}>
            <Image className='w-full h-full' src={img3} alt="img1" />
          </PhotoView>
        </PhotoProvider>
        </div>
        <div className='flex w-[100%] md:w-[45%] h-[400px] rounded-lg overflow-hidden m-3'>
        <PhotoProvider >
          <PhotoView height={5} width={5} src={img4}>
            <Image className='w-full h-full' src={img4} alt="img1" />
          </PhotoView>
        </PhotoProvider>
        </div>
    </section>
  );
}
