import React from 'react';
import './css/Comp4.css';
const PortfolioWebsite = () => {
  return (
    <>
        <div className="modal" id="myModal">
          <div className="modal-content">
            <span className="close">
              <i className="fa fa-times"></i>
            </span>
            <div className="content-title">
              <span>Skills</span>
            </div>
            <div className="skills-box">
              <span className="skills-label">HTML</span>
              <span className="skills-label">CSS</span>
              <span className="skills-label">Angular</span>
              <span className="skills-label">JavaScript</span>
              <span className="skills-label">React</span>
              <span className="skills-label">Vue</span>
              <span className="skills-label">PHP</span>
              <span className="skills-label">MySQL</span>
            </div>
          </div>
        </div>

        <div className="modal" id="myModal1">
          <div className="modal-content">
            <span className="close">
              <i className="fa fa-times"></i>
            </span>
            <div className="content-title">
              <span>Service We Offer</span>
            </div>
            <div className="desc_content">
              <p>I work together with my team to offer best services in:</p>
              <ul className="services_list">
                <li>Web Development</li>
                <li>Web Design</li>
                <li>Web Hosting</li>
                <li>Software Development</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="modal" id="myModal2">
          <div className="modal-content">
            <span className="close">
              <i className="fa fa-times"></i>
            </span>
            <div className="content-title">
              <span>About Me</span>
            </div>
            <p>
              I am a skilled and creative frontend web developer with a passion for crafting engaging and user-friendly
              web interfaces. My expertise lies in transforming design concepts into responsive and visually appealing
              websites and web applications. With a strong foundation in HTML, CSS, and JavaScript, I excel at
              implementing responsive design, optimizing performance, and ensuring cross-browser compatibility
            </p>
          </div>
        </div>
       
        <div className="wrapper">
          {/* NAVIGATION BAR */}
          <nav className="nav">
            <div className="nav_logo">
              <span>John Mark</span>
            </div>
            <div className="right_nav">
              <div className="nav_menu" id="navMenu">
                <ul className="link_list">
                  <div className="close-menu">
                    <i className="fa fa-times" onClick="menuClose()"></i>
                  </div>
                  <li className="list">
                    <a href="#" className="link">
                      Home
                    </a>
                  </li>
                  <li className="list">
                    <a href="#myModal" className="link" id="myBtn">
                      Skills <i className="fa-solid fa-caret-down"></i>
                    </a>
                    <div className="description_box">
                      <div className="link_description" id="myDescription">
                        <div className="content-title">
                          <span>I'm Skilled In</span>
                        </div>
                        <div className="desc_content">
                          <span className="skills-label">HTML</span>
                          <span className="skills-label">CSS</span>
                          <span className="skills-label">Angular</span>
                          <span className="skills-label">JavaScript</span>
                          <span className="skills-label">React</span>
                          <span className="skills-label">Vue</span>
                          <span className="skills-label">PHP</span>
                          <span className="skills-label">MySQL</span>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="list">
                    <a href="#myModal1" className="link" id="myBtn">
                      Services <i className="fa-solid fa-caret-down"></i>
                    </a>
                    <div className="description_box">
                      <div className="link_description" id="myDescription">
                        <div className="content-title">
                          <span>Service We Offer</span>
                        </div>
                        <div className="desc_content">
                          <p>I work together with my team to offer best services in:</p>
                          <ul className="services_list">
                            <li>Web Development</li>
                            <li>Web Design</li>
                            <li>Web Hosting</li>
                            <li>Software Development</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="list">
                    <a href="#myModal2" className="link" id="myBtn">
                      About <i className="fa-solid fa-caret-down"></i>
                    </a>
                    <div className="description_box about_box">
                      <div className="link_description" id="myDescription">
                        <div className="content-title">
                          <span>About Me</span>
                        </div>
                        <div className="desc_content">
                          <p>
                            I am a skilled and creative frontend web developer with a passion for crafting engaging and
                            user-friendly web interfaces. My expertise lies in transforming design concepts into
                            responsive and visually appealing websites and web applications. With a strong foundation in
                            HTML, CSS, and JavaScript, I excel at implementing responsive design, optimizing
                            performance, and ensuring cross-browser compatibility
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="nav_button">
                <a href="assets/pdf/download.pdf" className="btn">
                  <i className="fa fa-download"></i> <span>Download CV</span>
                </a>
              </div>
              <div className="mode">
                <div className="moon-sun" id="toggle-switch">
                  <i className="fa fa-moon" id="moon"></i>
                  <i className="fa fa-sun" id="sun"></i>
                </div>
              </div>
              <div className="nav_menu_btn">
                <i className="fa fa-bars" onClick="myMenuFunction()"></i>
              </div>
            </div>
          </nav>
          {/* MAIN */}
          <main className="main">
            <div className="row hero">
              <div className="col col-1">
                <div className="social_icons">
                  {/* Icon animated circle */}
                  <div className="icon_circle"></div>
                  {/* Social Icons */}
                  <a href="https://linkedin.com" target="_blank" style={{ textDecoration: 'none' }} rel="noopener noreferrer">
                    <i className="fa-brands fa-linkedin-in icon"></i>
                  </a>
                  <a href="https://dribbble.com" target="_blank" style={{ textDecoration: 'none' }} rel="noopener noreferrer">
                    <i className="fa-brands fa-dribbble icon"></i>
                  </a>
                  <a href="https://github.com" target="_blank" style={{ textDecoration: 'none' }} rel="noopener noreferrer">
                    <i className="fa-brands fa-github icon"></i>
                  </a>
                  <a href="https://behance.com" target="_blank" style={{ textDecoration: 'none' }} rel="noopener noreferrer">
                    <i className="fa-brands fa-behance icon"></i>
                  </a>
                </div>
                {/* HERO TEXT */}
                <div className="hero_box">
                  <div className="hello">
                    <p>Hello, I Am</p>
                  </div>
                  <div className="job">
                    <span className="multiText"></span>
                  </div>
                  <div className="hero_description">
                    <p>Experienced frontend developer with a passion for creating visually stunning and user-friendly websites.</p>
                  </div>
                  <div className="hero_btn">
                    <button className="btn_1">Hire Me</button>
                    <button className="btn_2">
                      <a href="assets/pdf/download.pdf">Download CV</a>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col col-2">
                <div className="circle">
                  <img src={require("./img4/circle.png")} alt="" />
                </div>
                <div className="hero-image">
                  <img src={require("./img4/1.png")} alt="" />
                </div>
                <div className="clients">
                  <i className="fa-regular fa-user"></i>
                  <div className="clients-content">
                    <span>2k +</span>
                    <p>Happy Clients</p>
                  </div>
                </div>
                <div className="experience">
                  <i className="fa-regular fa-star"></i>
                  <div className="xp-content">
                    <span>10 +</span>
                    <p>Years of experience</p>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
    
        </>
  );
};

export default PortfolioWebsite;
