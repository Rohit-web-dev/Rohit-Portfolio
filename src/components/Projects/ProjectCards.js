import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {

  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };
  const displayDescription = isExpanded
    ? props.description
    : props.description.split(" ").slice(0, 25).join(" ") + "... ";

  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title style={{ color: "#c770f0" }}>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "left" }}>
          Used: {props.useTech}
        </Card.Text>
        <Card.Text style={{ textAlign: "left" }}>
          Duration: {props.duration}
        </Card.Text>
        <Card.Text style={{ textAlign: "justify", color: "#d2d2d2" }}>
          {displayDescription}
          {!isExpanded && (
            <Button variant="link" onClick={toggleExpansion} style={{ padding: 0, textDecoration: "none" }}>
              Show More
            </Button>
          )}
          {isExpanded && (
            <Button variant="link" onClick={toggleExpansion} style={{ padding: 0, textDecoration: "none" }}>
              Show Less
            </Button>
          )}
        </Card.Text>

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.ghLink && (
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
        )}
        {"\n"}
        {"\n"}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;


// 1. add read more button (show only 50 words)
// 2. this project working time durations (date)
// 3. add status button (done, inprogress, incomplete, pending)