import { useState, useEffect } from "react";

export default function Work() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);

  const work = [
    {
      name: "Mining Management System",
      category: "Enterprise Web Application",
      contribution:
        "Developed complete UI modules using React.js, SCSS, JavaScript, and jQuery. Integrated backend APIs and ensured clean, maintainable code structure within enterprise workflow standards.",
      tech: ["React.js", "SCSS", "JavaScript", "jQuery", "API Integration"],
    },
    {
      name: "Pharma Corporate Website",
      category: "Static Business Website",
      contribution:
        "Managed full UI development using HTML, CSS, JavaScript, and Bootstrap. Delivered responsive layouts and ensured cross-browser compatibility.",
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    },
    {
      name: "E-Learning Platform",
      category: "Full-Stack Learning System",
      contribution:
        "Built UI from scratch using React.js and integrated with .NET Core backend and SQL Server database. Developed admin panel modules and secure access workflows.",
      tech: ["React.js", ".NET Core", "SQL Server", "Admin Panel"],
    },
    {
      name: "Marketing Landing Pages",
      category: "Performance Marketing Projects",
      contribution:
        "Created high-converting landing pages using React.js and SCSS, focusing on responsive design and performance optimization.",
      tech: ["React.js", "JavaScript", "SCSS"],
    },
    {
      name: "Bakery Management Software",
      category: "Custom Business Automation",
      contribution:
        "Developed UI modules using React.js, JavaScript, jQuery, and API integration while learning enterprise-level business process flow.",
      tech: ["React.js", "JavaScript", "jQuery", "API Integration"],
    },
    {
      name: "Restaurant Billing System",
      category: "Cross-Platform POS Application",
      contribution:
        "Built cross-platform restaurant billing solution using .NET MAUI and React Native. Implemented order tracking, invoice generation, and billing workflows for real-time operations.",
      tech: [".NET MAUI", "React Native", "Cross-Platform", "POS System"],
    },
    {
      name: "Inventory Management System (Upcoming)",
      category: "Personal SaaS Product",
      contribution:
        "Currently developing a scalable inventory management system using React.js, Node.js, Express.js, and SQL Server.",
      tech: ["React.js", "Node.js", "Express.js", "SQL Server"],
      images: [
        "/assets/IMS/IMS_1.png",
        "/assets/IMS/IMS_2.png",
        "/assets/IMS/IMS_3.png",
        "/assets/IMS/IMS_4.png",
        "/assets/IMS/IMS_5.png",
        "/assets/IMS/IMS_6.png",
        "/assets/IMS/IMS_7.png",
      ],
    },
    {
      name: "Hair Salon Appointment App (Upcoming)",
      category: "Full-Stack Booking Application",
      contribution:
        "Developed online appointment system using Next.js, Node.js, Express.js, and MongoDB with structured booking flow and secure backend integration.",
      tech: ["Next.js", "Node.js", "Express.js", "MongoDB"],
    },
  ];

  // ESC close
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div id="work" className="w-full px-[12%] py-16">
      <h4 className="text-center mb-2 text-lg font-Ovo text-[#F87171] font-medium">
        Trusted by Businesses
      </h4>

      <h2
        className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl
 font-Ovo"
      >
        Professional Contributions
      </h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-600 dark:text-white/70">
        Clients rely on me to build scalable, secure, and performance-driven
        digital solutions. I have contributed to enterprise systems, business
        automation platforms, and high-impact web applications powering
        real-world operations.
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {work.map((project, index) => (
          <div
            key={index}
            className=" group
    relative rounded-2xl p-8
                       border border-gray-300 dark:border-white/20
                          overflow-hidden
                       flex flex-col justify-between"
          >
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
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white group-hover:text-[#F87171] transition">
                {project.name}
              </h3>

              <p className="text-sm text-[#F87171] font-medium mt-1">
                {project.category}
              </p>

              <p className="text-sm text-gray-600 dark:text-white/70 mt-4">
                {project.contribution}
              </p>
            </div>

            {/* Tech */}
            <div className="flex flex-wrap gap-2 mt-6">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className={`
            px-3 py-1
            rounded-full
            text-xs font-medium
            border
            transition-all duration-300
           cursor-pointer

                  bg-gray-100 text-gray-800 border-gray-200
                  hover:bg-red-500 hover:text-white hover:border-red-500
                  dark:bg-white/5 dark:text-white/70 dark:border-white/10
                  dark:hover:bg-red-500/20 dark:hover:text-red-400 dark:hover:border-red-400/40
               
          `}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* View Project Button */}
            {project.images && (
              <button
                onClick={() => {
                  setSelectedProject(project);
                  setCurrentImage(0);
                }}
                className="
        mt-6 text-sm font-medium
        text-[#F87171]
        relative
        after:block after:h-[2px] after:w-0
        after:bg-[#F87171]
        after:transition-all after:duration-300
        hover:after:w-full
      "
              >
                Discover More →
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-6"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white dark:bg-gray-900 rounded-2xl max-w-4xl w-full p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              className="absolute top-4 right-4 text-xl text-gray-600 dark:text-white"
              onClick={() => setSelectedProject(null)}
            >
              ✕
            </button>

            {/* Image */}
            <img
              src={selectedProject.images[currentImage]}
              alt="Preview"
              className="w-full mt-5 max-h-[60vh] object-contain rounded-lg"
            />

            {/* Navigation */}
            <div className="flex justify-between mt-6">
              <button
                onClick={() =>
                  setCurrentImage((prev) =>
                    prev === 0 ? selectedProject.images.length - 1 : prev - 1
                  )
                }
                className="px-4 py-2 bg-gray-200 dark:bg-white/10 rounded-lg"
              >
                Prev
              </button>

              <button
                onClick={() =>
                  setCurrentImage((prev) =>
                    prev === selectedProject.images.length - 1 ? 0 : prev + 1
                  )
                }
                className="px-4 py-2 bg-gray-200 dark:bg-white/10 rounded-lg"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
