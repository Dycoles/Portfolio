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
  SiMysql,
  SiOcaml,
} from "react-icons/si";

import { DiDotnet } from "react-icons/di"; // ← C# / .NET


function Skills() {
    return (
        <section id="skills" className="p-8 scroll-mt-20 text-center">
            <h2 className="text-2xl font-bold mb-4">Skills</h2>
            <div className="grid grid-cols-4 grid-rows-3 gap-4 text-5xl justify-items-center">
                <div className="flex flex-col items-center gap-1">
                    <span className="text-2xl text-gray-400">HTML</span>
                    <FaHtml5 className="text-orange-500" />
                </div>

                <div className="flex flex-col items-center gap-1">
                    <span className="text-2xl text-gray-400">CSS</span>
                    <FaCss3Alt className="text-blue-500" />
                </div>

                <div className="flex flex-col items-center gap-1">
                    <span className="text-2xl text-gray-400">JavaScript</span>
                    <FaJs className="text-yellow-500" />
                </div>

                <div className="flex flex-col items-center gap-1">
                    <span className="text-2xl text-gray-400">React</span>
                    <FaReact className="text-cyan-500" />
                </div>

                <div className="flex flex-col items-center gap-1">
                    <span className="text-2xl text-gray-400">Node.js</span>
                    <FaNodeJs className="text-green-500" />
                </div>

                <div className="flex flex-col items-center gap-1">
                    <span className="text-2xl text-gray-400">Python</span>
                    <FaPython className="text-green-500" />
                </div>

                <div className="flex flex-col items-center gap-1">
                    <span className="text-2xl text-gray-400">C++</span>
                    <SiCplusplus className="text-red-500" />
                </div>

                <div className="flex flex-col items-center gap-1">
                    <span className="text-2xl text-gray-400">.NET</span>
                    <DiDotnet className="text-purple-500" />
                </div>

                <div className="flex flex-col items-center gap-1">
                    <span className="text-2xl text-gray-400">Java</span>
                    <FaJava className="text-red-500" />
                </div>

                <div className="flex flex-col items-center gap-1">
                    <span className="text-2xl text-gray-400">Go</span>
                    <SiGo className="text-blue-500" />
                </div>

                <div className="flex flex-col items-center gap-1">
                    <span className="text-2xl text-gray-400">MySQL</span>
                    <SiMysql className="text-blue-500" />
                </div>

                <div className="flex flex-col items-center gap-1">
                    <span className="text-2xl text-gray-400">OCaml</span>
                    <SiOcaml className="text-orange-500" />
                </div>
            </div>
        </section>
    );
}

export default Skills;