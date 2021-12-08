import React from "react";
import "./About.css";
import aboutImg from "../../images/istockphoto-1145626155-612x612.png";
function About() {
  //  Up To Top Btn
    window.addEventListener("scroll", function(){
      const upToTop = document.querySelector("a.bottom__to__top");
      //  upToTop.classList.toggle("active", window.scrollY > 0)
    });
  return (
    <div className="about component__space" id="About">
      <div className="">
        <div className="row">
          <div className="col__2">
            <img src={aboutImg} alt="" className="about__img" />
          </div>
          <div className="col__2">
            <h1 className="about__heading mt-4">About Me</h1>
            <div className="about__meta">
              <p className="about__text p__color">
              I’m Sheikh Muhammad Obaidullah Passionate at web development. I’m working minimum of 8-10 hours every day, I love to do this it’s my life everything.
              My goal is to satisfy clients, try to understand what they want for there website, help them from beginning to end the project and give support for every problem.
              If need I communicate by video or audio conversations to understand the problems and project requirements. After completing website and projects I give instructions, How they can manage, edit, update, add page and post on the website by themselves.
              </p>
              <div className="about__button d__flex align__items__center">
                <a href="#">
                  <button className="about btn pointer">Hire Me</button>
                </a>
                <a href="#">
                  <button className="about btn pointer">Contact</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      <div className="up__to__top__btn">
        <a href="#" className="bottom__to__top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-chevron-up white"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
          />
        </svg>
        </a>
      </div>
    </div>
  );
}

export default About;