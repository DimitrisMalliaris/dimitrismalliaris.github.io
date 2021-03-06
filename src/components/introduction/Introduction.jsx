import "./Introduction.css";
import me from "../../images/me.jpg";
import { introduction } from "../../ProjectData";

const Introduction = () => {
    return(
        <div className="intro">
            <div className="intro-left">
                <div className="intro-left-wrapper">
                    <h2 className="intro-introtext">{introduction.introtext}</h2>
                    <h1 className="intro-name">{introduction.name}</h1>
                    <div className="intro-title">
                        <div className="intro-title-wrapper">
                            {introduction.titles.map((title, index) => (<div key={index} className="intro-title-item">{title}</div>))}
                        </div>
                    </div>
                    <p className="intro-desc">
                        {introduction.description}
                    </p>
                    <a href={introduction.resume} className="intro-resume">
                        <div className="intro-resume-text">
                            <div>Resume</div>
                        </div>
                    </a>
                </div>
            </div>
            <div className="intro-right">
                <div className="intro-bg"> </div>
                <div className="intro-image-wrapper">
                    <img src={me} alt="" className="intro-image"></img>
                </div>
            </div>
        </div>
    );
}

export default Introduction