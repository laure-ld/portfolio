import '../styles/main.scss';

function About() {
    return (
    <section className="about-me">
        <div className="about-content">
            <h1>Laure Loda</h1>
            <h2>Développeuse Web</h2>
            <p>Passionnée par le développement web, j’ai d’abord suivi un parcours en psychologie et ergonomie des IA avant de me tourner pleinement vers cette voie.Aujourd’hui, je me forme avec un objectif clair : devenir architecte blockchain.</p>
            <div className='buttons'> 
                <div className='button-container'>
                    <a href="/CV.pdf" download className="download-btn">CV</a>
                </div>
                <div  onClick={() => window.open("https://github.com/laure-ld", "_blank")} className='button-container'>
                    <img src="/images/github.png" alt="GitHub"/>
                </div>
            </div>   
        </div>
        <div className='animation'>
            <div className="menu-right-animation">
                <div className="circle-1"></div>
                <div className="circle"></div>
                <div className="circle"></div>
            </div>
        </div>
    </section>
    )
}

export  default About;