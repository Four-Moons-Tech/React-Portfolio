import ProjectCard from "../components/Project"

function Portfolio() {
    const projects = [
        {
            title: "Book Buddy",
            description: "Book Body is a front end applications that that has  an API with Open Library and Word. Search for books allows to search for books in Open Library, see the availability to check out. Word search looks for synonims, antonyms., rhymes ect.",
            repo: "https://github.com/Four-Moons-Tech/Family-buddy",
            image: "./assets/images/Project1.png"
        },
        {
            title: "Family Buddy",
            description: "Family-buddy is a family chore organizer application. This application is for parent and children. The application helps parent motivate and manage children chores, and helps children track their progress towards the goal by completing chores and have a visualisation of the progress.",
            repo: "https://github.com/Four-Moons-Tech/Family-buddy",
            image: "./assets/images/Project2.png"
        },
        {
            title: "E-commerce-Back-End",
            description: "E-commerce-Back-End is the back end side of the e-commerce website.",
            repo: "https://github.com/Four-Moons-Tech/E-commerce-Back-End",
            image: "./assets/images/Project3.png"
        },
        {
            title: "Social-Network-API",
            description: "Social-Network-API is an API for a social network. The application contains API routes to create, update, delete users, add friends, thoughts and reactions to the thoughts.",
            repo: "https://github.com/Four-Moons-Tech/Social-Network-API",
            image: "./assets/images/Project4.png"
        },
        {
            title: "Tech-Blog",
            description: "Tech-Blog is a website where IT professionals can write blogs about technology. It's a full stack application that uses MVC paradigm",
            repo: "https://github.com/Four-Moons-Tech/Tech-Blog",
            image: "./assets/images/Project5.png"
        },
        {
            title: "Text Editor",
            description: "Text-Editor is a full stack application that can be installed as a progressive web applications",
            repo: "https://github.com/Four-Moons-Tech/Text-Editor",
            image: "./assets/images/Project6.png"
        },

    ]
    return (
        <section className="portfolio container-fluid text-center pb-5">
            <div className="row gy-3">
                {projects.map((project, index) => (
                    <div className="col-12 col-md-6 col-lg-4" key={index}>
                        <ProjectCard title={project.title} description={project.description} repo={project.repo} image={project.image}/>
                    </div> 
                ))}


            </div>
        </section>
    )
}

export default Portfolio;