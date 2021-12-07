import React from 'react';
import '../styles/main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faMobileAlt, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function Main() {
    return (
        <div className="main_container">
            <aside className="aside_container">
                <div className="presentation">
                    <div class="parent">
                        <div class="child"></div>
                    </div>
                    <h2>Roqueheli Arenas C.</h2>
                    <h4><span>{`>`}</span> Front-End Developer</h4>
                    <h4><span>{`>`}</span> AS400 Senior Developer</h4>
                </div>
                <div className="personal_info">
                    <div className="icons">
                        <FontAwesomeIcon className="fa-envelope" icon={faEnvelope} />
                        <FontAwesomeIcon className="fa-mobile-alt" icon={faMobileAlt} />
                        <FontAwesomeIcon className="fa-linkedin" icon={faLinkedin} />
                        <FontAwesomeIcon className="fa-github" icon={faGithub} />
                        <FontAwesomeIcon className="fa-map-marker-alt" icon={faMapMarkerAlt} />
                    </div>
                    <div className="text">
                        <h4> roqueheliarenas@gmail.com</h4>
                        <h4> +56 9 9246 9431</h4>
                        <h4> <a href="https://linkedin.com/in/roqueheli-arenas-16b24927">linkedin.com/in/roqueheli</a></h4>
                        <h4> <a href="https://github.com/roqueheli">https://github.com/roqueheli</a></h4>
                        <h4> La Florida, Santiago</h4>
                    </div>
                </div>
                <div className="tools">
                    <h2>Herramientas</h2>
                    <div className="tools_subcontainer">
                        <h4>RPG (AS400)</h4>
                        <h4>CLLE</h4>
                        <h4>Html</h4>
                        <h4>Css5</h4>
                        <h4>Javascript</h4>
                        <h4>React Js</h4>
                        <h4>Node Js</h4>
                        <h4>Git</h4>
                    </div>
                </div>
                <div>
                    Skills
                </div>
                <div>
                    Idiomas
                </div>
                <div class="certifications">
                    Certificaciones
                </div>
            </aside>
            <body className="body_container">
                <h2>{`< Hello World I'm Roqueheli >`}</h2>
                <p><span>{`<sobre-mi>`}</span>Hola, cómo están?<span>{`</sobre-mi>`}</span></p>
            </body>
        </div>
    )
};

export default Main;
