import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div id="body">
      <Header />
      <Card
        className="section"
        img="./Capture1.PNG"
        title="Tik Tak Toe"
        description="Tik Tak Toe game coded in React"
      />

      <Card
        className="section bg-grey"
        img="./Capture3.PNG"
        title="To Do"
        description="To Do application coded in React"
      />

      <Card
        className="section"
        img="./Capture1.PNG"
        title="Log in Button"
        description="Log in button coded in React"
      />
      <ContactContainer />
    </div>
  );
}

const Header = () => {
  return (
    <div className="header">
      <span className="header-title">React</span>
      <br />
      <span className="header-text">Find React examples here</span>
    </div>
  );
};

const Card = (props) => {
  return (
    <div className={props.className}>
      <div className="small-div">
        <i className={props.className}></i>
        <img src={props.img} alt="" />
      </div>

      <div className="big-div">
        <span className="div-title">{props.title}</span>
        <br />
        <span>{props.description}</span>
      </div>
    </div>
  );
};

const ContactContainer = () => {
  return (
    <div className="contact-container bg-grey">
      <div className="contact-form">
        <div id="sect1">
          <span>
            <i className="fas fa-map-marker-alt"></i>
            Benjamin Perkins
          </span>
          <span>
            <i className="fas fa-mobile-alt"></i>
            perkinsben@yahoo.com
          </span>
          <span>
            <i className="far fa-envelope"></i>
            https://github.com/BenWPerkins
          </span>
        </div>
      </div>
    </div>
  );
};
