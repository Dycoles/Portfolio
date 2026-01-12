function ProjectCard({ title, image, description }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <img 
                src={image} 
                alt={title} 
                className="rounded-lg shadow-lg w-full"
            />

            <div>
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-lg leading-relaxed">{description}</p>
            </div>
        </div>
    );
}

export default ProjectCard;
