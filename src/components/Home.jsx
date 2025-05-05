import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Home = () => {
  return (
    <div id="home" className="bg-[#FFFFFF]">
      <div className="max-w-[85%] mx-auto font-inter grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-screen">
        {/* Left Section with Animation */}
        <motion.div
          className="order-2 lg:order-1 flex flex-col items-center md:items-start justify-start space-y-5 text-center md:text-left"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
        >
          <h1 className="text-3xl md:text-5xl font-bold">
            I’m <span className="text-[#0e7490]">Siva Sankar</span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-bold flex gap-2">
            <span className="text-[#0e7490]">I’m a</span>
            <Typewriter
              options={{
                strings: ["Coder.","Web Developer.", "Designer."],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </h2>

          <p className="text-lg md:text-xl text-gray-700 font-medium">
            A passionate MERN stack developer with a strong interest in creating
            user-friendly and responsive web applications. I’m a quick learner
            and enthusiastic about building real-world projects to sharpen my
            skills.
          </p>

          {/* Contact Info */}
          <div className="flex flex-col space-y-3 md:space-y-0 md:flex-row md:gap-6 text-lg md:text-xl font-semibold">
            <div className="flex items-center gap-3">
              <FaLocationDot className="text-[#0e7490]" size={20} />
              <span>Sivakasi</span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#0e7490]" size={20} />
              <span>+91</span> <span>9514407348</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-[#0e7490]" size={20} />
              <span>sivasankar232002@gmail.com</span>
            </div>
          </div>
          <br />
          <div className="bg-[#0e7490] hover:bg-[#155e75] transition-all duration-200 ease-in-out px-5 py-2 rounded-2xl font-bold font-poppins">
            <a
              href="/Siva-Sankar-Resume.pdf"
              download=""
              className="text-white"
            >
              Download CV
            </a>
          </div>
        </motion.div>

        {/* Right Image with Animation */}
        <motion.div
          className="order-1 lg:order-2 flex justify-end items-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
        >
          <img
            className="sm:w-[100%] lg:w-[85%] rounded-[50px]"
            src="/profile-pic2.png"
            alt="Profile"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
