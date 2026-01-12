import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
} from "react-icons/fa";

import {
  SiCplusplus,
  SiGo,
  SiMongodb,
  SiOcaml,
} from "react-icons/si";

import { DiDotnet } from "react-icons/di"; // ← C# / .NET


function Skills() {
    return (
        <section id="skills" className="p-8 bg-white scroll-mt-20 text-center">
            <h2 className="text-2xl font-bold mb-4">Skills</h2>
            <div className="grid grid-cols-4 grid-rows-3 gap-4 text-5xl justify-items-center">
                <FaHtml5 className="text-orange-500"/>
                <FaCss3Alt className="text-blue-500" />
                <FaJs className="text-yellow-500" />
                <FaReact className="text-cyan-500" />

                <FaNodeJs className="text-green-500" />
                <FaPython className="text-green-500" />
                <SiCplusplus className="text-red-500" />
                <DiDotnet className="text-purple-500" />

                <FaJava className="text-red-500" />
                <SiGo className="text-blue-500" />
                <SiMongodb className="text-green-500" />
                <SiOcaml className="text-orange-500" />
            </div>

        </section>
    );
}

export default Skills;