import { useRef, useEffect } from 'react';
import '../styles/main.scss';


function About() {

    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        video.play();

        const handleVideoEnd = () => {
            video.pause();
            video.currentTime = video.duration - 0.1;
        };

        video.addEventListener('ended', handleVideoEnd);

        return () => {
            video.removeEventListener('ended', handleVideoEnd);
        };
    }, []);

    return (
    <section class="about-me">
        <div className="about-media">
                <video ref={videoRef} src='itsme.mp4' muted />
        </div>
        <div class="about-content">
            <h2>À propos de moi</h2>
            <ul>
                <li><strong>Formation :</strong> Bac+X en [Domaine]</li>
                <li><strong>Langages :</strong> HTML, CSS, JS, React...</li>
                <li><strong>Objectif :</strong> Devenir [ton objectif, ex: Dev Fullstack ou Dev Blockchain]</li>
            </ul>
            <div className='button'>
                <a href="/chemin/vers/cv.pdf" download class="download-btn">Télécharger mon CV</a>
            </div>
        </div>
    </section>
    )
}

export  default About;