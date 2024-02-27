
function ProjectCard({title, description, repo, image}) {
    return (
        <div className="card h-100 m-2" >
            <img src={image} className="card-img-top" alt={title}/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text text-black">{description}</p>
                    <a href={repo} className="btn btn-primary">GitHub Repo</a>
                </div>
        </div>
    )
}


export default ProjectCard ;