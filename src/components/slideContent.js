import { useState } from "react";
import { useSwiperSlide } from "swiper/react";

const SlideContent = ({ slide }) => {
    const [isExpanded, setIsExpanded] = useState(true);
    const { isActive } = useSwiperSlide();

    return (
         <div
            className={`slide-container ${isExpanded ? "full" : "split"}`}
            onMouseEnter={() => setIsExpanded(false)}
            onMouseLeave={() => setIsExpanded(true)}
        >
            <img src={slide.image} alt={slide.alt} className="slide-image"/>
            <div className="slide-info">
                <h3>{slide.categorie}</h3>
                <p>{slide.description}</p>
            </div>
        </div>
    );
};

export default SlideContent;