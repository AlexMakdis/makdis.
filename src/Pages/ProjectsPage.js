import React from 'react';
import { FaSocks } from "react-icons/fa";
import Typewriter from 'typewriter-effect';


function Project() {

  return (
    <div className="content">
       <div className="container home_container animate__animated" id="fade">
         <div className="row">
          <div className="col-12 home_intro ">
              <div className="row">
                  <div className="col-12">
                    <h1 className="home_title animate__animated animate__fadeInDown"><span>projects</span>(<Typewriter options={{
                          wrapperClassName: "typeSelected",
                          autoStart: true,
                        }} onInit={(typewriter) => {
                          typewriter.pauseFor(1500)
                        typewriter.typeString(`'Hello World!'`).callFunction(() => {})
                        .start();
                        }}/>)</h1>
                        </div>
                        </div>
            <div className="home_intro_container animate__animated animate__fadeInLeft">
            
            <div className="home_intro_name project_purple">
                <p>Dit zijn een paar van mijn projecten die ik heb ontwikkeld.</p>
            </div>
            <div className="about_me project_grey">
                <p>//Arteveldehogeschool</p>
            </div>
            <div className="row">
                    <div className="col-12 about_title">
                    <hr/>
                    </div>
                    <div className="col-12">
                    <a href="https://pgmgent-1920-students.github.io/eindwerk-AlexMakdis/" rel="noreferrer" target="_blank"><div className="col-12 project">
                     <div className="project_background"><div className="pablo"><br/></div></div>
                     <div className="project_info">
                       <h1>Pablo's Hot Sauces</h1>
                       <p className="project_tools">// React </p>
                       <p className="project_description">Webshop om zeer pikante sauzen te kopen</p>
                     </div>
                </div></a></div>
                <div className="col-12">
                <a href="https://pgmgent-1920-students.github.io/case1-pgm-website-AlexMakdis/" rel="noreferrer" target="_blank"><div className="col-12 project">
                     <div className="project_background"><div className="pgm"><br/></div></div>
                     <div className="project_info">
                       <h1>Pgm.Gent</h1>
                       <p className="project_tools">// Webpack </p>
                       <p className="project_description">Een site voor Graduaat Programmeren</p>
                     </div>
                </div></a></div>
                <div className="col-12">
                <a href="https://sosocksy.netlify.app/" rel="noreferrer" target="_blank"><div className="col-12 project">
                     <div className="project_background"><div className="sock"><FaSocks/></div></div>
                     <div className="project_info">
                       <h1>So Socksy</h1>
                       <p className="project_tools">// MongoDB / GrapghQl / Apollo / React </p>
                       <p className="project_description">Webshop om comfy sokken te kopen!</p>
                     </div>
                </div></a></div>
            </div>
            </div>
          </div>
         </div>
       </div>
    </div>
  );
}

export default Project;