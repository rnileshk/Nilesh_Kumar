import { useEffect, useState } from "react";
import api from "../api";

function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    api.get("/api/skills").then((res) => setSkills(res.data)).catch(() => {});
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

      <div className="grid md:grid-cols-3 gap-6">
        {Object.keys(grouped).length === 0 && (
          <div className="card p-6 text-slate-400">No skills added yet.</div>
        )}

        {Object.entries(grouped).map(([category, items]) => (
          <div key={category} className="card p-6">
            <h3 className="text-xl font-bold mb-5 text-blue-300">{category}</h3>
            <div className="flex flex-wrap gap-3">
              {items.map((skill) => (
                <span
                  key={skill.id}
                  className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;