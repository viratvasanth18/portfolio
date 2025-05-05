import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0e7490] text-white py-6 ">
      <div className="max-w-[90%] md:max-w-[75%] mx-auto text-center space-y-2">
        <p className="text-sm md:text-base font-medium font-Poppins">
          © {new Date().getFullYear()} Siva Sankar. All rights reserved.
        </p>
        <p className="text-sm md:text-base font-medium">
          Made with 🤍 by{" "}
          <a href="#" className=" hover:text-[#ffffff] ">
            Siva Sankar.
          </a>
        </p>
        <div className="flex justify-center gap-4 mt-2">
        <a
            href="https://github.com/viratvasanth18"
            className="hover:text-black"
          >
            <FaGithub size={29} />
          </a>
          <a
            href="https://www.linkedin.com/in/siva-sankar-a-99a580281/"
            className="hover:text-black"
          >
            <FaLinkedin size={29} />
          </a>
          <a
            href="https://www.instagram.com/18_virat_vasanth_18/"
            className="hover:text-black"
          >
            <FaInstagram size={29} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
