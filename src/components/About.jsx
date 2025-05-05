import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaGitAlt,
  FaFigma,
  FaNode,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiBootstrap,
  SiExpress,
  SiNextdotjs,
  SiNetlify,
  SiMongodb,
  SiSocketdotio,
  SiPostman,
  SiGraphql,
  SiRedux,
  SiJsonwebtokens,
  SiRender,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { DiVisualstudio } from "react-icons/di";
import { IoLogoNpm, IoLogoVercel } from "react-icons/io5";
import { motion } from "framer-motion";

const About = () => {
  const skills = [
    { icon: <FaHtml5 size={40} className="text-[#e34c26]" />, name: "HTML5" },
    { icon: <FaCss3Alt size={40} className="text-[#264de4]" />, name: "CSS3" },
    {
      icon: <FaJsSquare size={40} className="text-[#f7df1e]" />,
      name: "JavaScript",
    },
    {
      icon: <SiBootstrap size={40} className="text-[#563d7c]" />,
      name: "Bootstrap",
    },
    {
      icon: <SiTailwindcss size={40} className="text-[#38bdf8]" />,
      name: "Tailwind CSS",
    },
    {
      icon: <FaReact size={40} className="text-[#61dbfb]" />,
      name: "React.js",
    },
    { icon: <SiRedux size={40} className="text-[#764abc]" />, name: "Redux" },
    {
      icon: <TbBrandFramerMotion size={40} className="text-[#1c1c1c]" />,
      name: "Framer Motion",
    },
    { icon: <IoLogoNpm size={40} className="text-[#CB3837]" />, name: "NPM" },
    { icon: <FaNode size={40} className="text-[#68a063]" />, name: "Node.js" },
    {
      icon: <SiExpress size={40} className="text-[#000000]" />,
      name: "Express.js",
    },
    {
      icon: <SiMongodb size={40} className="text-[#47a248]" />,
      name: "MongoDB",
    },
    {
      icon: <SiJsonwebtokens size={40} className="text-[#232F3E]" />,
      name: "JWT",
    },
    {
      icon: <SiSocketdotio size={40} className="text-[#010101]" />,
      name: "Socket.IO",
    },
    { icon: <FaGitAlt size={40} className="text-[#f05032]" />, name: "Git" },
    { icon: <FaGithub size={40} className="text-black" />, name: "GitHub" },
    {
      icon: <DiVisualstudio size={40} className="text-[#0078d7]" />,
      name: "VS Code",
    },
    {
      icon: <SiPostman size={40} className="text-[#ef5b25]" />,
      name: "Postman",
    },
    {
      icon: <IoLogoVercel size={40} className="text-[#000]" />,
      name: "Vercel",
    },
    {
      icon: <SiNetlify size={40} className="text-[#00d1b2]" />,
      name: "Netlify",
    },
    { icon: <SiRender size={40} className="text-[#000]" />, name: "Render" },
  ];

  return (
    <div id="about" className="bg-[#ffffff] min-h-screen flex items-center">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="max-w-[90%] md:max-w-[75%] mx-auto font-inter space-y-10 py-10"
      >
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#0e7490]">
          About Me
        </h1>

        {/* About Me Section */}
        <p className="text-lg md:text-xl text-gray-700 text-center leading-relaxed">
          I’m <span className="font-bold text-[#0e7490]">Siva Sankar</span>, an
          MCA graduate and passionate{" "}
          <span className="font-bold text-[#0e7490]">
            {" "}
            full-stack developer.
          </span>{" "}
          After completing a professional IT course, I made a successful
          transition into the tech industry. I enjoy building responsive,
          user-friendly web applications and have completed over{" "}
          <span className="font-bold text-[#0e7490]"> 4+ </span> personal
          projects to sharpen my development skills. I'm always eager to learn
          and explore new technologies to grow as a developer.
        </p>

        {/* Skills Section */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-[#0e7490] text-center">
            My Skills
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex flex-col items-center space-y-2 cursor-pointer"
              >
                {skill.icon}
                <span className="font-bold">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
