import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Project = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div id="project" className="bg-[#ffffff] min-h-screen flex items-center">
      <div className="max-w-[90%] md:max-w-[75%] mx-auto font-poppins space-y-10 py-10">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#0e7490]">
          My Projects
        </h1>

        {/* Project 1 */}
        <div className="flex flex-col md:flex-col gap-10">
          {/* Project Block (Content Right - Image Left) */}
          <div
            className="flex flex-col md:flex-row-reverse items-center gap-6"
            data-aos="fade-up"
          >
            {/* Content */}
            <div className="md:w-1/2 bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
              <h1 className="text-[#0e7490] font-bold text-[32px] mb-4">
                Chat-App
              </h1>
              <p className="text-lg text-gray-700 mb-4">
                A real-time chat application with instant messaging features.
                Built using React.js and powered by Socket.io for live
                communication. Clean UI with responsive design for desktop and
                mobile users.
              </p>
              <a
                href="https://chat-app-nsuo.onrender.com"
                target="_blank"
                className="text-[#0e7490] font-bold text-lg hover:underline"
              >
                Live Demo
              </a>
            </div>

            {/* Image */}
            <div className="md:w-1/2">
              <img
                src="/chatapp.png"
                alt="Summify AI"
                className="rounded-xl w-full shadow-xl"
              />
            </div>
          </div>
        </div>
        

        {/* Project 2 */}
        <div className="flex flex-col md:flex-col gap-10">
          {/* Project Block (Content Left - Image Right) */}
          <div
            className="flex flex-col md:flex-row items-center gap-6"
            data-aos="fade-up"
          >
            {/* Content */}
            <div className="md:w-1/2 bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
              <h1 className="text-[#0e7490] font-bold text-[32px] mb-4">
                Live-Weather
              </h1>
              <p className="text-lg text-gray-700 mb-4">
                A modern weather app that shows live updates for any city. Built
                with React and integrated with OpenWeatherMap API. Fully
                responsive and deployed on Netlify for smooth user experience.
              </p>
              <a
                href="https://tamilsweatherbros.netlify.app/"
                target="_blank"
                className="text-[#0e7490] font-bold text-lg hover:underline"
              >
                Live Demo
              </a>
            </div>

            {/* Image */}
            <div className="md:w-1/2">
              <img
                src="/weather.png"
                alt="Live-Weather App"
                className="rounded-xl w-full shadow-xl"
              />
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="flex flex-col md:flex-col gap-10">
          {/* Project Block (Content Right - Image Left) */}
          <div
            className="flex flex-col md:flex-row-reverse items-center gap-6"
            data-aos="fade-up"
          >
            {/* Content */}
            <div className="md:w-1/2 bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
              <h1 className="text-[#0e7490] font-bold text-[32px] mb-4">
                Lehenga Zone
              </h1>
              <p className="text-lg text-gray-700 mb-4">
                Lehenga Zone is a modern e-commerce platform for ethnic wear,
                built using the MERN stack. It features a responsive UI, product
                listings, cart, wishlist, and secure backend management. Admin
                panel allows easy product, user, and order management for smooth
                operations.
              </p>
              <a
                href="https://lehenga-zone-client.vercel.app/"
                target="_blank"
                className="text-[#0e7490] font-bold text-lg hover:underline"
              >
                Live Demo
              </a>
            </div>

            {/* Image */}
            <div className="md:w-1/2">
              <img
                src="/lehenga zone.png"
                alt="Summify AI"
                className="rounded-xl w-full shadow-xl"
              />
            </div>
          </div>
        </div>
        

        {/* Project 4 */}
        <div className="flex flex-col md:flex-col gap-10">
          {/* Project Block (Content Left - Image Right) */}
          <div
            className="flex flex-col md:flex-row items-center gap-6"
            data-aos="fade-up"
          >
            {/* Content */}
            <div className="md:w-1/2 bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
              <h1 className="text-[#0e7490] font-bold text-[32px] mb-4">
                Aj Corp
              </h1>
              <p className="text-lg text-gray-700 mb-4">
                AJ Corp is a responsive front-end portfolio website created as a
                freelance project for a company. Designed with React.js, the
                site highlights company details, services, and contact options
                in a sleek, professional layout. Built with a MERN stack
                mindset, this project is prepared for seamless future backend
                integration.
              </p>
              <a
                href="ajcorp-portfolio.netlify.app"
                target="_blank"
                className="text-[#0e7490] font-bold text-lg hover:underline"
              >
                Live Demo
              </a>
            </div>

            {/* Image */}
            <div className="md:w-1/2">
              <img
                src="/ajcorp.png"
                alt="Live-Weather App"
                className="rounded-xl w-full shadow-xl"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Project;
