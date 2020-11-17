import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';


function Home() {


  return (
    <div className="content">
       <div className="container home_container animate__animated" id="fade">
         <div className="row">
          <div className="col-12 home_intro">
            <h1 className="home_title "><span>home</span>( )</h1>
            <div className="home_intro_container ">
            <p className="home_intro_name">Alex Makdis Afrim</p>
            <p className="home_intro_job">Full-stack developper</p>
            <p className="home_intro_description">Welcome to my personal website. </p>
            <div className="home_button"><Link to="/about"><button><p>go to about </p><FaArrowRight/></button></Link></div>
            </div>
          </div>
         </div>
       </div>
    </div>
  );
}

export default Home;