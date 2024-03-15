import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rohit Kumar Pramanik </span>
            from <span className="purple"> Jamshedpur(TATA), India.</span>
            <br />
            I am currently employed as a React developer at IT Company.
            <br />
            I have completed Bachelor of Technology (B.Tech) in Computer Science & Engineering at BITM
            Santiniketan.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Enthusiastic about playing games (cricket, chess, card), and more.
            </li>
            <br />
            <li className="about-activity">
              <ImPointRight /> creating lifestyle and travel vlogs on YouTube
            </li>
            <br />
            <li className="about-activity">
              <ImPointRight /> Travel and adventures, especially ancient temples and enchanting locations that emanate captivating vibes.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Rohit Kumar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
