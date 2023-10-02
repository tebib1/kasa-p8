import { useParams } from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';
import CollapseItem from '../components/Collapse';
import data from '../data/data.json';
import starActive from '../assets/starActive.png';
import starInactive from '../assets/starInactive.png';
import Slide from "../components/Slide";

  
const FicheLogement = () => {
  const { id } = useParams();
  const selectedHousing = data.find((item) => item.id === id);

  const ratingStars = [];
  for (let i = 1; i <= 5; i++) {
    ratingStars.push(
      <img
        key={i}
        src={i <= selectedHousing?.rating ? starActive : starInactive}
        alt={`Star ${i}`}
        className="stars"
      />
    );
  }


  return (
    <div>
      <Header />
      <main>
        <div>

     
    
      <Slide pictures={selectedHousing.pictures} />
      <div className="box">
        <div>
      <h2 className="title-housing">{selectedHousing.title}</h2>
            <p className="second-title-housing">{selectedHousing.location}</p>
            </div>
            <div className="alignement_name">
            <p className="name-host">{selectedHousing.host.name}</p>
              <img className="picture-host" src={selectedHousing.host.picture}  alt={selectedHousing.host.name}  />
              </div>
              </div>
          <div className="alignement_tags">
          <div className="tag-box">
              {selectedHousing.tags.map((tag, index) => (
                <div key={index} className="tag">
                  {tag}
                </div>
              ))}
            </div>
            <div className="rating-stars">{ratingStars}</div>
          </div>
          <div className="collapsess">
            <div className="align">
              <CollapseItem

                title="Description"
                content={selectedHousing.description}
              />
            </div>
            <div className="align">
              <CollapseItem
                title="Equipements"
                content={selectedHousing.equipments}
              />
            </div>
          </div>
        </div>


      </main>
      <Footer />
    </div>
  );
};

export default FicheLogement;
