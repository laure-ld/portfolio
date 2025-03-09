function skills () {
    return(
        <div className="skill-container">
            <div className="skill">
                <h2>Mes compétences</h2>
                <button className="cards-skills">Retrouvez ma carte mental</button>
                <div className="schema-skills">
                    <img src="/images/skills.png" alt="Mes compétences technique"/>
                </div>
            </div>      
            <div className="softSkill">
                <h2>Mes Soft skills</h2>
                <div className="box">
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
            </div>
            <div className="newTech">
                <h2>Les techniques vers lesquels je me dirige</h2>
                <ul>
                    <li>
                        <img className="circle-container" src="/images/skills.png" alt="Python logo" />
                        <p>Python</p>
                    </li>
                    <li>
                        <img className="circle-container" src="/images/skills.png" alt="Web3 logo" />
                        <p>WEB3</p>
                    </li>
                    <li>
                        <img className="circle-container" src="/images/skills.png" alt="FastAPI logo" />
                        <p>FastAPI</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default skills