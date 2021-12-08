import React from 'react';
import photo from '../../images/Promo-Facebook-Facebook image post.jpeg';
import photo1 from '../../images/web.app (3).jpg'
import photo2 from '../../images/web.app (6)s.jpg'
import photo3 from '../../images/web.app (6)ss.jpg'
import photo4 from '../../images/web.app (6)sss.jpg'

const ViewProject = () => {
    return (
        <div>
            <h1 className="about__heading text-center mt-3">TourX</h1>

            <div>
            <img src={photo} className="img-fluid" alt="..."/>
            </div>

            <div className="d-flex justify-content-center mt-5">
                <div className="me-2">
                <a href="https://tourism-related-website-5077b.web.app/" className="project__btn">LiveSite</a>
                
                </div>
            <div>
            <a href="https://github.com/nhbappi/tourism-website" className="project__btn">ClientSide</a>
            </div>
            <div className="ms-2">
            <a href="https://github.com/nhbappi/tourism-website-server" className="project__btn">ServerSide</a>
            </div>
            
            
            </div>
           <div>
               <h1 className="fs-1 fw-bold text-center m-5">Description</h1>
           </div>
           <div>
               <p className="container text-light text-inline bg-dark">
               “Travel is the main thing you purchase that makes you more extravagant”. We, at ‘Organization Name’, swear by this and put stock in satisfying travel dreams that make you perpetually rich constantly.<br/>

               We have been moving excellent encounters for a considerable length of time through our cutting-edge planned occasion bundles and other fundamental travel administrations. We rouse our clients to carry on with a rich life, brimming with extraordinary travel encounters.
               Through our exceptionally curated occasion bundles, we need to take you on an adventure where you personally enjoy the stunning magnificence of America and far-off terrains. We need you to observe sensational scenes that are a long way past your creative ability.<br/>

               The powerful inclination of American voyagers to travel more nowadays is something that keeps us inspired to satisfy our vacation necessities. Our vision to give you a consistent occasion encounter makes us one of the main visit administrators in the regularly extending travel industry".    
               </p>
           </div>

           <div>
           <h1 className="about__heading mt-5 text-center m-3">SomeShoots</h1>
           </div>
             <div>
             <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={photo1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={photo2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={photo3} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={photo4} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
             </div>

             <div className="text-center m-5">
             <h2 className="home__text pz__10 animate-charcter">Thanks For <br/>Watching My Project</h2>
             </div>
        </div>

        
    );
};

export default ViewProject;