import React from 'react';
import './Skills.css'

const Skills = () => {
    return (
        <div className="skill component__space" id="Skill">
             <div className="heading mb-2">
        <h1 className="heading">My Skills</h1>
        <p className="heading p__color mb-5">
          ------what i know------
        </p>
      </div>
      <div className="grid">
      <div className="container mt-5">
          <h1 className="fs-1 fw-bold text-light">My skills & experiences.</h1>
           <p className="fs-3 fw-bold text-light">Why Choose Me?</p>
           <p className="fs-5 text-light">
           ✔ Provide video support for guideline<br/>

           ✔ Unlimited Revisions<br/>

           ✔ Work in your time zone<br/>

           ✔ The ability to explain technical matters clearly <br/>

           ✔ A keen interest in technology<br/>

           ✔ Strong communication skills<br/>

           ✔ Constantly leaning and staying update <br/>

           ✔ Handle all kind off serious problem sincerely <br/>
           ✔ Provide Extra Features.
          
           </p>
      </div>
      <div className="">
      <p className="text-light">HTML</p>
<div class="containers">
  <div class="skills html">90%</div>
  {/* <div class="skills html">90%</div> */}
</div>

<p className="text-light">CSS</p>
<div class="containers">
  <div class="skills css">90%</div>
</div>
<p className="text-light">JavaScript</p>
<div class="containers">
  <div class="skills js">75%</div>
</div>

<p className="text-light">REACT</p>
<div class="containers">
  <div class="skills react">70%</div>
</div>
<p className="text-light">MongoDb</p>
<div class="containers">
  <div class="skills mongodb">70%</div>
</div>
<p className="text-light">NodeJs</p>
<div class="containers">
  <div class="skills nodejs">70%</div>
</div>
<p className="text-light">GitHub</p>
<div class="containers">
  <div class="skills github">70%</div>
</div>
      </div>
      </div>
        </div>
    );
};

export default Skills;