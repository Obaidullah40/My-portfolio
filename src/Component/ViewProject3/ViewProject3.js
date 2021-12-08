import React from 'react';
import photo from '../../images/web.app (33).jpg';
import photo1 from '../../images/web.app (34).jpg'
import photo2 from '../../images/web.app (35).jpg'
import photo3 from '../../images/web.app (36).jpg'
import photo4 from '../../images/web.app (33).jpg'

const ViewProject3 = () => {
    return (
        <div>
            <h1 className="about__heading text-center mt-3">RideBull</h1>

            <div>
            <img src={photo} className="img-fluid" alt="..."/>
            </div>

            <div className="d-flex justify-content-center mt-5">
                <div className="me-2">
                <a href="https://ride-bull.web.app/" className="project__btn">LiveSite</a>
                
                </div>
            <div>
            <a href="https://github.com/nhbappi/cycle-store-client" className="project__btn">ClientSide</a>
            </div>
            <div className="ms-2">
            <a href="https://github.com/nhbappi/cycle-store-server" className="project__btn">ServerSide</a>
            </div>
            
            
            </div>
           <div>
               <h1 className="fs-1 fw-bold text-center m-5">Description</h1>
           </div>
           <div>
               <p className="container text-light text-inline bg-dark">
               "We are happy that you are here at RIDEBULL Bike Shop. Our primary objective is to help more and more people engage in bicycles given that they’re functional, eco friendly, awesome to ride, and offer great adventure! From full-suspension bikes to long lasting city commuters to carbon road bicycles, these are all the things that we love.

There are so many people who message us everyday and inquire what our shop is all about, and therefore we believe an introduction is needed. We’re a customer-friendly, service oriented bike shop expert in dealing with all kinds of your biking needs. We simply do our very best to ensure that our shop is a comfortable zone for people especially those who are new to cycling to learn more, and additionally for experienced cyclists to update their skills and get the most up-to-date bike parts.

Here, we care about each of our clients – average bicycle commuter or leisure rider, it doesn’t matter what type of bicycle they want to ride, or in what way they want to ride it. As such, we supply bicycles and accessories which make riding a bike functional and truly enjoyable, it doesn’t matter what you ride or where it will lead you. Check out our Bike Tour page to learn a little more about a few of the locations we’re currently having".    
               </p>
           </div>

           <div>
           <h1 className="about__heading mt-5 text-center m-5">SomeShoots</h1>
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

export default ViewProject3;