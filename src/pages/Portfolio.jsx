import ProjectCard from "../components/Project"

function Portfolio() {
    const projects = [
        {
            title: "Book Buddy",
            description: "bla",
            repo: "https://github.com/Four-Moons-Tech/Family-buddy",
            image: "./assets/images/Project1.png"
        },
        {
            title: "Family Buddy",
            description: "bla",
            repo: "https://github.com/Four-Moons-Tech/Family-buddy",
            image: "./assets/images/Project2.png"
        },
        {
            title: "Family Buddy",
            description: "bla",
            repo: "https://github.com/Four-Moons-Tech/Family-buddy",
            image: "./assets/images/Project2.png"
        },

    ]
    return (
        <div className="container text-center">
            <div className="row">
                {projects.map((project, index) => (
                    <div className="col" key={index}>
                        <ProjectCard title={project.title} description={project.description} repo={project.repo} image={project.image}/>
                    </div> 
                ))}


            </div>
        </div>
    )
}

export default Portfolio;