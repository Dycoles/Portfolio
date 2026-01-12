import ProjectCard from "./projectCard";
import corgiQuestPic from "../assets/project_images/corgi-quest-pic.png";
import jungleEscapePic from "../assets/project_images/jungle-escape.png";
import untilDawnOrDeathPic from "../assets/project_images/game-pic-3.png";
import java2048Pic from "../assets/project_images/2048-pic.png";
import coffeePic from "../assets/project_images/coffee-pic.png";
import az_holdem_pic from "../assets/project_images/az_holdem.png";
import spellcheckerPic from "../assets/project_images/spellchecker_img.png";

const projects = [
    {
        title: "3D Turn Based Untiy Game - Corgi Quest",
        github: "https://github.com/Dycoles/G-351-Final-Project",
        image: corgiQuestPic,
        description: "Corgi quest is a short 5 minute turn based game developed in Unity when I was first starting to learn Game Development. The game features turn based combat, basic sound effects, music that changes based on when you enter/exit battle, and several lighting/particle effects",
    },
    {
        title: "2D Platformer Unity Game - Jungle Escape",
        github: "https://github.com/Dycoles/2D-Explorer-Game",
        itch: "https://pennyenterline.itch.io/jungle-escape",
        image: jungleEscapePic,
        description: "Jungle Escape is a simple 2D platformer developed in Unity. The main feature of the game is a feature where you can switch between characters with different abilities at the press of a button. The player uses these abilities to traverse through the level",
    },
    {
        title: "3D Platformer Unity Game - Until Dawn or Death",
        itch: "https://shaggyschmacky.itch.io/until-death-or-dawn",
        image: untilDawnOrDeathPic,
        description: "Until Dawn or Death is a Tower defense game developed in unity. The player must survive waves of ever more difficult-to-defeat enemies by strategically placing towers across the map. (Note: No github file present as some substance painter files are too large to be uploaded.).",
    },
    {
        title: "Coffee Fanatics Website (HTML/CSS/Javascript)",
        github: "https://github.com/dmknapp2385/coffeeFanatics",
        image: coffeePic,
        description: "\"Coffee Fanatics\" is a website developed as a final project for one of my Web Development classes. It features a home page that gives information about the website, a beans page which informs the user about different types of coffee beans, several pages informing the user about brewing techniques, a page that shows you local caffes, a page that shows you some coffee making products, and a page that allows the user to save custom brews. This website makes extensive use of HTML, CSS, and Javascript",
    },
    {
        title: "Spellchecker (Java)",
        github: "https://github.com/ua-ben/csc345-group-final",
        image: spellcheckerPic,
        description: "This spellchecker program developed in Java allows the user to input a word. If the word is correctly spelled, nothing happens. However, if the word is incomplete or misspelled, the program alerts the user and then suggests several words that the user may have been trying to spell.",
    },
    {
        title: "Texas Holdem (Java)",
        github: "https://github.com/CSC210-Arizona/azholdem-Dycoles",
        image: az_holdem_pic,
        description: "This Texas holdem program allows the user to play several rounds of Texas holdem against a variable amount of other opponents depending on input. Each round, each player is dealt a hand. Afterwards, the river is dealt out from the remaining cards in the deck. Whichever player wins will gain money while the others will lose money. After the game concludes, the player is prompted to either continue or quit.",
    },
    {
        title: "2048 Game (Java)",
        github: "https://github.com/Dycoles/CSC-335-Final-Project--2048",
        image: java2048Pic,
        description: "This program allows the user to play the puzzle game 2048. When the code is run, it displays a GUI for 2048. The rules for the game are simple: Combine numbers until those numbers add up to 2048. If the board fills up, the player loses. The player's score is then recorded and stored in a Leaderboard.",
    },
];
function Projects() {
    return (
        <section id="projects" className="p-8 scroll-mt-20">
            <h2 className="text-2xl font-bold mb-4 text-center">Projects</h2>
            <div className="space-y-12">
                {projects.map((project, index) => (
                    <ProjectCard 
                        key={index}
                        title={project.title}
                        itch={project.itch}
                        github={project.github}
                        image={project.image}
                        description={project.description}
                    ></ProjectCard>
                ))}
            </div>
        </section>
    );
}

export default Projects;