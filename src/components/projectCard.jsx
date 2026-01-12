function ProjectCard({ title, github, itch, image, description }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <img 
                src={image} 
                alt={title} 
                className="rounded-lg shadow-lg w-full"
            />

            <div>
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <div className="flex gap-4 mb-2">
                    {github && (
                        <a href={github} target="_blank" rel="noopener noreferrer"
                        className="text-blue-500 hover:underline">View on GitHub</a>
                    )}

                    {itch && (
                        <a href={itch} target="_blank" rel="noopener noreferrer" 
                        className="text-pink-500 hover:underline">View on itch.io</a>
                    )}
                </div>

                <p className="text-lg leading-relaxed">{description}</p>
            </div>
        </div>
    );
}

export default ProjectCard;
