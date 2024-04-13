import './css/Comp2.css';

import React from 'react';

const Comp2 = () => {
  const toggleMenu = () => {
    // Functionality to toggle the menu
  };

  return (
    <>
      <nav id="desktop-nav">
        <div className="logo">John Doe</div>
        <div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#service">Service</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
      <nav id="hamburger-nav">
        <div className="logo">John Doe</div>
        <div className="hamburger-menu">
          <div className="hamburger-icon" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="menu-links">
            <li><a href="#about" onClick={toggleMenu} >About</a></li>
            <li><a href="#experience" onClick={toggleMenu} >Experience</a></li>
            <li><a href="#projects" onClick={toggleMenu} >Projects</a></li>
            <li><a href="#contact" onClick={toggleMenu} >Contact</a></li>
          </div>
        </div>
      </nav>
      <section id="profile">
        <div className="section__pic-container">
          <img src={require("./assets/profile-pic.png")} alt="John Doe profile picture" />
        </div>
        <div className="section__text">
          <p className="section__text__p1">Hello, I'm</p>
          <h1 className="title">John Doe</h1>
          <p className="section__text__p2">Frontend Developer</p>
          <div className="btn-container">
            <button className="btn btn-color-2" onClick={() => window.open('./assets/resume-example.pdf')}>
              Download CV
            </button>
            <button className="btn btn-color-1" onClick={() => (window.location.href = './#contact')}>
              Contact Info
            </button>
          </div>
          <div id="socials-container">
            <img src={require("./assets/linkedin.png")} alt="My LinkedIn profile" className="icon" onClick={() => (window.location.href = 'https://linkedin.com/')} />
            <img src={require("./assets/github.png")} alt="My Github profile" className="icon" onClick={() => (window.location.href = 'https://github.com/')} />
          </div>
        </div>
      </section>
      <section id="about">
        <p className="section__text__p1">Get To Know More</p>
        <h1 className="title">About Me</h1>
        <div className="section-container">
          <div className="section__pic-container">
            <img src={require("./assets/about-pic.png")} alt="Profile picture" className="about-pic" />
          </div>
          <div className="about-details-container">
            <div className="about-containers">
              <div className="details-container">
                <img src={require("./assets/experience.png")} alt="Experience icon" className="icon" />
                <h3>Experience</h3>
                <p>2+ years <br />Frontend Development</p>
              </div>
             
            </div>
            <div className="text-container">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis
                reprehenderit et laborum, rem, dolore eum quod voluptate
                exercitationem nobis, nihil esse debitis maxime facere minus sint
                delectus velit in eos quo officiis explicabo deleniti dignissimos.
                Eligendi illum libero dolorum cum laboriosam corrupti quidem,
                reiciendis ea magnam? Nulla, impedit fuga!
              </p>
            </div>
          </div>
        </div>
        <img src={require("./assets/arrow.png")} alt="Arrow icon" className="icon arrow" onClick={() => (window.location.href = './#experience')} />
      </section>
      <section id="service">
        <p className="section__text__p1">Explore My</p>
        <h1 className="title">Service</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container">
              <h2 className="experience-sub-title">Frontend Development</h2>
              <div className="article-container">
                <article>
                  <img src={require("./assets/checkmark.png")} alt="Experience icon" className="icon" />
                  <div>
                    <h3>HTML</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                {/* Add more articles */}
              </div>
            </div>
            {/* Add more details-container */}
          </div>
        </div>
        <img src={require("./assets/arrow.png")} alt="Arrow icon" className="icon arrow" onClick={() => (window.location.href = './#projects')} />
      </section>
      <section id='projects'>
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Projects</h1>
      <div className="conatiner">
        <div className="project">
          <div className="img">
            <img src={require("./assets/about-pic.png")}/>
          </div>
          <div className="theory">
          <h2>Project Name</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ipsum quidem aut porro accusantium vel velit cumque atque, quos doloribus alias dolore dignissimos eum nihil.</p>
          </div>
        </div>
        <div className="project">
          <div className="img">
            <img src={require("./assets/about-pic.png")}/>
          </div>
          <div className="theory">
          <h2>Project Name</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ipsum quidem aut porro accusantium vel velit cumque atque, quos doloribus alias dolore dignissimos eum nihil.</p>
          </div>
        </div>
      </div>
      
        
      </section>
      {/* Add more sections */}
      <section id="contact">
        <p className="section__text__p1">Get in Touch</p>
        <h1 className="title">Contact Me</h1>
        <div className="contact-info-upper-container">
          <div className="contact-info-container">
            <img src={require("./assets/email.png")} alt="Email icon" className="icon contact-icon email-icon" />
            <p><a href="mailto:examplemail@gmail.com">Example@gmail.com</a></p>
          </div>
          <div className="contact-info-container">
            <img src={require("./assets/linkedin.png")} alt="LinkedIn icon" className="icon contact-icon" />
            <p><a href="https://www.linkedin.com">LinkedIn</a></p>
          </div>
        </div>
      </section>
      <footer>
        <nav>
          <div className="nav-links-container">
            <ul className="nav-links">
              <li><a href="#about">About</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </nav>
        <p>Copyright &#169; 2023 John Doe. All Rights Reserved.</p>
      </footer>
    </>
  );
};

export default Comp2
