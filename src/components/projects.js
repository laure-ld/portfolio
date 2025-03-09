import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import data from '../data-projects.json';
import SlideContent from './slideContent';

function Carrousel() {
    
return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
    {data.map((slide, index) => (
    <SwiperSlide key={index} className='img'>
        <SlideContent slide={slide} />
    </SwiperSlide>
    ))}
    </Swiper>
)
}

export default Carrousel;