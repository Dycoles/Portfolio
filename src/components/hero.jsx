import heroBg from "../assets/hero/hero-bg.jpg";
import profilePic from "../assets/hero/profile-pic.jpg";

function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.5)), url(${heroBg})`,
      }}
    >
      <div className="text-center text-gray-200">
        <img src={profilePic} alt="Dylan Coles" className="w-40 h-40 md:w-52 md:h-52 rounded-full mx-auto mb-6 shadow-lg object-cover"/>

        <h1 className="text-3xl md:text-5xl font-semibold tracking-wide">
          Dylan Nicholas Coles
        </h1>
      </div>
    </section>
  );
}

export default Hero;
