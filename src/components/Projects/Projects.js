import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import srv from "../../Assets/Projects/srv2.png";
import eatlanka from "../../Assets/Projects/eatlanka.png"
import fintech from "../../Assets/Projects/fintech.png";
import mascumen from "../../Assets/Projects/mascumen.png";
import crypto from "../../Assets/Projects/crypto.png";
import birms from "../../Assets/Projects/birms.png";
import almazra from "../../Assets/Projects/almazra.png";
import dufther from "../../Assets/Projects/dufther.png";
import cardKing from "../../Assets/Projects/the-cart-king.png";
import active from "../../Assets/Projects/activearmor.png";
import stayTrails from "../../Assets/Projects/stayStails.png";
import tranport from "../../Assets/Projects/transport.png";
import spade from "../../Assets/Projects/spadekard.png";
import tgcs from "../../Assets/Projects/tgcs.png";
import ample from "../../Assets/Projects/amplePoints.png";
import adoption from "../../Assets/Projects/dogAdop.png";
import pointer from "../../Assets/Projects/pointer.png";
import dpboss from "../../Assets/Projects/dpboss.png";
import emaar from "../../Assets/Projects/emaar.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are all projects I've worked on experienced.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col lg={4} md={6} className="project-card">
            <ProjectCard
              imgPath={emaar}
              isBlog={false}
              title="Plot 360"
              useTech="Next.js, Redux(RTK), Bootstrap, API Integration"
              duration="August 2024 - Inprogress"
              description="Developed a dynamic real estate web site with fully customizable sections (header, footer, content) powered by an admin portal text editor, handling frontend design, API integration, and SEO optimization using Next.js, React, Bootstrap and custom CSS."
              status="Inprogress"
              // ghLink="https://github.com/Rohit-web-dev/"
              demoLink="https://emaar-dubai.srpl-ind.com/"
            />
          </Col>

          <Col lg={4} md={6} className="project-card">
            <ProjectCard
              imgPath={mascumen}
              isBlog={false}
              title="Mascumen With Admin Panel"
              useTech="Next.js, Redux(RTK), Bootstrap, API Integration"
              duration="December 2023 - June 2024"
              description="Experienced Frontend Developer dedicated to the Mascumen eCommerce project, Specializing in cosmetics, skincare, and personal care products. Solely responsible for the project, I leverage Next.js, Redux Toolkit, Bootstrap, HTML, and CSS for frontend development, while integrating the API. Focused on creating seamless user experiences, I prioritize intuitive navigation and checkout processes. Passionate about driving technological innovation, I continuously enhance the platform's digital presence and functionality, contributing to its success as a dynamic and user-centric eCommerce solution."
              status="Done"
              // ghLink="https://github.com/Rohit-web-dev/"
              demoLink="https://mascumen.in/"
            />
          </Col>

          <Col lg={4} md={6} className="project-card">
            <ProjectCard
              imgPath={birms}
              isBlog={false}
              title="BIRMS"
              useTech="React.js, Redux(Thunk), Bootstrap, API Integration"
              duration="Feb 2023 - Oct 2023"
              description="Experienced developer specializing in government projects with a focus on revenue management systems. Contributed expertise to the Bhutan Integrated Revenue Management System (BIRMS), a pivotal project for the Bhutan government's income tax department. Utilized React, Redux Thunk, Bootstrap, HTML, CSS, and API integration to develop user-friendly interfaces and streamline revenue management processes. Collaborated within a dedicated government team to deliver robust solutions aimed at enhancing efficiency and transparency in revenue collection and management."
              status="Done"
              // ghLink="https://github.com/Rohit-web-dev/"
              demoLink="https://birmsstagging.drc.gov.bt/authentication/login"
            />
          </Col>

          <Col lg={4} md={6} className="project-card">
            <ProjectCard
              imgPath={fintech}
              isBlog={false}
              title="Fintech Admin Panel"
              useTech="React.js, Redux(RTK) with Saga, Tailwind UI, Tailwind CSS, Devstream, API Integration"
              duration="Nov 2022 - Jan 2023"
              description="Fintech Admin project totally based on dashboard functionality. All the technologies mentioned above have been used.  It has mainly 4 tabs in which has a different role.  Department, Employee, Card Management & Budgets. Most of the data switching and crud operation work has been done in this. And authentication has also been done in this, so that admin can login to access the dashboard page. This type has worked in many condition and logical part. This was my best project to learn."
              ghLink="https://github.com/Rohit-web-dev/fintech-admin-panel"
            // demoLink="https://www.youtube.com/@andekhigalliyan"
            />
          </Col>

          <Col lg={4} md={6} className="project-card">
            <ProjectCard
              imgPath={srv}
              isBlog={false}
              title=" SRV Technology PVT LTD"
              useTech="HTML, CSS, Bootstrap JavaScript, JQuery, Animation"
              duration="Oct 2022 - Nov 2022"
              description="Proficient IT professional with expertise in front-end development, instrumental in crafting the website for SRV Technology Pvt Ltd. Leveraged HTML, CSS, JavaScript, jQuery, Bootstrap, and animation techniques to create dynamic and visually appealing user interfaces. Played a pivotal role in designing and implementing interactive features, ensuring seamless navigation and engaging user experiences. Collaborated closely with the design and development teams to translate project requirements into functional and aesthetically pleasing web solutions. Successfully contributed to establishing the online presence of SRV Technology Pvt Ltd, showcasing the company's offerings and expertise in the IT domain."
              // ghLink="https://github.com/Rohit-web-dev/"
              demoLink="https://www.srvtechnology.com/"
            />
          </Col>

          <Col lg={4} md={6} className="project-card">
            <ProjectCard
              imgPath={crypto}
              isBlog={false}
              title="Golden Goose"
              useTech="React.js, Redux(CORE), Bootstrap, API Integration"
              duration="Aug 2022 - Oct 2022"
              description="Experienced developer adept at creating educational projects, including 'Golden Goose,' which focuses on event functionality. Developed features to manage total past events, upcoming events, and total purchases, enhancing user interaction and data management. Leveraged event-driven programming techniques to ensure seamless functionality and user engagement. Collaborated with stakeholders to understand educational objectives and implemented tailored solutions to meet learning goals effectively. Contributed to the project's success by delivering intuitive and feature-rich functionalities, fostering a dynamic learning environment. This endeavor exemplifies my commitment to utilizing technology for educational purposes and showcases my proficiency in event-driven programming and user-focused development."
              ghLink="https://github.com/Rohit-web-dev/crypto-dhan"
            // demoLink="https://www.youtube.com/@andekhigalliyan"
            />
          </Col>

          <Col lg={4} md={6} className="project-card">
            <ProjectCard
              imgPath={eatlanka}
              isBlog={false}
              title="Eatlanka"
              useTech="HTML, CSS, Bootstrap JavaScript, JQuery, Etc"
              duration="May 2022 - Jul 2022"
              description="Experienced web designer proficient in creating the frontend for 'EatLanka,' a food delivery ecommerce website catering to Sri Lanka. Solely responsible for developing the website's frontend using HTML, CSS, JavaScript, and jQuery, ensuring seamless user experiences and intuitive navigation. Demonstrated expertise in translating project requirements into visually appealing and functional designs, optimizing the website for enhanced user engagement and satisfaction. Collaborated closely with stakeholders to understand business objectives and user needs, delivering a tailored and impactful solution. The successful completion of 'EatLanka' showcases my ability to independently drive frontend development projects and create compelling online experiences tailored to specific markets and audiences."
              // ghLink="https://github.com/Rohit-web-dev/"
              demoLink="https://www.eatlanka.com/"
            />
          </Col>

          <Col lg={4} md={6} className="project-card">
            <ProjectCard
              imgPath={almazra}
              isBlog={false}
              title="Almazra"
              useTech="HTML, CSS, Bootstrap JavaScript, JQuery, Etc"
              duration="Mar 2022 - Apr 2022"
              description="Experienced frontend developer proficient in designing the frontend of 'Almazra,' an online grocery delivery website serving Oman. Solely responsible for crafting the website's frontend using HTML, CSS, JavaScript, and jQuery, ensuring seamless user experiences and intuitive navigation. Demonstrated expertise in translating project requirements into visually appealing and functional designs, optimizing the website for enhanced user engagement and satisfaction. Collaborated closely with stakeholders to understand business objectives and user needs, delivering a tailored and impactful solution. The successful completion of 'Almazra' showcases my ability to independently drive frontend development projects and create compelling online experiences tailored to specific markets and audiences in Oman."
              // ghLink="https://github.com/Rohit-web-dev/"
              demoLink="https://almazra.com/dev/"
            />
          </Col>

          <Col lg={4} md={6} className="project-card">
            <ProjectCard
              imgPath={dufther}
              isBlog={false}
              title="Dufther"
              useTech="React.js, Redux(CORE), Bootstrap, API Integration"
              duration="Dec 2021 - Feb 2022"
              description="Experienced frontend developer proficient in spearheading the frontend design of 'Dufther,' a real estate project catering to clients in Dubai. Solely responsible for architecting the frontend using React.js, Redux (CORE), Bootstrap, and API integration. Skillfully designed features for managing worker attendance, inventory of building materials like iron and cement, and price maintenance. Demonstrated expertise in translating complex project requirements into intuitive user interfaces, optimizing functionality, and enhancing user experience. Collaborated closely with stakeholders to ensure alignment with client objectives and needs. 'Dufther' showcases my ability to deliver impactful frontend solutions independently, tailored to the unique requirements of real estate projects in the Dubai market."
              // ghLink="https://github.com/Rohit-web-dev/"
              demoLink="https://www.dufther.com/"
            />
          </Col>

          <Col lg={4} md={6} className="project-card">
            <ProjectCard
              imgPath={cardKing}
              isBlog={false}
              title="The Card King"
              useTech="HTML, CSS, Bootstrap JavaScript, JQuery, Etc"
              duration="Nov 2021"
              description="Experienced frontend developer proficient in crafting 'The Card King,' a credit card management platform. Solely responsible for designing and implementing the frontend using HTML, CSS, JavaScript, and jQuery. Developed intuitive user interfaces and interactive features to facilitate credit card management and transactions. Demonstrated expertise in creating visually appealing designs while ensuring seamless functionality and user experience. Collaborated closely with stakeholders to understand project requirements and deliver tailored solutions. 'The Card King' exemplifies my ability to independently drive frontend development projects and create user-centric solutions in the financial sector."
              ghLink="https://github.com/Rohit-web-dev/the-card-king"
              // demoLink="https://www.dufther.com/"
            />
          </Col>

          <Col lg={4} md={6} className="project-card">
            <ProjectCard
              imgPath={active}
              isBlog={false}
              title="Activarmor"
              useTech="HTML, CSS, Bootstrap JavaScript, JQuery, Etc"
              duration="Oct 2021"
              description="Experienced frontend developer proficient in spearheading the frontend design of 'Activarmor,' a doctor consultancy project. Solely responsible for crafting the frontend using HTML, CSS, JavaScript, and jQuery, ensuring seamless user experiences and intuitive navigation. Skillfully designed features tailored for doctor consultancy purposes, optimizing functionality and enhancing user interaction. Demonstrated expertise in translating project requirements into visually appealing and functional designs, meeting the needs of healthcare professionals and patients effectively. Collaborated closely with stakeholders to ensure alignment with project objectives and user expectations. 'Activarmor' showcases my ability to deliver impactful frontend solutions independently, customized for the healthcare industry."
              ghLink="https://github.com/Rohit-web-dev/active-armor"
              // demoLink="https://www.dufther.com/"
            />
          </Col>

          <Col lg={4} md={6} className="project-card">
            <ProjectCard
              imgPath={stayTrails}
              isBlog={false}
              title="StayTrails"
              useTech="HTML, CSS, Bootstrap JavaScript, JQuery, Etc"
              duration="Sep 2021"
              description='Experienced frontend developer proficient in leading the frontend design of "stayStrails," a hotel booking project. Solely responsible for crafting the frontend using HTML, CSS, JavaScript, and jQuery, ensuring seamless user experiences and intuitive navigation. Skillfully designed features tailored for hotel booking purposes, optimizing functionality and enhancing user interaction. Demonstrated expertise in translating project requirements into visually appealing and functional designs, meeting the needs of both hoteliers and travelers effectively. Collaborated closely with stakeholders to ensure alignment with project objectives and user expectations. "stayStrails" showcases my ability to deliver impactful frontend solutions independently, tailored specifically for the hotel booking industry.'
              ghLink="https://github.com/Rohit-web-dev/staytrails"
              // demoLink="https://www.dufther.com/"
            />
          </Col>

          <Col lg={4} md={6} className="project-card">
            <ProjectCard
              imgPath={tranport}
              isBlog={false}
              title="Transportation"
              useTech="HTML, CSS, Bootstrap JavaScript, JQuery, Etc"
              duration="Aug 2021"
              description='Experienced frontend developer proficient in leading the frontend design of "Transportation," a comprehensive bus transport solution encompassing ticket booking, bus tracking, and detailed bus information. Solely responsible for crafting the frontend using HTML, CSS, JavaScript, and jQuery, ensuring seamless user experiences and intuitive navigation. Skillfully designed features tailored for bus transport purposes, optimizing functionality and enhancing user interaction. Demonstrated expertise in translating project requirements into visually appealing and functional designs, meeting the needs of both passengers and transport operators effectively. Collaborated closely with stakeholders to ensure alignment with project objectives and user expectations. "Transportation" showcases my ability to deliver impactful frontend solutions independently, customized for the transportation industry.'
              ghLink="https://github.com/Rohit-web-dev/transport"
              // demoLink="https://www.dufther.com/"
            />
          </Col>

          <Col lg={4} md={6} className="project-card">
            <ProjectCard
              imgPath={spade}
              isBlog={false}
              title="Spade Kard"
              useTech="HTML, CSS, Bootstrap JavaScript, JQuery, Etc"
              duration="Jul 2021"
              description='Experienced frontend developer adept in spearheading the frontend design of "Spade Kard," a credit card management solution. Solely responsible for crafting the frontend using HTML, CSS, JavaScript, and jQuery, ensuring seamless user experiences and intuitive navigation. Skillfully designed features tailored for credit card management, optimizing functionality and enhancing user interaction. Demonstrated expertise in translating project requirements into visually appealing and functional designs, meeting the needs of credit card users effectively. Collaborated closely with stakeholders to ensure alignment with project objectives and user expectations. "Spade Kard" showcases my ability to deliver impactful frontend solutions independently, specialized for credit card management purposes.'
              ghLink="https://github.com/Rohit-web-dev/sprade-card"
              // demoLink="https://www.dufther.com/"
            />
          </Col>

          <Col lg={4} md={6} className="project-card">
            <ProjectCard
              imgPath={tgcs}
              isBlog={false}
              title="TGCS"
              useTech="HTML, CSS, Bootstrap JavaScript, JQuery, Etc"
              duration="May 2021"
              description='TGCS, a comprehensive financial services platform offering life insurance, personal loans, business loans, and more. Solely responsible for crafting the frontend using HTML, CSS, JavaScript, and jQuery, ensuring seamless user experiences and intuitive navigation. Skillfully designed features tailored for loan management and financial services, optimizing functionality and enhancing user interaction. Demonstrated expertise in translating project requirements into visually appealing and functional designs, meeting the diverse needs of clients effectively. Collaborated closely with stakeholders to ensure alignment with project objectives and user expectations. "TGCS" highlights my ability to deliver impactful frontend solutions independently, specialized for financial services.'
              ghLink="https://github.com/Rohit-web-dev/TGCS"
              // demoLink="https://www.dufther.com/"
            />
          </Col>

          <Col lg={4} md={6} className="project-card">
            <ProjectCard
              imgPath={ample}
              isBlog={false}
              title="Ample Points"
              useTech="HTML, CSS, Bootstrap JavaScript, JQuery, Etc"
              duration="Mar 2021 - Apr 2021"
              description="Ample Points, a premier fashion ecommerce website. Solely responsible for crafting the frontend using HTML, CSS, JavaScript, and jQuery, ensuring seamless user experiences and captivating visuals. Skillfully integrated advanced features tailored for online fashion retail, optimizing product showcasing and user engagement. Demonstrated expertise in translating design concepts into functional and visually appealing interfaces, elevating the brand's online presence. Collaborated closely with stakeholders to understand market trends and user preferences, delivering a tailored and impactful solution. 'Ample Points' showcases my ability to deliver compelling frontend solutions independently, tailored for the fashion ecommerce industry."
              ghLink="https://github.com/Rohit-web-dev/ample-points"
              // demoLink="https://www.dufther.com/"
            />
          </Col>

          <Col lg={4} md={6} className="project-card">
            <ProjectCard
              imgPath={pointer}
              isBlog={false}
              title="Pointer LLC"
              useTech="HTML, CSS, Bootstrap JavaScript, JQuery"
              duration="Feb 2021"
              description="Pointer LLC, a platform dedicated to hiring advocates for justice. Solely responsible for crafting the frontend using HTML, CSS, JavaScript, and jQuery, ensuring seamless user experiences and intuitive navigation. Skillfully integrated advanced features tailored for hiring legal professionals, optimizing functionality and enhancing user interaction. Demonstrated expertise in translating project requirements into visually appealing and functional designs, meeting the needs of clients seeking justice effectively. Collaborated closely with stakeholders to ensure alignment with project objectives and user expectations. 'Pointer LLC' highlights my ability to deliver impactful frontend solutions independently, specialized for legal hiring initiatives."
              ghLink="https://github.com/Rohit-web-dev/pointer"
              // demoLink="https://www.dufther.com/"
            />
          </Col>

          <Col lg={4} md={6} className="project-card">
            <ProjectCard
              imgPath={dpboss}
              isBlog={false}
              title="DP BOSS"
              useTech="Only use HTML & CSS."
              duration="Jan 2021 - Feb 2022"
              description="Dpboss stands as a testament to my enduring dedication and growth in web design, spanning from January 2021 to February 2022. Solely crafted with HTML and CSS, this project became an invaluable platform for honing my design skills and mastering the intricacies of web development. As a daily task, I diligently designed and uploaded new web pages onto the admin panel, fostering my proficiency in administrative tasks. Functioning as a satta gaming project, akin to Dream11, 'Dpboss' catered to a client base in Goa, requiring dynamic web design updates to captivate users. Emphasizing user engagement, the project demanded constant evolution, motivating me to refine my design prowess continuously. By adhering to HTML and CSS, the project not only achieved aesthetic allure but also prioritized search engine optimization, solidifying its online presence and user accessibility. 'Dpboss' encapsulates my journey of skill development and project management in the corporate realm."
              // ghLink="https://dpbosss.com/"
              demoLink="https://dpbosss.com/"
            />
          </Col>

          <Col lg={4} md={6} className="project-card">
            <ProjectCard
              imgPath={adoption}
              isBlog={false}
              title="Dog Adoption Form"
              useTech="Only use HTML & CSS."
              duration="Jan 2021"
              description="This is my First Live Project. Dog Adoption Form, dedicated to facilitating dog sales and adoption. Solely responsible for crafting the frontend using HTML, CSS, and Bootstrap, ensuring a user-friendly and visually appealing interface. Skillfully integrated Bootstrap components to streamline form submission and enhance user experience. Demonstrated expertise in translating design requirements into functional and visually appealing layouts, optimizing usability and engagement. Collaborated closely with stakeholders to understand adoption process needs and user preferences, delivering a tailored solution that promotes dog adoption effectively. 'Dog Adoption Form Design' highlights my ability to create compelling frontend solutions independently, specialized for pet adoption initiatives."
              ghLink="https://github.com/Rohit-web-dev/dog-adoption"
              // demoLink="https://www.dufther.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
