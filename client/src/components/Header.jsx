export default function Header() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 pt-28 pb-14 flex flex-col items-center justify-center text-center gap-4">
      <img
        src="./assets/profile-img.png"
        alt="profile"
        className="rounded-full w-24 sm:w-32"
      />

      <h3 className="flex items-end gap-2 text-lg sm:text-xl md:text-2xl mb-3 font-Ovo">
        Hi! I&apos;m Mihir
        <img
          src="./assets/hand-icon.png"
          alt="wave"
          className="w-5 sm:w-6 mb-1"
        />
      </h3>

      <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-[66px] font-Ovo">
        Software Developer
      </h1>

      <p className="max-w-xl sm:max-w-2xl mx-auto font-Ovo text-sm sm:text-base md:text-lg">
        I’m a software developer from Gujarat, India, working across web,
        Android, and desktop technologies.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mt-4">
        <a
          href="#contact"
          className="px-6 sm:px-10 py-2 rounded-full bg-[#F87171] text-white flex items-center gap-2"
        >
          Contact me{" "}
          <img src="./assets/right-arrow-white.png" alt="" className="w-4" />
        </a>

        {/* <a
          href="./assets/dev-icon.png"
          download
          className="px-6 sm:px-10 py-2 rounded-full border border-gray-300 dark:border-white/25 hover:bg-slate-100/70 dark:hover:bg-darkHover flex items-center gap-2 bg-white dark:bg-transparent dark:text-white text-sm sm:text-base"
        >
          My Resume{" "}
          <img
            src="./assets/download-icon.png"
            alt=""
            className="w-4 dark:invert"
          />
        </a> */}
      </div>
    </div>
  );
}
