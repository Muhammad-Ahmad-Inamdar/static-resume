"use client";
import { useState } from "react";
import Link from "next/link";

export default function Resume() {
  const [showProjects, setShowProjects] = useState(false);

  const toggleProjects = () => {
    setShowProjects((prevState) => !prevState);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 flex justify-center">
      {/* CV Section */}
      <div className="w-[8.27in] h-auto mx-auto p-8 bg-white shadow-md border border-gray-300 font-sans">
        {/* Header */}
        <div className="flex justify-between border-b pb-4">
          <div>
            <h1 className="text-2xl font-bold uppercase">Muhammad Ahmad Inamdar</h1>
            <h2 className="text-lg text-gray-600">Mechanical Engineer</h2>
          </div>
          <div className="text-sm text-gray-700 text-right">
            <p>+923360391890</p>
            <Link href="mailto:mohammad.ainamdar@gmail.com" className="text-blue-500 underline">
              mohammad.ainamdar@gmail.com
            </Link>
            <div>
              <Link
                href="https://www.linkedin.com/in/muhammad-ahmad-inamdar"
                className="text-blue-500 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </Link>
            </div>
            <div>
              <Link
                href="https://github.com/Muhammad-Ahmad-Inamdar"
                className="text-blue-500 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Link>
            </div>
          </div>
        </div>

        {/* Objective */}
        <section className="mt-4">
          <h2 className="text-lg font-semibold border-b pb-1">Objective</h2>
          <p className="text-sm text-gray-700 mt-2">
            Aspiring Mechanical Engineer with internship experience in plant maintenance in an oil refinery and
            organizational experience in academics as a teacher and academic coordinator. Passionate about integrating
            AI with mechanical engineering to drive innovation.
          </p>
        </section>

        {/* Experience */}
        <section className="mt-4">
          <h2 className="text-lg font-semibold border-b pb-1">Experience</h2>
          <div className="mt-2 text-sm text-gray-700">
            <h3 className="font-bold">Cnergyico PK Limited</h3>
            <p className="text-gray-600">Intern | Karachi, Pakistan | Aug 2023 - Oct 2023</p>
            <p className="mt-1">
              Observed and learned about the application of engineering principles to plant equipment such as pumps,
              boilers, and heat exchangers. Actively supported maintenance tasks and procurement processes using SAP.
            </p>
          </div>
        </section>

        {/* Education */}
        <section className="mt-4">
          <h2 className="text-lg font-semibold border-b pb-1">Education</h2>
          <div className="mt-2 text-sm text-gray-700">
            <h3 className="font-bold">NED University of Engineering and Technology</h3>
            <p className="text-gray-600">Bachelor of Engineering (Mechanical) | Karachi, 2020 – 2024 | CGPA: 3.15</p>
          </div>
        </section>

        {/* Skills */}
        <section className="mt-4">
          <h2 className="text-lg font-semibold border-b pb-1">Skills</h2>
          <ul className="mt-2 text-sm text-gray-700 list-disc list-inside">
            <li>HTML</li>
            <li>CSS / Tailwind CSS</li>
            <li>JavaScript / TypeScript</li>
            <li>NEXT.JS</li>
          </ul>
        </section>

        {/* Projects */}
        <section className="mt-4">
          <h1
            onClick={toggleProjects}
            className="text-[22px] uppercase border-b-2 border-black mb-1 ml-3 mr-4 cursor-pointer text-blue-500"
          >
            Projects
          </h1>

          {showProjects && (
            <div className="ml-4 mr-4">
              <div className="mt-4">
                <h2 className="text-[15px] font-semibold">
                  FYDP: DESIGN OF A NET ZERO ENERGY BUILDING FOR MITIGATING CLIMATE EFFECTS
                </h2>
                <p className="text-[12px] pl-6 text-justify w-[100%] pr-4">
                  Performed an energy analysis of a 14-story residential building, minimizing energy consumption through HVAC optimization, insulation, and load reduction. Utilized renewable energy sources, including solar panels and Ground Source Heat Pumps (GSHPs), to achieve net zero energy.
                </p>
              </div>

              <div className="mt-4">
                <h2 className="text-[15px] font-semibold">ROTATING FIRE PROTECTION SYSTEM</h2>
                <p className="text-[12px] pl-6 text-justify w-[100%] pr-4">
                  Developed a manually controlled firefighting system using Arduino with a rotating arm and an IR sensor for fire detection.
                </p>
              </div>

              <div className="mt-4">
                <h2 className="text-[15px] font-semibold">ANALYSIS OF SHEAR-SUPPORTED BEAM</h2>
                <p className="text-[12px] pl-6 text-justify w-[100%] pr-4">
                  Analyzed beam performance using ANSYS, validating FEA results with analytical solutions.
                </p>
              </div>
            </div>
          )}
        </section>

        {/* Achievements */}
        <section className="mt-4">
          <h2 className="text-lg font-semibold border-b pb-1">Achievements</h2>
          <ul className="mt-2 text-sm text-gray-700 list-disc list-inside">
            <li><strong>Hifz-e-Quran</strong> (Wafaq-ul-Madaris Al-Arabia)</li>
            <li><strong>Time Management for Personal & Professional Productivity</strong> (Coursera – UCI)</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
