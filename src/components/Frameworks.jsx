import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  const skills = [
    "nodejs",
    "mongodb",
    "c",
    "java",
    "css3",
    "python",
    "vscode",
    "git",
    "html5",
    "javascript",
    "microsoft365",
    "react",
    "mysql",
    "figma",
    "canva",
    "wordpress",
  ];
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={45}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.png`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={30} radius={100} reverse speed={2}>
        {skills.reverse().map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.png`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img src={src} className="duration-200 rounded-sm hover:scale-110" />
);
