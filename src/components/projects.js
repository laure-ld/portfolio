import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

function Carrousel() {
    const slides = [
        { image: '/path/image1.jpg', alt: 'Projet 1' },
        { image: '/path/image2.jpg', alt: 'Projet 2' },
        // etc.
    ];
    
return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
    {slides.map((slide, index) => (
        <SwiperSlide key={index}>
            <img src={slide.image} alt={slide.alt} />
        </SwiperSlide>
    ))}
    </Swiper>
)
}

export default Carrousel;