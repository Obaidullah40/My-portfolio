
import React from "react";
import "./Projects.css";
import { Link } from "react-router-dom";



function Projects() {
  return (
    <div className="project component__space" id="Projects">
      <div className="heading">
        <h1 className="heading">My Latest Project</h1>
      </div>
       <div className="container">
           <div className="row">



           <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={'https://tubularinsights.com/wp-content/uploads/2014/08/travel-videos-youtube.jpg'} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h4 className="project__text">Tour Project</h4>
                     <Link to="projectDetails"  className="project__btn">View Project</Link>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={'https://images.immediate.co.uk/production/volatile/sites/21/2019/03/new_bike_excuses_1-1469098104384-1krhac6hn3g7m-2d55b3b.jpg?quality=45&resize=768,574'} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h4 className="project__text">Cycle Store</h4>
                     <Link to="projectDetails3"  className="project__btn">View Project</Link>
                     </div>
                 </div>
             </div>

             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={'https://www.prestigeanimalhospital.com/sites/default/files/Prestige-Animal-Hospital-Veterinarian-Fontana-Near-Me.jpg'} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h4 className="project__text">Animal Hospital</h4>
                     <Link to="projectDetails2"  className="project__btn">View Project</Link>
                     </div>
                 </div>
             </div>


            
             
              <div className="view__more__btn d__flex align__items__center justify__content__center pxy__30">
             <button className="view__more pointer btn">View more</button>
             </div>

           </div>
       </div>
    </div>
  );
}

export default Projects;