import '../styles/main.scss';

function About() {
    return (
    <section class="about-me">
        <div class="about-content">
            <h1>Laure Loda</h1>
            <h2>Développeur Web</h2>
            <p>Passionnée par le développement web, j’ai d’abord suivi un parcours en psychologie et ergonomie des IA avant de me tourner pleinement vers cette voie.Aujourd’hui, je me forme avec un objectif clair : devenir Architecte Blockchain.</p>
            <div className='buttons'> 
                <div className='button-container'>
                    <a href="/chemin/vers/cv.pdf" download class="download-btn">CV</a>
                </div>
                <div className='button-container'>
                    <a href="/chemin/vers/cv.pdf" download class="download-btn">GitHub</a>
                </div>
            </div>   
        </div>
    </section>
    )
}

export  default About;