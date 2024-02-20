import Project from "../components/Project"

function Portfolio() {
    return (
        <div className="container text-center">
            <div className="row">
                <div className="col">
                    <Project />
                </div>
                <div className="col">
                    <Project />
                </div>
                <div className="col">
                    <Project />
                </div>
            </div>
        </div>
    )
}

export default Portfolio;