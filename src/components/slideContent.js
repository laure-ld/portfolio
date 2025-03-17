import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSwiperSlide } from "swiper/react";

const SlideContent = ({ slide }) => {
    const [isExpanded, setIsExpanded] = useState(true);
    const { isActive } = useSwiperSlide();
    const navigate = useNavigate();

    return (
         <div   
            className={`slide-container ${isExpanded ? "full" : "split"}`}
            onMouseEnter={() => setIsExpanded(false)}
            onMouseLeave={() => setIsExpanded(true)}
        >
            <img src={slide.image} alt={slide.alt} className="slide-image"/>
            <button  onClick={() => navigate(`/projets/${slide.id}`)} className="page-project">
                <div className="slide-info">
                    <h3>{slide.name}</h3>
                    <p>{slide.objectif}</p>
                    <p>{slide.description}</p>
                    <p>{slide.language}</p>
                </div>
            </button>
        </div>
    );
};

export default SlideContent;