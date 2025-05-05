import { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.0, ease: "easeOut" }}
      className="bg-[#FFFFFF] font-poppins"
    >
      <div className="max-w-[90%] mx-auto py-3 flex items-center justify-between">
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.05 }}>
          <h1 className="text-[2.5rem] font-bold text-[#0e7490] hover:text-[#000]">
            Siva
          </h1>
        </motion.div>

        {/* Hamburger Menu */}
        <div className="lg:hidden">
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.9 }}
            className="text-[#0e7490]"
          >
            {isMenuOpen ? <HiX size={29} /> : <HiMenuAlt3 size={29} />}
          </motion.button>
        </div>

        {/* Nav Menu */}
        <motion.nav
          animate={{ opacity: isMenuOpen ? 1 : 1 }}
          transition={{ duration: 0.3 }}
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-[70px] left-0 w-full bg-[#F2EFE5] p-5 lg:p-0 lg:relative lg:block lg:w-auto lg:px-5 lg:py-3 lg:rounded-2xl lg:top-0`}
        >
          <ul className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-5 text-[18px] font-semibold">
            {["home", "about", "project", "contact"].map((item, index) => (
              <Link key={index} to={item} smooth={true} duration={500}>
                <motion.li
                  whileHover={{ y: -5 }}
                  className="cursor-pointer transition-all duration-150 ease-in hover:text-[#0e7490]"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </motion.li>
              </Link>
            ))}
          </ul>

          {/* Social Links (Mobile) */}
          <motion.div
            animate={{ opacity: isMenuOpen ? 1 : 0 }}
            transition={{ delay: 0.1 }}
            className={`${
              isMenuOpen ? "block" : "hidden"
            } lg:hidden mt-3 flex justify-center gap-5`}
          >
            <a href="https://github.com/viratvasanth18" className="hover:text-[#0e7490]">
              <FaGithub size={29} />
            </a>
            <a href="https://www.linkedin.com/in/siva-sankar-a-99a580281/"  className="hover:text-[#0e7490]">
              <FaLinkedin size={29} />
            </a>
            <a href="https://www.instagram.com/18_virat_vasanth_18/" className="hover:text-[#0e7490]">
              <FaInstagram size={29} />
            </a>
          </motion.div>
        </motion.nav>

        {/* Social Links (Desktop) */}
        <motion.div
          className="hidden lg:flex w-[100px] items-center justify-between"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <a href="https://github.com/viratvasanth18" target="_blank" className="hover:text-[#0e7490]">
            <FaGithub size={29} />
          </a>
          <a href="https://www.linkedin.com/in/siva-sankar-a-99a580281/" target="_blank" className="hover:text-[#0e7490]">
            <FaLinkedin size={29} />
          </a>
          <a href="https://www.instagram.com/18_virat_vasanth_18/" target="_blank" className="hover:text-[#0e7490]">
            <FaInstagram size={29} />
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Header;
