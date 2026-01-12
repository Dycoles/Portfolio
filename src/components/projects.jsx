import ProjectCard from "./projectCard";

const projects = [
    {
        title: "Project One",
        image: "/images/project1.png",
        description: "Description for project one.",
    },
    {
        title: "Project Two",
        image: "/images/project2.png",
        description: "Description for project two.",
    },
    {
        title: "Project Three",
        image: "/images/project3.png",
        description: "Description for project three.",
    },
    {
        title: "Project Four",
        image: "/images/project4.png",
        description: "Description for project four.",
    },
    {
        title: "Project Five",
        image: "/images/project5.png",
        description: "Description for project five.",
    },
    {
        title: "Project Six",
        image: "/images/project6.png",
        description: "Description for project six.",
    },
    {
        title: "Project Seven",
        image: "/images/project7.png",
        description: "Description for project seven.",
    },
    {
        title: "Project Eight",
        image: "/images/project8.png",
        description: "Description for project eight.",
    }
];
function Projects() {
    return (
        <section id="projects" className="p-8 bg-white scroll-mt-20">
            <h2 className="text-2xl font-bold mb-4">Projects</h2>
            <div className="space-y-12">
                {projects.map((project, index) => (
                    <ProjectCard 
                        key={index}
                        title={project.title}
                        image={project.image}
                        description={project.description}
                    ></ProjectCard>
                ))}
            </div>
        </section>
    );
}

export default Projects;