import React from 'react';
import './css/Comp5.css'; 

function Comp5() {
  return (
    <div>
      <header>
        <nav>
          <div className="logo">
            <h1>My Portfolio</h1>
          </div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section id="about">
        <div className="container">
          <h2>About Me</h2>
          <p>Insert your introduction and details about yourself here.</p>
        </div>
      </section>

      <section id="portfolio">
        <div className="container">
          <h2>Portfolio</h2>
          {/* Insert your portfolio projects here */}
          <div className="portfolio-item">
            <img src={require("./img/img-1.png")} alt="Project 1" />
            <h3>Project 1</h3>
            <p>Description of Project 1</p>
          </div>
          <div className="portfolio-item">
            <img src={require("./img/img-2.png")} alt="Project 2" />
            <h3>Project 2</h3>
            <p>Description of Project 2</p>
          </div>
          {/* Add more projects as needed */}
        </div>
      </section>

      <section id="contact">
        <div className="container">
          <h2>Contact Me</h2>
          <form>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message"></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>&copy; 2024 My Portfolio</p>
          {/* Add social media links or other footer content here */}
        </div>
      </footer>


    </div>
  );
}

export default Comp5;

