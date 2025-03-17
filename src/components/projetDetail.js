import { useParams } from "react-router-dom";
import data from "../data-projects.json";
import '../styles/projetDetail.scss';

const ProjetDetail = () => {
    const { id } = useParams();
    const projet = data.find(p => p.id === parseInt(id));
    if (!projet) {
        return <p>Projet non trouvé</p>;
    }

    return (
        <sectiion className="projet">
            <div className="project-detail">
            <div className="pictureProjet">
                <img src={projet.image} alt={projet.name} />
                <img src={projet.image} alt={projet.name} />
                <img src={projet.image} alt={projet.name} />
                <img src={projet.image} alt={projet.name} />
            </div>
        
            <div className="infoProjet">
                <h2>{projet.name}</h2>
                <p><strong>Objectif :</strong> {projet.objectif}</p>
                <p><strong>Description :</strong> {projet.description}</p>
                <p><strong>Langage utilisé :</strong> {projet.language}</p>
            </div>
            </div>
            <div className="detailProjet">
                <p>n</p>
            </div>
        </sectiion>
    );
};

export default ProjetDetail;