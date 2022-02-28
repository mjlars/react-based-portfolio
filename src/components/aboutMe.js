import Logo from './images/kowalskilogo.png';

function About() {
    return(
        <div id="about">
            <h1>
                About Me
            </h1>

            <div className="bio-skills">
                <div className="biography">
                    <img src={Logo} alt="Kowalski Graphics Logo" />
                    <p>I have done web development bootcamps through the University of Utah and Lambda School.  
                    <br />
                    Im passionate about website design and functionality and I'm always looking for ways to improve my designs.  
                    <br />
                    I have also done graphic design for 7 years and plan on continuing to do so alongside my development projects.
                    <br />
                    Feel free to contact me if you have any questions.
                    </p>
                </div>
                <div class="skills-list">
                <h2>
                    Skills
                </h2>
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
                </div>
                </div>
            </div>
        </div>
    )
}

export default About;