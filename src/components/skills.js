function skills () {
    return(
        <div className="skill-container">
            <div className="skill" id="competence">
                <h2>Mes compétences</h2>
                <button onClick={() => window.open("https://miro.com/app/board/uXjVIWwAwJY=/?share_link_id=448433351909", "_blank")} className="cards-skills">Retrouvez ma carte mental</button>
                <div className="schema-skills">
                    <img src="/images/skills.png" alt="Mes compétences technique"/>
                </div>
            </div>      
            <div className="softSkill" id="soft">
                <h2>Mes Soft skills</h2>
                <div className="box" >
                    <h3>Qualités interpersonnelles</h3>
                        <ul>
                            <li>Écoute active & empathie</li>
                            <li>Curiosité et veille technologique</li>
                            <li>Capacité d’adaptation rapide</li>
                            <li>Transmission et esprit collaboratif</li>
                        </ul>
                </div>
                <div className="box">
                    <h3>Méthodologie & Organisation</h3>
                        <ul>
                            <li>Planification et gestion de projet</li>
                            <li>Respect des échéances et priorisation</li>
                            <li>Résolution de problèmes et esprit critique</li>
                            <li>Apprentissage autonome et montée en compétence</li>
                        </ul>
                </div>
                <div className="learn-skills">
                    <h2>Les techniques vers lesquels je me dirige</h2>
                        <ul>
                            <li className="skill-circle">Python</li>
                            <li className="skill-circle">WEB3</li>
                            <li className="skill-circle">FastAPI</li>
                        </ul>
                </div>
            </div>
        </div>
    )
}

export default skills