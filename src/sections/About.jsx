import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";

const About = () => {
  const grid2Container = useRef();
  const grid4Container = useRef();

  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>

      {/* ✅ Only one grid container here */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">

        {/* Grid 4 (Now 1st) - Photo */}
        <div className="grid-special-color grid-4">
          <div
            ref={grid4Container}
            className="relative flex items-center justify-center w-full h-full"
          >
            <img
              src="assets/socials/raginiportfolio.png" // 🔁 Replace with your actual image
              alt="Ragini Pathak"
              className="w-full h-full object-cover rounded-2xl shadow-lg border border-gray-300"
            />
          </div>
        </div>

        {/* Grid 5 (Now 2nd) - Tech Stack */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            {/* <p className="headText">Tech Stack</p> */}
        <p className="subtext">
  I’m a final year B.Tech (CSE) student at ABES Institute of Technology,  passionate about solving real-world problems through code and creativity.
  <br />
  I specialize in building robust and scalable applications using a versatile tech stack, by transforming complex challenges into elegant, user-focused solutions.
</p>

          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>

        {/* Grid 3 - Time Zone */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              I'm based in Delhi, India, and open to remote work worldwide.
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>

        {/* Grid 1 (Now 4th) - Intro */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="subtext">
              I build responsive, performant web solutions - from frontend finesse to backend logic, with a focus on clean design and seamless user experience.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>

        {/* Grid 2 (Now 5th) - Skills Cards */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-5xl text-gray-500">
              CODE IS ART
            </p>
            <Card style={{ rotate: "75deg", top: "30%", left: "20%" }} text="Problem Solving" containerRef={grid2Container} />
            <Card style={{ rotate: "-30deg", top: "60%", left: "45%" }} text="Front-End" containerRef={grid2Container} />
            <Card style={{ rotate: "90deg", bottom: "30%", left: "70%" }} text="Back-End" containerRef={grid2Container} />
            <Card style={{ rotate: "-45deg", top: "55%", left: "0%" }} text="UI/UX" containerRef={grid2Container} />
            <Card style={{ rotate: "20deg", top: "10%", left: "38%" }} text="Algorithms" containerRef={grid2Container} />
            <Card style={{ rotate: "30deg", top: "70%", left: "70%" }} image="assets/logos/vscode.png" containerRef={grid2Container} />
            <Card style={{ rotate: "-45deg", top: "70%", left: "25%" }} image="assets/logos/microsoft365.png" containerRef={grid2Container} />
            <Card style={{ rotate: "-45deg", top: "5%", left: "10%" }} image="assets/logos/github-pink.png" containerRef={grid2Container} />
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
