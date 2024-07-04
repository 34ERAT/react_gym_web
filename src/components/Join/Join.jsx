import React, {useRef} from "react";
import './Join.css'
import  emailjs from '@emailjs/browser'
export default function Join(){
  const form = useRef()
    const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_6x1fb09', 'template_ds2cvou', form.current, {
        publicKey: 'weytg9l8gmCmCmVPf',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {

          console.log('FAILED...', error.text);
          // console.log("can not do that ")
        },
      );
  };

  return(
  <div className="Join" id="join-us">
      <div className="left-j">
        <hr/>
        <div>
          <span className="stroke-text">READY TO</span>
          <span> LEVEL UP</span>
        </div>
        <div>
          <span> YOUR BODY</span>
          <span className="stroke-text"> WITH US</span>
        </div>
      </div>
      <div className="right-j">
        <form ref={form} onSubmit={sendEmail}  className="email-container">
          <input type="email" name="user_email" placeholder="Enter your Email Address"/>
          <button className="btn  btn-j">Join Now </button>
        </form>
      </div>
    </div>
  )
}
