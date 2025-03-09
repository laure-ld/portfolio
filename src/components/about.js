import '../styles/main.scss';

function About() {
    return (
    <section className="about-me">
        <div className="about-content">
            <h1>Laure Loda</h1>
            <h2>Développeur Web</h2>
            <p>Passionnée par le développement web, j’ai d’abord suivi un parcours en psychologie et ergonomie des IA avant de me tourner pleinement vers cette voie.Aujourd’hui, je me forme avec un objectif clair : devenir Architecte Blockchain.</p>
            <div className='buttons'> 
                <div className='button-container'>
                    <a href="/chemin/vers/cv.pdf" download className="download-btn">CV</a>
                </div>
                <div className='button-container'>
                    <a href="/chemin/vers/cv.pdf" download className="download-btn">GitHub</a>
                </div>
            </div>   
        </div>
        <div className='animation'>
            <div className="menu-right-animation">
                <div className="circle-1"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <span className="menu-word">Mots</span>
            </div>
        </div>
    </section>
    )
}

export  default About;