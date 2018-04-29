import React, { Component } from 'react';
import './Contact.css';

class ScrollToTopOnMount extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return null
  }
}

const Contact = () => {
  return (

    <div className="Contact">
      <ScrollToTopOnMount/>  
      <div className="details-container">
        <div className="image-holder">
          <img src="bee.jpg" alt="" width={250} height={250} />
        </div>  
        <div className="details">
          <h3>Mala S</h3>
          <span className="octicon octicon-mail">&nbsp;
            <a href="mailto:beeinpeace1@gmail.com">beeinpeace1@gmail.com</a>
          </span>
          <span className="octicon octicon-device-mobile">&nbsp;
            <a href="tel:+918861568805">+918861568805</a>
          </span>
          <span className="octicon octicon-mark-github">&nbsp;
            <a href="https://github.com/beeinpeace1" target="__blank">https://github.com/beeinpeace1</a>
          </span>
          <span className="octicon octicon-file-pdf">&nbsp;
            <a href="resume_mala.pdf" target="__blank">Resume</a>
          </span>
        </div>
      </div>  
    </div>
  );
}

export default Contact;
