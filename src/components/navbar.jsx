function Navbar() {
    return (
        <section id="home">
            <nav className="bg-gray-800 p-4 fixed w-full top-0 z-10">
                <div className="container mx-auto flex items-center justify-between">
                    <a href="#home" className="text-white hover:text-gray-400 text-lg font-semibold 
transition-all duration-200 transform hover:scale-105">
                        Home
                    </a>
                    <div className="flex space-x-8">
                        <a href="#skills" className="text-white hover:text-gray-400 text-lg font-semibold 
transition-all duration-200 transform hover:scale-105">
                            Skills
                        </a>
                        <a href="#projects" className="text-white hover:text-gray-400 text-lg font-semibold 
transition-all duration-200 transform hover:scale-105">
                            Projects
                        </a>
                        <a href="#contact" className="text-white hover:text-gray-400 text-lg font-semibold 
transition-all duration-200 transform hover:scale-105">
                            Contact
                        </a>
                    </div>
                </div>
            </nav>
        </section>
    );
}

export default Navbar;