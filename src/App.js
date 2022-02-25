
function App() {
  return (
    <div className="App">
      <header>
        <div className="name">
          <h1>Matthew Larson</h1>
        </div>
        <div className="links">
          <nav>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact Me</a>
          </nav>
        </div>
      </header>

      <div className="about">

        <h2>About Me</h2>

        <div className="bio-skills">
          <img src="http://placehold.it/" alt="Kowalski Graphics Logo" />
          <p>I have done webb development bootcamps through the University of Utah and Lambda School.  
            <br />
          Im passionate about website design and functionality and I'm always looking for ways to improve my designs.  
            <br />
          I have also done graphic design for 7 years and plan on continuing to do so alongside my development projects.
            <br />
          Feel free to contact me if you have any questions.
          </p>
        </div>

        <div className="skills-list">
          <h2>My Skills</h2>
          <div class="skills-boxes">
            <div class="box"><p>HTML</p></div>
            <div class="box"><p>CSS</p></div>
            <div class="box"><p>JAVASCRIPT</p></div>
            <div class="box"><p>REACT</p></div>
            <div class="box"><p>REDUX</p></div>
            <div class="box"><p>BOOTSTRAP</p></div>
            <div class="box"><p>SASS</p></div>
            <div class="box"><p>PHOTOSHOP</p></div>
            <div class="box"><p>ILLUSTRATOR</p></div>
            <div class="box"><p>INDESIGN</p></div>
            <div class="box"><p>STYLED-COMPONENTS</p></div>
            <div class="box"><p>Express</p></div>
            <div class="box"><p>Node.js</p></div>
            <div class="box"><p>MongoDB</p></div>
          </div>
        </div>
      </div>
      <div id="work">
          
      </div>

      <footer id="contact">
            <a href="https://github.com/mjlars" target="_blank" rel="noreferrer">Github</a>
            <a href="mailto:kowalskigraphics@gmail.com" >Kowalskigraphics@gmail.com</a>            
            <a href="https://www.linkedin.com/in/johnlarson4/" target="_blank" rel="noreferrer">LinkedIn</a>
    </footer>
    </div>
  );
}

export default App;
