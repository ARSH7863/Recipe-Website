import React from "react";
import Logo from "../assets/images/logo.png";
import { Github, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-light-neutral-100 py-6">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="text-center md:text-left flex items-center pl-40">
            {/* <img src={Logo} alt="" className="w-12 h-auto" /> */}
          </div>

          <div className="flex items-center justify-center space-x-1">
            <img src={Logo} alt="" className="w-15 h-auto mr-8" />
            <span className="text-gray-400">Made with</span>
            <span className="text-red-500 transition-all duration-300 hover:scale-180 cursor-grabbing">
              ❤️
            </span>
            <span className="text-gray-400">and</span>
            <span className="text-orange-500">🥕</span>
          </div>
          <div className="flex items-center justify-center md:justify-end space-x-4">
            <a
              href="https://www.instagram.com/arsh_shkh12/"
              target="_blank"
              className="w-12 h-12 bg-primary rounded-full flex items-center justify-center hover:bg-primary-20 transition-all duration-300 hover:scale-110"
            >
              <Instagram className="h-5 w-5 text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/arsh-shaikh786312/"
              target="_blank"
              className="w-12 h-12 bg-primary rounded-full flex items-center justify-center hover:bg-primary-20 transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="h-5 w-5 text-white" />
            </a>
            <a
              href="https://github.com/ARSH7863"
              target="_blank"
              className="w-12 h-12 bg-primary rounded-full flex items-center justify-center hover:bg-primary-20 transition-all duration-300 hover:scale-110"
            >
              <Github className="h-5 w-5 text-white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
