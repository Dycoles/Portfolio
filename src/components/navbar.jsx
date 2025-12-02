function Navbar() {
    return (
        <section id="home">
            <nav className="bg-gray-800 p-4 fixed w-full top-0 z-10">
                <div className="container mx-auto">
                    <a href="#home" className="text-white text-lg font-semibold">Home</a>
                    <div className="float-right mr-8">
                        <a href="#skills" className="text-white text-lg font-semibold">Skills</a>
                    </div>
                    <div className="float-right mr-8">
                        <a href="#" className="text-white text-lg font-semibold">Projects</a>
                    </div>
                    <div className="float-right mr-8">
                        <a href="#contact" className="text-white text-lg font-semibold">Contact</a>
                    </div>
                </div>
            </nav>
        </section>
    );
}

export default Navbar;