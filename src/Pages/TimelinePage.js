import React, { useRef } from 'react';



function Timeline() {
  const fadeRef = useRef();
  function fadeFunction () {
    fadeRef.current.classList.add('animate__fadeOutLeft');
    
  }

  return (
    <div className="content">
       <div className="home_container animate__animated" ref={fadeRef}>
         <div className="sacred animate__animated animate__fadeInRight">
          <div className="timeline">
              <ul>
                <li className="firstDelay animate__animated animate__fadeIn">
                  <div className="timeline_beforeContent"></div>
                  <div className="timeline_content">
                    <h3 className="date">6 oktober, 2021</h3>
                    <h1>Proclamatie Graduaat Programmeren</h1>
                    <p>Na twee jaar bloed, zweet, tranen en veel chips heb ik mijn twede diploma binnen gehaald. Dank aan Philippe De Pauw - Waterschoot, Olivier, Tim...</p>
                  </div>
                </li>
                <li className="secondDelay animate__animated animate__fadeIn">
                  <div className="timeline_beforeContent"></div>
                  <div className="timeline_content">
                    <h3 className="date">8 februari, 2021 tot en met 14 mei, 2021</h3>
                    <h1>Stage The Reference</h1>
                    <p>React, CARGLASS CARGLASS en ... CARGLASS</p>
                  </div>
                </li>
                <li className="thirdDelay animate__animated animate__fadeIn">
                  <div className="timeline_beforeContent"></div>
                  <div className="timeline_content">
                    <h3 className="date">6 oktober, 2019</h3>
                    <h1>Proclamatie</h1>
                    <p>3 jaar afgewerkt in glorie! Bachelor Sociaal Werk diplomas is binnen!</p>
                  </div>
                </li>
                <li className="delay animate__animated animate__fadeIn">
                  <div className="delay timeline_beforeContent"></div>
                  <div className="timeline_content">
                    <h3 className="date">20 maart, 2018</h3>
                    <h1>Start keukenhulp bij TRKZK</h1>
                    <p>Gestart als keukenhulp in het ribbenrestaurant in Wortegem en gegroeid als sous-chef.</p>
                  </div>
                </li>
                <li className="delay animate__animated animate__fadeIn">
                  <div className="delay timeline_beforeContent"></div>
                  <div className="timeline_content">
                    <h3 className="date">30 juni, 2016</h3>
                    <h1>Afgestudeerd bij Onze Lieve Vrouw Hemelvaart</h1>
                    <p>Humane Wetenschappen met uitbreiding wiskunde te Onze Lieve Vrouw Hemelvaart in Waregem.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Timeline;