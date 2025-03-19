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
                    <h3>{slide.name}</h3> - <p className="date">{slide.date}</p>
                    <p className="objectif">Objectif du projet : {slide.objectif}</p>
                    <p className="tech-title">Technologies utilisées :</p>
                    <ul className="tech-list">
                    {slide.technologie.map((tech, index) => (
                        <li key={index}>{tech}</li>
                    ))}
                    </ul>
                </div>
            </button>
        </div>
    );
};

export default SlideContent;