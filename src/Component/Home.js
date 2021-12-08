
import React, {useState} from "react";
import "./Home.css";
import photo from '../images/inline_image_preview.png';

const Home = () => {

   
  return (
    <div className="home mt-5" id="Home">
      <div className="home__bg">
        <div className="container">
          <div className="home__content d__flex">
            <div className="home__meta">
              <h1 className="home__text pz__10">WELCOME TO MY WORLD</h1>
              <h2 className="home__text pz__10 animate-charcter">Hi, I’m Nazmul</h2>
              <h3 className="home__text sweet pz__10 word">Frontend Developer.</h3>


              <div class="wrapper">
         <div class="button">
            <div class="icon">
               <i class="fab fa-facebook-f"></i>
            </div>
            <span>Facebook</span>
         </div>
         <div class="button">
            <div class="icon">
               <i class="fab fa-twitter"></i>
            </div>
            <span>Twitter</span>
         </div>
         <div class="button">
            <div class="icon">
               <i class="fab fa-instagram"></i>
            </div>
            <span>Instagram</span>
         </div>
         <div class="button">
            <div class="icon">
               <i class="fab fa-github"></i>
            </div>
            <span>Github</span>
         </div>
         <div class="button">
            <div class="icon">
               <i class="fab fa-youtube"></i>
            </div>
            <span>YouTube</span>
         </div>
      </div>
              <a href="https://drive.google.com/uc?export=download&id=1HK7m_WhKYESx2nnxYso7yX421HuZ06aW">
<button className="about btn pointer ms-0 mt-3">Download Cv</button>
                </a>
            </div>
            <div>
                <img src={photo} width="100%" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Home;