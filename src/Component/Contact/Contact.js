import React from 'react';
import emailjs from 'emailjs-com'
import './Contact.css';
import contactImg from'./../../images/pic2.png';

const Contact = () => {
    const sendEmail=(e) =>{
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_wwy95ag', e.target, 'user_5CqkiHXtLrYyoUQBxXa3n')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };
    
    return (
        <div className=" contact component__space" id="Contact">
            <div className="row">
                <div className="col__2">
                    <img src={contactImg} alt="" className="contact__img" />
                </div>

                <div className="col__2">
                    <div className="contact__box ms-5">
                        <div className="contact__meta">
                            <h1 className="hire__text">Hire Me.</h1>
                            <p className="hire__text white">I am available for work. Connect with me via phone:</p>
                           <p className="hire__text white"><strong>+880-1783683840</strong> or email <strong>nazmul.csenu@gmail.com</strong></p>
                        </div>
                        <form onSubmit={sendEmail}>
                        <div className="input__box">
                           <input type="text" className="contact name" placeholder="Your name *" />
                           <input type="text" className="contact email" placeholder="Your Email *" />
                           <input type="text" className="contact subject" placeholder="Write a Subject" />
                           <textarea name="message" id="message" placeholder="Write Your message"></textarea>
                           <button className="btn contact pointer" type="submit">Submit</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;