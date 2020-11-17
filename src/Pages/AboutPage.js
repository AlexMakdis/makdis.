import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BiDownload } from "react-icons/bi";
import Typewriter from 'typewriter-effect';
import Pdf from '../components/curriculum_vitae_Alex-Makdis-Afrim.pdf'


function About() {
 
  return (
    <div className="content">
       <div className="container home_container animate__animated" id="fade">
         <div className="row">
          <div className="col-12 home_intro ">
              <div className="row">
                  <div className="col-12">
                    <h1 className="home_title animate__animated animate__fadeInDown"><span>about</span>(<Typewriter options={{
                          wrapperClassName: "typeSelected",
                          autoStart: true,
                        }} onInit={(typewriter) => {
                          typewriter.pauseFor(1500)
                        typewriter.typeString(`'me'`).callFunction(() => {})
                        .start();
                        }}/>)</h1>
                        </div>
                        </div>
            <div className="home_intro_container animate__animated animate__fadeInLeft">
            
            <div className="home_intro_name about_intro">
                <h1><a href="https://www.linkedin.com/in/alex-makdis-afrim-351914170/"><FaLinkedin/></a><a href="https://github.com/AlexMakdis"><FaGithub/></a></h1><p className="download_cv">Download mijn cv</p>
                <div className="home_button about_button"><a href={Pdf} download={Pdf}><button><p>curriculum vitae </p><BiDownload/></button></a></div>
            </div>
            <div className="about_me">
                <p>Ik ben een Full-stack Development student aan Arteveldehogeschool in Gent. Nieuwe webtechnologieën leren en gebruiken om projecten te optimaliseren is wat ik voor doel heb.</p>
            </div>
            <div className="row">
                <div className="col-12 about_title">
                    <h1>Tech skills</h1><hr/>
                    </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 about_skills">
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>JavaScript</p>
                        <p>Sass</p>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 about_skills">
                        <p>React</p>
                        <p>GraphQl</p>
                        <p>MongoDB</p>
                        <p>PHP</p>                
                    </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 about_skills">
                        <p>SQL</p>
                        <p>Node.js</p>
                        <p>Express.js</p>
                        <p>Apollo</p>                
                    </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 about_skills">
                        <p>Blender</p>
                        <p>Three.js</p>
                        <p>Adobe Illustrator</p>
                        <p>Adobe Photoshop</p>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 about_skills">
                        <p>Adobe XD</p>
                        <p>Adobe After Effects</p>
                    </div>
                    <div className="col-12 about_title">
                    <h1>Languages</h1><hr/>
                    </div>
                <div className="col-12 col-sm-6 col-md-4  about_skills">
                        <p className="comment">//Goed</p>
                        <p>Nederlands</p>
                        <p>Engels</p>
                </div>
                <div className="col-12 col-sm-6 col-md-4  about_skills">
                        <p className="comment">//Middelmatig</p>
                        <p>Frans</p>
                </div>
                <div className="col-12 col-sm-6 col-md-4  about_skills">
                        <p className="comment">//Basis</p>
                        <p>Arabisch</p>
                </div>
                <div className="col-12 about_title">
                    <h1>Hobby's</h1><hr/>
                    </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3  about_skills">
                        <p>Fitness</p>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3  about_skills">
                        <p>Video Games</p>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3  about_skills">
                        <p>Koken</p>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3  about_skills">
                        <p>Lezen</p>
                </div>
            </div>
            </div>
          </div>
         </div>
       </div>
    </div>
  );
}

export default About;