import { useState } from "react";

export default function Contact() {
  const [result, setResult] = useState({ message: "", type: "" }); // type: 'success' | 'error'

  const onSubmit = async (event) => {
    event.preventDefault();

    setResult({ message: "Sending....", type: "" });

    const formData = {
      name: event.target.name.value,
      email: event.target.email.value,
      message: event.target.message.value,
    };

    try {
      const res = await fetch("http://localhost:5000/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setResult({ message: data.message, type: "success" });
        event.target.reset();
      } else {
        setResult({
          message: data.message || "Something went wrong!",
          type: "error",
        });
      }

      // Optional: clear message after 5 seconds
      setTimeout(() => setResult({ message: "", type: "" }), 3000);
    } catch (error) {
      console.error(error);
      setResult({
        message: "Server error. Please try again later.",
        type: "error",
      });
    }
  };

  return (
    <div
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('./assets/footer-bg-color.png')] bg-no-repeat bg-[length:90%_auto] bg-center dark:bg-none"
    >
      <h4 className="text-center mb-2 text-lg font-Ovo text-[#F87171] font-medium">
        Connect with me
      </h4>
      <h2 className="text-center text-5xl font-Ovo">Get in touch</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I&apos;m always excited to collaborate! If you have a project, want to
        hire me, or are interested in a partnership, please use the form below
        to get in touch.
      </p>

      <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
        <input type="hidden" name="subject" value="New form Submission" />

        <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
          <input
            type="text"
            placeholder="Enter your name"
            className="flex-1 px-3 py-2 focus:ring-1 outline-none border border-gray-300 dark:border-white/30 rounded-md bg-white dark:bg-darkHover/30"
            required
            name="name"
          />
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-3 py-2 focus:ring-1 outline-none border border-gray-300 dark:border-white/30 rounded-md bg-white dark:bg-darkHover/30"
            required
            name="email"
          />
        </div>

        <textarea
          rows="6"
          placeholder="Enter your message"
          className="w-full px-4 py-2 focus:ring-1 outline-none border border-gray-300 dark:border-white/30 rounded-md bg-white mb-6 dark:bg-darkHover/30"
          name="message"
        ></textarea>

        {result.message && (
          <div
            className={`
      mb-5 mx-auto max-w-md px-4 py-3 rounded-lg text-center 
      font-medium   transition-all duration-500
      ${
        result.type === "success"
          ? "bg-green-100 text-green-800 animate-fadeIn"
          : "bg-red-100 text-red-800 animate-fadeIn"
      }
    `}
          >
            {result.message}
          </div>
        )}

        <button
          type="submit"
          className="py-2 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border dark:border-white/30 dark:hover:bg-darkHover"
        >
          Submit now
          <img src="./assets/right-arrow-white.png" alt="" className="w-4" />
        </button>
      </form>
      
      {/* Quick Response Promise */}
      <div
        className="mt-6 max-w-2xl mx-auto  border border-gray-300 dark:border-white/20
    
    p-6 rounded-xl text-center"
      >
        <h3 className="text-lg font-semibold text-[#F87171]  mb-2">
          Quick Response
        </h3>
        <p className="text-sm leading-relaxed ">
          I typically respond within{" "}
          <span className="font-medium">24–48 hours</span>. For project
          inquiries, freelance work, or potential partnerships, I'll get back to
          you promptly. If you don't hear from me, feel free to follow up —
          sometimes messages get lost in the digital void!
        </p>
      </div>
    </div>
  );
}
