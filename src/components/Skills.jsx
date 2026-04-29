import { useEffect, useState } from "react";
import api from "../api";

import {
  FaJava,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaGitAlt,
  FaBootstrap,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTypescript,
  SiCplusplus,
  SiTailwindcss,
  SiSpringboot,
  SiExpress,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiVercel,
  SiRender,
  SiNetlify,
} from "react-icons/si";

import { TbApi, TbBinaryTree, TbDatabase } from "react-icons/tb";
import { MdOutlineArchitecture } from "react-icons/md";
import { GiProcessor, GiNetworkBars } from "react-icons/gi";

const skillIcons = {
  Java: FaJava,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  "C++": SiCplusplus,

  CSS3: FaCss3Alt,
  HTML5: FaHtml5,
  "React.js": FaReact,
  "Tailwind CSS": SiTailwindcss,
  Bootstrap: FaBootstrap,

  "Spring Boot": SiSpringboot,
  "Node.js": FaNodeJs,
  "Express.js": SiExpress,
  Microservices: GiNetworkBars,
  "REST APIs": TbApi,

  MySQL: SiMysql,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  "Firebase Firestore": SiFirebase,

  Git: FaGitAlt,
  Github: FaGithub,
  Vercel: SiVercel,
  Render: SiRender,
  Netlify: SiNetlify,

  "Core Concepts": GiProcessor,
  "Data Structure & Algorithms": TbBinaryTree,
  OOPs: MdOutlineArchitecture,
  DBMS: TbDatabase,
};

function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    api
      .get("/api/skills")
      .then((res) => {
        console.log("SKILLS DATA:", res.data);
        setSkills(Array.isArray(res.data) ? res.data : []);
      })
      .catch((err) => {
        console.log("SKILLS FETCH ERROR:", err);
        setSkills([]);
      });
  }, []);

  const grouped = skills.reduce((acc, skill) => {
    const key = skill.category || "Other";
    acc[key] = acc[key] || [];
    acc[key].push(skill);
    return acc;
  }, {});

  return (
    <section id="skills" className="section">
      <h2 className="title">Technical Skills</h2>

      {skills.length === 0 && (
        <div className="card p-6 text-slate-400">
          No skills added yet. Please add skills from Admin Dashboard.
        </div>
      )}

      <div className="grid md:grid-cols-3 gap-6">
        {Object.entries(grouped).map(([category, items]) => (
          <div key={category} className="card p-6">
            <h3 className="text-xl font-bold mb-5 text-blue-300">
              {category}
            </h3>

            <div className="flex flex-wrap gap-3">
              {items.map((skill) => {
                const Icon = skillIcons[skill.name];

                return (
                  <span
                    key={skill.id}
                    className="flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm"
                  >
                    {Icon ? (
                      <Icon className="text-lg text-blue-300" />
                    ) : (
                      <span>⚙️</span>
                    )}
                    {skill.name}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;