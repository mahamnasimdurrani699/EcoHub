// import React from "react";

// const Carousel = () => {
//   const images = [
//     "public/slider 1.webp",
//     "public/slider2.avif",
//     "public/slider3.avif",
//     "public/slider4.avif"
    
//   ];

//   const [currentIndex, setCurrentIndex] = React.useState(0);

//   React.useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//   };

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   return (
//     <div className="relative w-full h-80 bg-gray-800 overflow-hidden rounded-lg">
//       {/* Slide Images */}
//       <div
//         className="flex transition-transform duration-1000"
//         style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//       >
//         {images.map((image, index) => (
//           <img
//             key={index}
//             src={image}
//             alt={`Slide ${index + 1}`}
//             className="w-full h-full object-cover"
//           />
      

//         ))}
//       </div>

//       {/* Transparent Arrows */}
//       <button
//         onClick={prevSlide}
//         className="text-3xl md:text-5xl absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-transparent border-2 border-white rounded-full p-2 md:p-4 hover:bg-white hover:text-gray-800 transition-all"
//       >
//         &#8249;
//       </button>
//       <button
//         onClick={nextSlide}
//         className="text-3xl md:text-5xl absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-transparent border-2 border-white rounded-full p-2 md:p-4 hover:bg-white hover:text-gray-800 transition-all"
//       >
//         &#8250;
//       </button>

//       {/* Dots Navigation */}
//       <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
//         {images.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentIndex(index)}
//             className={`w-3 h-3 rounded-full ${currentIndex === index ? "bg-white" : "bg-gray-400"}`}
//           ></button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Carousel;




import React from 'react';
import Slider from "react-slick";
// Import Slick Carousel CSS files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
  };

  return (
    <div className="w-full ">
      <div className="slider-container w-full">
        <Slider {...settings}>
          <div className="w-full">
            <img src="/slider 1.webp" alt="Slide 1" className="w-full h-[400px] object-cover rounded-lg shadow-md" />
          </div>

          <div className="w-full">
            <img src="/slider2.avif" alt="Slide 2" className="w-full h-[400px] object-cover rounded-lg shadow-md" />
          </div>

          <div className="w-full">
            <img src="/slider3.avif" alt="Slide 3" className="w-full h-[400px] object-cover rounded-lg shadow-md" />
          </div>

          <div className="w-full">
            <img src="/slider4.avif" alt="Slide 3" className="w-full h-[400px] object-cover rounded-lg shadow-md" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;

