"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [showProjects, setShowProjects] = useState(false);

  const toggleProjects = () => {
    setShowProjects((prevState) => !prevState);
  };

  return (
    <div className="p-4">
      <div className="flex m-10 h-[1000px] p-2 flex-row border-2 border-black justify-center">

        <div className="border-r-4 border-black w-1/4 mr-2">
          <div className="flex flex-col">
            <div className="flex items-center justify-center pt-6">
              <Image
                className="rounded-full"
                src="/2.png"
                alt="profile picture"
                height={300}
                width={220}
              />
            </div>
            <div className="mt-10 pt-8 pl-2">
              <h1 className="text-[22px] font-semibold">Achievement :</h1>
              <ul className="text-[14px] list-outside list-disc pl-2 ml-2 mr-2">
                <li className="mb-2">
                  <b className="font-semibold">Hifz-e-Quran</b> (Wafaq-ul-Madaris Al-Arabia)
                </li>
                <li>
                  <b className="font-semibold">Time Management for Personal & Professional Productivity</b>{" "}
                  (Coursera – UCI)
                </li>
              </ul>
              <h1 className="text-[22px] font-semibold mt-12">Skills :</h1>
              <ul className="mt-2 pl-2 text-[14px] font-semibold">
                <li className="pb-2">HTML</li>
                <li className="pb-2">CSS/Tailwind CSS</li>
                <li className="pb-2">JavaScript/TypeScript</li>
                <li className="pb-2">NEXT.JS</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="h-screen w-3/4">
          <div className="flex border-b-4 border-black pb-3">
            <div className="flex flex-row justify-between w-[900px]">
              <div className="flex flex-col w-[500px] items-start align-top ml-5">
                <ul>
                  <li className="text-[30px] uppercase font-semibold">Muhammad Ahmad Inamdar</li>
                  <li className="text-[18px]">Mechanical Engineer</li>
                </ul>
              </div>
              <div className="flex justify-end">
                <div className="flex flex-col text-[12px]">
                  <ul>
                    <li>+923360391890</li>
                    <li>
                      <a href="mailto:mohammad.ainamdar@gmail.com" className="underline text-blue-600">
                        mohammad.ainamdar@gmail.com
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/muhammad-ahmad-inamdar"
                        className="underline text-blue-600"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        www.linkedin.com/in/muhammad-ahmad-inamdar
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/Muhammad-Ahmad-Inamdar"
                        className="underline text-blue-600"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        github.com/Muhammad-Ahmad-Inamdar
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="ml-3">
            <ul>
              <li>
                <h1 className="text-[22px] uppercase border-b-2 border-black mb-1 ml-3 mr-4">
                  Objective
                </h1>
                <p className="text-[12px] truncate ml-4 mr-4">
                  Aspiring Mechanical Engineer with internship experience in plant maintenance in an oil refinery and organizational experience in academics as a teacher and academic coordinator at SHS Kids House. Passionate about emerging technology trends, with a strong interest in integrating AI with mechanical engineering to drive innovation.
                </p>
              </li>

              <li className="mt-20">
                <h1 className="text-[22px] uppercase border-b-2 border-black mb-1 ml-3 mr-4">
                  Experience
                </h1>
                <div className="flex flex-row justify-between ml-4 mr-4">
                  <div>
                    <h1 className="text-[15px] font-semibold">CNERGYICO PK. LTD.</h1>
                    <ul>
                      <li className="text-[16px] pl-2 mb-2">Intern</li>
                      <li className="mb-3">
                        <p className="text-[12px] text-wrap ml-6 w-[850px]">
                          Internship at Cnergyico PK Limited involved observing and learning about the application of engineering principles to plant equipment such as pumps, boilers, and heat exchangers. I actively observed maintenance tasks, including vibration analysis, and supported procurement processes using SAP.
                        </p>
                      </li>
                      <li>
                        <p className="text-[12px] text-wrap ml-6 w-[850px]">
                          This experience enhanced my technical understanding of plant equipment and maintenance practices while deepening my knowledge of engineering solutions.
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className="ml-[-500px] text-[12px]">
                    <ul>
                      <li>Karachi, Pakistan</li>
                      <li>Aug 2023 - Oct 2023</li>
                    </ul>
                  </div>
                </div>
              </li>

              <li className="mt-14">
                <h1 className="text-[22px] uppercase border-b-2 border-black mb-1 ml-3 mr-4">
                  Education
                </h1>
                <div className="flex flex-row justify-between ml-4 mr-4">
                  <div>
                    <h1 className="text-[15px] font-semibold">NED UNIVERSITY OF ENGINEERING AND TECHNOLOGY</h1>
                    <ul>
                      <li className="text-[16px] pl-2 mb-2">Bachelor of Engineering (Mechanical)</li>
                    </ul>
                  </div>
                  <div className="ml-[-500px] text-[12px]">
                    <ul>
                      <li>Karachi, 2020 – 2024</li>
                      <li>CGPA: 3.15</li>
                    </ul>
                  </div>
                </div>
              </li>

              <li className="mt-14">
                <h1
                  onClick={toggleProjects}
                  className="text-[22px] uppercase border-b-2 border-black mb-1 ml-3 mr-4 cursor-pointer text-blue-500"
                >
                  Projects
                </h1>

                {showProjects && (
                  <div className="ml-4 mr-4">
                    <div className="mt-4">
                      <h2 className="text-[15px] font-semibold">FYDP: DESIGN OF A NET ZERO ENERGY BUILDING FOR MITIGATING CLIMATE EFFECTS</h2>
                      <p className="text-[12px] pl-6 text-justify w-[800px] pr-4">
                        Performed an energy analysis of a 14-story residential building, minimizing energy consumption through HVAC optimization, insulation, and load reduction. Utilized renewable energy sources, including solar panels and Ground Source Heat Pumps (GSHPs), to achieve net zero energy.
                      </p>
                    </div>

                    <div className="mt-4">
                      <h2 className="text-[15px] font-semibold">ROTATING FIRE PROTECTION SYSTEM</h2>
                      <p className="text-[12px] pl-6 text-justify w-[800px] pr-4">
                        Developed a manually controlled firefighting system using Arduino with a rotating arm and an IR sensor for fire detection.
                      </p>
                    </div>

                    <div className="mt-4">
                      <h2 className="text-[15px] font-semibold">ANALYSIS OF SHEAR-SUPPORTED BEAM</h2>
                      <p className="text-[12px] pl-6 text-justify w-[800px] pr-4">
                        Analyzed beam performance using ANSYS, validating FEA results with analytical solutions.
                      </p>
                    </div>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
