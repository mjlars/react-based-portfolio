

function Projects() {

    const projectArray = [
        {
            title: 'Degasi Regrets',
            tools: 'Photoshop/Illustrator',
            link: 'https://displate.com/displate/4270986',
        },
        {
            title: 'Neotheater',
            tools: 'Illustrator',
            link: 'https://displate.com/displate/1543735'
        },
        {
            title: 'Secret Family Recipes',
            tools: 'React/Redux/Styled-Components',
            link: 'https://github.com/Build-Week-Secret-FamilyRecipes'
        },
        {
            title: 'Book Worm',
            tools: 'Handlebars/Css/Nodejs',
            link: 'https://agile-bastion-07410.herokuapp.com'
        },
        {
            title: 'Build a Computer',
            tools: 'React/Styled-Components/MongoDB',
            link: 'https://bob-the-build-a-computer.herokuapp.com'
        }
    ];
    
    return(
        <div id="work">
            <h1>My Projects</h1>

            {projectArray.map((data) => {
                return(

                    <div class="project-box">
                    <div class='project-popup'>
                        <div>
                            <h4>
                               {data.title}
                            </h4>
                            <p>
                                {data.tools}
                            </p> 
                        </div>
                        <a href={data.link} target="_blank" rel="noreferrer">Learn More</a>
                    </div>
                </div>

                )
            })}
            
        </div>
    )
}

export default Projects;