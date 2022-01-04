import "./About.css";
import me from "../../images/me2.jpg";
import ContactChip from "../contactchip/ContactChip";
import {collaborations, aboutme} from "../../ProjectData";

const About = () => {
    return (
        <div className="about">
            <div className="about-left">
                <div className="about-card bg">
                </div>
                <div className="about-card">
                    <img 
                        className="about-image" 
                        src={me}/>
                </div>
            </div>
            <div className="about-right">
                <h1 className="about-title">
                    {aboutme.title}
                </h1>
                <p className="about-sub desc-text">
                    {aboutme.subtitle} 
                </p>
                <div className="about-desc desc-text">
                    {aboutme.description}
                </div>
                <div className="about-technologies">
                    {aboutme.technologies.length>0 && <div className="desc-text">Technologies:</div>}
                    <div className="about-technologies-list">
                        {aboutme.technologies.map((technology, index) => (<div key={index} className="about-technology">{technology}</div>))}
                    </div>
                </div>
                <div className="about-collabs">
                    {collaborations.length>0 && <div className="desc-text">Teamates:</div>}
                    <div className="about-collabs-list">
                        {collaborations.map((collab) => (<ContactChip key={collab.id} name={collab.name} img={collab.img} link ={collab.link}/>))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;