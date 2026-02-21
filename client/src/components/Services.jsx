import { useState, useEffect } from "react";
import { CgWebsite } from "react-icons/cg";
import {
  FaMobileAlt,
  FaPaintBrush,
  FaPalette,
  FaLaptopCode,
} from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  // Lock scroll when modal open
  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedService]);

  const services = [
    {
      name: "Web Development",
      icon: <CgWebsite />,
      short:
        "Modern, high-performance websites designed to convert visitors into customers.",
      details: [
        "Lightning-fast performance that keeps users engaged",
        "SEO-optimized structure to rank higher on Google",
        "Secure authentication & data protection",
        "Scalable architecture that grows with your business",
        "Smooth user experience that increases conversions",
      ],
    },
    {
      name: "Mobile App Development",
      icon: <FaMobileAlt />,
      short:
        "Cross-platform mobile apps that deliver seamless user experiences.",
      details: [
        "Apps that run smoothly on Android & iOS",
        "Secure login and real-time data integration",
        "Push notifications to boost engagement",
        "Performance-optimized user experience",
        "App Store & Play Store deployment support",
      ],
    },
    {
      name: "UI / UX Design",
      icon: <MdDesignServices />,
      short: "Intuitive designs that users love and businesses trust.",
      details: [
        "User-focused interface design",
        "Clear and engaging user journeys",
        "Modern, clean, and accessible layouts",
        "Interactive prototypes before development",
        "Conversion-focused design strategy",
      ],
    },
    {
      name: "Graphic Design",
      icon: <FaPalette />,
      short: "Creative visuals that strengthen your brand identity.",
      details: [
        "Professional logo and brand kits",
        "High-quality marketing creatives",
        "Social media visuals that attract attention",
        "Consistent brand identity design",
        "Modern and eye-catching graphics",
      ],
    },
    {
      name: "Custom Software",
      icon: <FaLaptopCode />,
      short: "Tailor-made software solutions built for efficiency and growth.",
      details: [
        "Custom ERP & CRM systems",
        "Business process automation",
        "Secure role-based access systems",
        "Optimized database architecture",
        "Scalable solutions for long-term growth",
      ],
    },
    {
      name: "Landing Pages",
      icon: <FaPaintBrush />,
      short: "High-converting landing pages built to generate leads and sales.",
      details: [
        "Conversion-focused design strategy",
        "Fast loading and mobile optimized",
        "SEO-ready structure",
        "Lead capture & analytics integration",
        "A/B testing ready layout",
      ],
    },
  ];

  return (
    <div id="services" className="w-full px-[6%] py-16 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo text-[#F87171] font-medium">
        What I Offer
      </h4>
      <h2
        className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl
 font-Ovo"
      >
        My Services
      </h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I am a{" "}
        <span className="font-dancing text-[#F87171] text-xl sm:text-2xl font-semibold">
          Software Developer
        </span>{" "}
        from Gujarat, India, building modern web, cross-platform, and desktop
        applications using technologies like React, .NET, and Node.js. I focus
        on creating scalable, high-performance, and user-friendly solutions.
      </p>

      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-10">
        {services.map((service) => (
          <div
            key={service.name}
            className="
    group
    relative
    overflow-hidden
    flex flex-col h-full
    border border-gray-200 dark:border-white/20
  
    rounded-2xl p-8
    transition-all duration-500
  
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
            <div className="relative z-10 flex flex-col h-full">
              <div
                className="
      text-4xl text-[#F87171] mb-5
    
    "
              >
                {service.icon}
              </div>

              <h3
                className="
      text-xl font-semibold mb-3
      text-gray-800 dark:text-white
      group-hover:text-[#F87171]
      transition
    "
              >
                {service.name}
              </h3>

              <p
                className="
      text-sm leading-relaxed flex-grow
      text-gray-600 dark:text-white/70
    "
              >
                {service.short}
              </p>

              <button
                onClick={() => setSelectedService(service)}
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
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedService && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm 
          flex items-center justify-center z-50 px-4"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="bg-white dark:bg-[#1e1e1e] rounded-2xl p-4 sm:p-6
            max-w-xl w-full relative shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-lg"
            >
              ✕
            </button>

            <div className="text-4xl text-[#F87171] mb-4">
              {selectedService.icon}
            </div>

            <h3 className="text-2xl font-bold mb-3 dark:text-white">
              {selectedService.name}
            </h3>

            <p className="text-gray-600 dark:text-white/70 mb-5 text-sm leading-relaxed">
              {selectedService.short}
            </p>

            <div className="space-y-3 mb-5">
              {selectedService.details.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="text-[#F87171] text-base leading-none">
                    ✓
                  </span>
                  <p className="text-gray-700 dark:text-white/80 text-sm leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* <div className="bg-[#F87171]/10 dark:bg-[#F87171]/20 p-4 rounded-lg mb-5">
              <p className="text-sm font-medium text-gray-800 dark:text-white">
                Let’s turn your vision into a high-impact digital product.
              </p>
            </div>

            <button className="w-full py-2.5 rounded-full bg-[#F87171] text-white font-semibold transition">
              Start Your Project 🚀
            </button> */}

            {/* <p className="text-xs text-center text-gray-500 mt-3">
              Limited project slots available this month.
            </p> */}
          </div>
        </div>
      )}
    </div>
  );
}
