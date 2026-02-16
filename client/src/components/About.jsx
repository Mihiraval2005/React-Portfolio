import { TbWorld } from "react-icons/tb";
import { FiDatabase } from "react-icons/fi";
import { FaMobileAlt } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";

export default function About() {
  const tools = [
    { name: "vscode", icon: "./assets/vscode.png" },
    { name: "visual stdio", icon: "./assets/visualstdio.png" },
    { name: "cursor", icon: "./assets/cursor.png" },
    { name: "firebase", icon: "./assets/firebase.png" },
    { name: "mongodb", icon: "./assets/mongodb.png" },
    { name: "figma", icon: "./assets/figma.png" },
    { name: "git", icon: "./assets/git.png" },
  ];

  const data = [
    {
      name: "Frontend Development",
      icon: <TbWorld />,
      primary: "React",
      skills: [
        "React",
        "TypeScript",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Bootstrap",
        "Next.js",
      ],
    },
    {
      name: "Backend Development",
      icon: <FiDatabase />,
      primary: "Node.js",
      skills: [
        "Node.js",
        ".NET Core",
        "Express.js",
        "REST APIs",
        "Authentication",
      ],
    },
    {
      name: "Mobile Development",
      icon: <FaMobileAlt />,
      primary: "React Native",
      skills: ["React Native", ".NET MAUI", "Android Development"],
    },
    {
      name: "Programming Languages",
      icon: <FaCode />,
      primary: "JavaScript",
      skills: ["C", "C++", "C#", "JavaScript", "TypeScript"],
    },
  ];

  return (
    <div
      id="about"
      className="w-full px-6 sm:px-[8%] lg:px-[6%] py-12 scroll-mt-20"
    >
      <h4 className="text-center mb-2 text-lg font-Ovo text-[#F87171] font-medium">
        Introduction
      </h4>

      <h2 className="text-center text-3xl  lg:text-2xl sm:text-3xl md:text-4xl 
 font-Ovo">
        About me
      </h2>

      <div className="flex w-full justify-center mt-8 sm:mt-12">
        <div className="w-full max-w-6xl flex flex-col items-center">
          {/* Description */}
          <p className="mb-10 text-sm sm:text-base leading-relaxed text-center sm:text-justify max-w-3xl font-Ovo px-2 sm:px-0">
            Hi, I’m{" "}
            <span className="font-dancing text-[#F87171] text-xl sm:text-2xl font-semibold">
              Mihir Raval
            </span>{" "}
            . I began my journey as a Frontend Developer, driven by a passion
            for crafting intuitive and engaging user interfaces. Over time, my
            curiosity for how systems work behind the scenes led me to explore
            backend development, where I have worked extensively with
            technologies like .NET Core and Node.js.
            <br className="hidden sm:block" />
            <br />
            Throughout my career, I have gained strong experience building
            solutions across web, Android, and desktop platforms. This
            well-rounded exposure allows me to approach development with a
            full-stack mindset and deliver scalable, performant, and
            user-focused applications.
          </p>

          {/* Skill Cards */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7 w-full">
            {data.map((item) => (
              <li
                key={item.name}
                className="
    group
    relative
    overflow-hidden
    rounded-2xl
    border border-gray-200 dark:border-white/20
    
    p-6
    
 
    
   
  "
              >
                {/* 🔥 Gradient Hover Effect */}
                <div
                  className="
    absolute inset-0
    bg-gradient-to-br
    from-[#F87171]/10
    via-transparent
    to-purple-500/10
    opacity-0
    group-hover:opacity-100
    transition duration-500
  "
                ></div>

                {/* Content Wrapper */}
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-5">
                    <div
                      className="
          w-11 h-11
          rounded-xl flex items-center justify-center
          bg-red-50 dark:bg-white/5
          border border-red-100 dark:border-white/10
          text-red-500 dark:text-red-400
          text-lg
         
        "
                    >
                      {item.icon}
                    </div>

                    <h3
                      className="
        text-lg font-semibold
        text-gray-900 dark:text-white
        group-hover:text-red-500 dark:group-hover:text-red-400
        transition
      "
                    >
                      {item.name}
                    </h3>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-1">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`
            px-3 py-1
            rounded-full
            text-xs font-medium
            border
            transition-all duration-300
           
                  bg-gray-100 text-gray-800 border-gray-200
                  hover:bg-red-500 hover:text-white hover:border-red-500
                  dark:bg-white/5 dark:text-white/70 dark:border-white/10
                  dark:hover:bg-red-500/20 dark:hover:text-red-400 dark:hover:border-red-400/40
               
          `}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/* Tools */}
          <h4 className="mt-12 mb-6 text-sm sm:text-base text-gray-700 font-Ovo dark:text-white/80 text-center">
            Tools I use
          </h4>

          <ul className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 max-w-3xl">
            {tools.map((tool) => (
              <li
                key={tool.name}
                className="
                  flex items-center justify-center
                  w-12 sm:w-14 aspect-square
                  border border-gray-300 dark:border-white/30
                  rounded-lg
                  transition
                  hover:-translate-y-1
                "
              >
                <img
                  src={tool.icon}
                  alt={tool.name}
                  className="w-5 sm:w-7 object-contain"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
