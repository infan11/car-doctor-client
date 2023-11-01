import React from 'react';
import img1 from '../..//assets/assets/images/banner/1.jpg'
import img2 from '../..//assets/assets/images/banner/2.jpg'
import img3 from '../..//assets/assets/images/banner/3.jpg'
import img4 from '../..//assets/assets/images/banner/4.jpg'
import img5 from '../..//assets/assets/images/banner/5.jpg'
import img6 from '../..//assets/assets/images/banner/6.jpg'
const Banner = () => {
    return (
        <div>
   <div className="carousel w-full h-[600px]">
  <div id="slide1" className="carousel-item rounded-xl relative w-full">
    <img src={img1} className="w-full" />
<div className='absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, ,21,0)]'>
    <div className='text-white space-y-7 pl-12 w-/3'>
        <h2 className='text-6xl font-bold'>Affordable <br /> Price <br /> For Car  <br /> Servicing</h2>
        <p>There are many variations of passages of  available, but the majority have <br />suffered alteration in some form</p>
        <button className="btn  btn-error text-white mr-2">Discover more</button>
        <button className="btn btn-outline text-white btn-error">Latest Project</button>
    </div>
</div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-3   ">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={img2} className="w-full" />
    <div className='absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, ,21,0)]'>
    <div className='text-white space-y-7 pl-12 w-/3'>
        <h2 className='text-6xl font-bold'>Affordable <br /> Price <br /> For Car  <br /> Servicing</h2>
        <p>There are many variations of passages of  available, but the majority have <br /> suffered alteration in some form</p>
        <button className="btn  btn-error text-white mr-2">Discover more</button>
        <button className="btn btn-outline text-white btn-error">Latest Project</button>
    </div>
</div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0    ">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={img3} className="w-full" />
    <div className='absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, ,21,0)]'>
    <div className='text-white space-y-7 pl-12 w-/3'>
        <h2 className='text-6xl font-bold'>Affordable <br /> Price <br /> For Car  <br /> Servicing</h2>
        <p>There are many variations of passages of  available, but the majority have <br />suffered alteration in some form</p>
        <button className="btn  btn-error text-white mr-2">Discover more</button>
        <button className="btn btn-outline text-white btn-error">Latest Project</button>
    </div>
</div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0    ">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={img4} className="w-full" />
    <div className='absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, ,21,0)]'>
    <div className='text-white space-y-7 pl-12 w-/3'>
        <h2 className='text-6xl font-bold'>Affordable <br /> Price <br /> For Car  <br /> Servicing</h2>
        <p>There are many variations of passages of  available, but the majority have <br />suffered alteration in some form</p>
        <button className="btn  btn-error text-white mr-2">Discover more</button>
        <button className="btn btn-outline text-white btn-error">Latest Project</button>
    </div>
</div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0    ">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide5" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide5" className="carousel-item relative w-full">
  <div className='absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, ,21,0)]'>
    <div className='text-white space-y-7 pl-12 w-/3'>
        <h2 className='text-6xl font-bold'>Affordable <br /> Price <br /> For Car  <br /> Servicing</h2>
        <p>There are many variations of passages of  available, but the majority have <br />suffered alteration in some form</p>
        <button className="btn  btn-error text-white mr-2">Discover more</button>
        <button className="btn btn-outline text-white btn-error">Latest Project</button>
    </div>
</div>
    <img src={img5} className="w-full" />
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0    ">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide6" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide6" className="carousel-item relative w-full">
  <div className='absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, ,21,0)]'>
    <div className='text-white space-y-7 pl-12 w-/3'>
        <h2 className='text-6xl font-bold'>Affordable <br /> Price <br /> For Car  <br /> Servicing</h2>
        <p>There are many variations of passages of  available, but the majority have <br />suffered alteration in some form</p>
        <button className="btn  btn-error text-white mr-2">Discover more</button>
        <button className="btn btn-outline text-white btn-error">Latest Project</button>
    </div>
</div>
    <img src={img6} className="w-full" />
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0    ">
      <a href="#slide5" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;