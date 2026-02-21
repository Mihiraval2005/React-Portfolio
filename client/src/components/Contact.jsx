import { useState } from "react";

export default function Contact() {
  const [result, setResult] = useState({ message: "", type: "" }); // type: 'success' | 'error'
  const [showModal, setShowModal] = useState(false);
  const [callResult, setCallResult] = useState({ message: "", type: "" });

  const onSubmit = async (event) => {
    event.preventDefault();

    setResult({ message: "Sending....", type: "" });

    const formData = {
      name: event.target.name.value,
      email: event.target.email.value,
      message: event.target.message.value,
    };

    try {
      // const res = await fetch("https://portfolio-api-y0l7.onrender.com/api/contact/", {
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
      className="w-full px-[6%] py-10 scroll-mt-20 bg-[url('./assets/footer-bg-color.png')] bg-no-repeat bg-[length:90%_auto] bg-center dark:bg-none"
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
      {/* <div
        className="mt-10 max-w-2xl mx-auto border border-gray-300 dark:border-white/20 p-6 rounded-xl text-center cursor-pointer  duration-300"
        onClick={() => setShowModal(true)}
      >
        <h3 className="text-lg font-semibold text-[#F87171] mb-2">
          Book a 1:1 Call
        </h3>
        <p className="text-sm leading-relaxed mb-4">
          Want to discuss your project in detail? Click here to schedule a 1:1
          call.
        </p>
        <button className="py-2 px-6 bg-[#F87171] text-white rounded-full hover:bg-[#f65c5c] transition-colors duration-300">
          Schedule Now
        </button>
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4">
          <div className="bg-white dark:bg-[#1e1e1e] p-6 rounded-2xl w-full max-w-md relative shadow-lg">
           
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:hover:text-white text-lg"
              onClick={() => setShowModal(false)}
            >
              ✕
            </button>

           
            <h2 className="text-2xl font-Ovo text-center font-semibold mb-6">
              Book a 1:1 Call
            </h2>

           
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                setCallResult({ message: "Submitting...", type: "" });

                const formData = {
                  name: e.target.name.value,
                  email: e.target.email.value,
                  phone: e.target.phone.value,
                  type: e.target.type.value,
                  datetimeDescription: e.target.datetimeDescription.value,
                };

                try {
                  const res = await fetch(
                     
                    "http://localhost:5000/api/book-call",
                    {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify(formData),
                    }
                  );
                  const data = await res.json();

                  if (res.ok) {
                    setCallResult({ message: data.message, type: "success" });
                    e.target.reset();
                  } else {
                    setCallResult({
                      message: data.message || "Error!",
                      type: "error",
                    });
                  }

                  setTimeout(
                    () => setCallResult({ message: "", type: "" }),
                    5000
                  );
                } catch (err) {
                  setCallResult({ message: "Server error", type: "error" });
                }
              }}
              className="space-y-4"
            >
              
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full text-sm px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F87171] dark:bg-[#2a2a2a] dark:border-white/30"
                />
              </div>

               
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full text-sm px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F87171] dark:bg-[#2a2a2a] dark:border-white/30"
                />
              </div>

             
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium mb-1"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  className="w-full text-sm px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F87171] dark:bg-[#2a2a2a] dark:border-white/30"
                />
              </div>

               
              <div>
                <span className="block text-sm font-medium mb-2">
                  Preferred Call Type
                </span>
                <div className="flex gap-3 mt-1">
                 
                  <label className="flex-1 cursor-pointer">
                    <input
                      type="radio"
                      name="type"
                      value="phone"
                      required
                      className="peer hidden"
                    />
                    <div
                      className="border rounded-lg p-1 text-center transition-all duration-300 
                      peer-checked:bg-[#F87171] peer-checked:text-white peer-checked:border-[#F87171]
                      hover:bg-[#fcdede] hover:border-[#F87171] dark:border-white/30 dark:hover:bg-white/10"
                    >
                      Phone Call
                    </div>
                  </label>

                 
                  <label className="flex-1 cursor-pointer">
                    <input
                      type="radio"
                      name="type"
                      value="zoom"
                      required
                      className="peer hidden"
                    />
                    <div
                      className="border rounded-lg p-1 text-center transition-all duration-300 
                      peer-checked:bg-[#F87171] peer-checked:text-white peer-checked:border-[#F87171]
                      hover:bg-[#fcdede] hover:border-[#F87171] dark:border-white/30 dark:hover:bg-white/10"
                    >
                      Zoom
                    </div>
                  </label>
                </div>
              </div>

               
              <div>
                <label
                  htmlFor="datetimeDescription"
                  className="block text-sm font-medium mb-1"
                >
                  Date, Time & Notes
                </label>
                <textarea
                  id="datetimeDescription"
                  name="datetimeDescription"
                  rows={3}
                  placeholder="Enter preferred date, time, and any notes..."
                  required
                  className="w-full text-sm px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F87171] dark:bg-[#2a2a2a] dark:border-white/30"
                ></textarea>
              </div>

              
              {callResult.message && (
                <div
                  className={`px-4 py-2 rounded-md text-center font-medium ${
                    callResult.type === "success"
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {callResult.message}
                </div>
              )}

               
              <button
                type="submit"
                className="w-full py-3 px-6 bg-[#F87171] text-white rounded-full font-medium hover:bg-[#f65c5c] transition-colors duration-300"
              >
                Book Call
              </button>
            </form>
          </div>
        </div>
      )} */}

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
