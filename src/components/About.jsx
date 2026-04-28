import { useEffect, useState } from "react";
import api from "../api";
import { LocateIcon, Mail, MapPin, Phone } from "lucide-react";

function About() {
  const [about, setAbout] = useState({});

  useEffect(() => {
    api
      .get("/api/about")
      .then((res) => setAbout(res.data))
      .catch(() => {});
  }, []);

  return (
    <section id="about" className="section">
      <h2 className="title">About Me</h2>

      <div className="card p-8 grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h3 className="text-3xl font-bold">
            {about.fullName || "Nilesh Kumar"}
          </h3>
          <p className="mt-2 text-blue-300">
            {about.role || "Java Full Stack Developer"}
          </p>
          <p className="mt-6 text-slate-300 leading-8">
            {about.bio ||
              "I am a Java Full Stack Developer skilled in Spring Boot, REST APIs, React, PostgreSQL and deployment."}
          </p>
          <ul className="mt-4 space-y-2 text-slate-300">
            <li>• Build REST APIs with Spring Boot</li>
            <li>• Design clean React UIs</li>
            <li>• Deploy & debug in production</li>
          </ul>
        </div>

        <div className="space-y-4 text-slate-300">
          <p className="flex items-center gap-2">
            <MapPin /> {about.location || "India"}
          </p>
          <p className="flex items-center gap-2">
            <Mail /> {about.email || "your@email.com"}
          </p>
          <p className="flex items-center gap-2">
            <Phone /> {about.phone || "+91 XXXXX XXXXX"}
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
