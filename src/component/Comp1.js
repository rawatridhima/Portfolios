import './css/Comp1.css';
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import React from 'react';
import { AiOutlineFacebook, AiOutlineGithub, AiOutlineLinkedin, AiOutlineTwitter } from 'react-icons/ai'

const Comp1 = () => {
  return (
    <>
      
     
        <div className="site-main-wrapper">
          <button className="hamberger">
            <img src={require("./images/hamberger.svg")} alt="" />
          </button>

          <div className="mobile-nav">
            <button className="times">
              <img src={require("./images/times.svg" )} alt="" />
            </button>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">My Projects</a>
              </li>
            </ul>
          </div>
          <header>
            <div className="container">
              <nav id="main-nav" className="flex items-center justify-between">
                <div className="left flex items-center">
                  <div className="branding">
                    <img src={require("./images/logo.svg" )} alt="" />
                  </div>
                  <div>
                    <a href="#">Home</a>
                    <a href="#about">About</a>
                    <a href="#services">Services</a>
                    <a href="#My Projects"> My Projects</a>
                  </div>
                </div>
                <div className="right">
                  <button className="btn btn-primary">Contact</button>
                </div>
              </nav>
              <div className="hero flex items-center justify-between">
                <div className="left flex-1 flex justify-center">
                  <img src={require("./images/man.png" )} alt="" />
                </div>
                <div className="right flex-1">
                  <h6>Johnathan Vics</h6>
                  <h1>
                    I’m a Creative <span>Designer</span>
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                  </p>
                  <div>
                    <button className="btn btn-secondary">DOWNLOAD CV</button>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <section id="about" className="about">
            <div className="container flex items-center about-inner-wrap">
              <div className="flex-1">
                <img className="about-me-img" src={require("./images/man-2.png" )} alt="" />
              </div>
              <div className="flex-1 right">
                <h1>About <span>Me</span></h1>
                <h3>Hello! i’m Johnathan Vics.</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum
                  dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat
                </p>
                <div className="social">
                  <a href="https://linkedin.com/">
                  <FaLinkedin color='white'/>
                  </a>
                  <a href="https://github.com/">
                    <AiOutlineGithub color='white'/>
                  </a>
                  <a href="https://twitter.com">
                    {' '}
                    <AiOutlineTwitter color='white'/>
                  </a>
                  <a href="https://facebook.com">
                    {' '}
                    <FaFacebook color='white'/>
                  </a>
                  
                </div>
              </div>
            </div>
          </section>
          <section id="services" className="services">
            <div className="container">
              <h1 className="section-heading">
                <span>Our </span>Services
              </h1>
              <p>We provide high standar clean website for your business solutions</p>
              <div className="card-wrapper">
                <div className="card">
                  <img src={require("./images/brush.svg" )} alt="" />
                  <h2>Graphic Design</h2>
                  <p>
                    There are many variations of passages of but the majority have suffered
                    alteration in some form.
                  </p>
                </div>
                <div className="card">
                  <img src={require("./images/code.svg" )} alt="" />
                  <h2>Graphic Design</h2>
                  <p>
                    There are many variations of passages of but the majority have suffered
                    alteration in some form.
                  </p>
                </div>
                <div className="card">
                  <img src={require("./images/bag.svg" )} alt="" />
                  <h2>Graphic Design</h2>
                  <p>
                    There are many variations of passages of but the majority have suffered
                    alteration in some form.
                  </p>
                </div>
                <div className="card">
                  <img src={require("./images/desktop.svg" )} alt="" />
                  <h2>Graphic Design</h2>
                  <p>
                    There are many variations of passages of but the majority have suffered
                    alteration in some form.
                  </p>
                </div>
                <div className="card">
                  <img src={require("./images/media.svg" )} alt="" />
                  <h2>Graphic Design</h2>
                  <p>
                    There are many variations of passages of but the majority have suffered
                    alteration in some form.
                  </p>
                </div>
                <div className="card">
                  <img src={require("./images/phone.svg" )} alt="" />
                  <h2>Graphic Design</h2>
                  <p>
                    There are many variations of passages of but the majority have suffered
                    alteration in some form.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="freelancer">
            <h1>I Am Available For Freelancer.</h1>
            <p>We provide high standar clean website for your business solutions</p>
            <button className="btn btn-primary">Download CV</button>
          </section>
          <section className="reviews">
            <div className="container">
              <h1 className="section-heading">
                <span>Our</span> Client
              </h1>
              <p>We provide high standar clean website for your business solutions</p>
              <div className="slider">
                <div className="slide">
                  <img src={require("./images/lady.png" )} alt="" />
                  <p>
                    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
                  </p>
                  <span>- John Doel, Company ABC</span>
                </div>
                <div className="slide">
                  <img src={require("./images/lady.png" )} alt="" />
                  <p>
                    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
                  </p>
                  <span>- John Doel, Company ABC</span>
                </div>
                <div className="slide">
                  <img src={require("./images/lady.png" )} alt="" />
                  <p>
                    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
                  </p>
                  <span>- John Doel, Company ABC</span>
                </div>
                <div className="slide">
                  <img src={require("./images/lady.png")} alt="" />
                  <p>
                    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
                  </p>
                  <span>- John Doel, Company ABC</span>
                </div>
              </div>
              <div className="slider-dots"></div>
            </div>
          </section>


          <section id="My Projects" className="blog">
            <div className="container">
              <h1 className="section-heading">
                <span>My</span> Projects
              </h1>
              <p>We provide high standar clean website for your business solutions</p>

              <div className="card-wrapper">
                <div className="card">
                  <div className="img-wrapper">
                    <img src={require("./images/article-ph-1.png")} alt="" />
                  </div>
                  <div className="card-content">
                    <a href="#">
                      <h1>Occusamus et iusto odio</h1>
                    </a>
                    <span>May 12, 2017</span>
                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                      eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                      in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <a href="#">Read More</a>
                  </div>
                </div>
                <div className="card">
                  <div className="img-wrapper">
                    <img src={require("./images/article-ph-1.png")} alt="" />
                  </div>
                  <div className="card-content">
                    <a href="#">
                      <h1>Occusamus et iusto odio</h1>
                    </a>
                    <span>May 12, 2017</span>
                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                      eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                      in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <a href={"#"}>Read More</a>
                  </div>
                </div>
                <div className="card">
                  <div className="img-wrapper">
                    <img src={require("./images/article-ph-1.png")} alt="" />
                  </div>
                  <div className="card-content">
                    <a href={"#"}>
                      <h1>Occusamus et iusto odio</h1>
                    </a>
                    <span>May 12, 2017</span>
                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                      eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                      in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <a href="#">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="contact">
            <div className="container">
              <h1 className="section-heading">
                Contact <span>Us</span>
              </h1>
              <p>We provide high standar clean website for your business solutions</p>
              <div className="card-wrapper">
                <div className="card">
                  <img src={require("./images/phone-2.svg" )} alt="" />
                  <h1>Call Us On</h1>
                  <h6>+985 123 7856</h6>
                </div>
                <div className="card">
                  <img src={require("./images/msg.svg" )} alt="" />
                  <h1>Email Us At</h1>
                  <h6>support@companyname.com</h6>
                </div>
                <div className="card">
                  <img src={require("./images/map.svg" )} alt="" />
                  <h1>Visit Office</h1>
                  <h6>99 S.t Jomblo Park Pekanbaru 28292. Indonesia</h6>
                </div>
              </div>

              <form action="">
                <div className="input-wrap">
                  <input type="text" placeholder="Your Name *" />
                  <input type="email" placeholder="Your Email *" />
                </div>
                <div className="input-wrap-2">
                  <input type="text" placeholder="Your Subject..." />
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Your Message..."
                  ></textarea>
                </div>
                <div className="btn-wrapper">
                  <button className="btn btn-primary">Send Message</button>
                </div>
              </form>
            </div>
          </section>
          <footer>
            <img className="footer-logo" src={require("./images/logo-2.svg" )} alt="" />
            <div className="footer-socials">
              <a href={"#"}>
                <img src={require("./images/website.svg" )} alt="" />
              </a>
              <a href={"https://www.facebook.com/codersgyan"}>
                <img src={require("./images/facebook.svg" )}alt="" />
              </a>
              <a href={"https://twitter.com/CoderGyan"}>
                {' '}
                <img src={require("./images/twitter.svg" )} alt="" />
              </a>
              <a href={"#"}> <img src={require("./images/pintrest.svg" )}alt="" /></a>
              <a href={"https://www.instagram.com/codersgyan/"}>
                {' '}
                <img src={require("./images/instagram.svg")} alt="" />
              </a>
            </div>
            <div className="copyright">
              Copyright 2020 © Coder's Gyan
            </div>
          </footer>
        </div>

 

    </>
  );
};

export default Comp1;

