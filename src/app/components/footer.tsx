import React from "react";
import { FaFacebook, FaYoutube, FaTwitter, FaInstagram, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="w-full bg-[#f4f4f5] flex flex-col md:flex-row flex-wrap justify-between px-6 lg:px-32 py-12 text-gray-700">
      {/* Core Courses Section */}
      <div className="w-full md:w-auto mb-8 md:mb-0">
        <h1 className="font-semibold text-lg mb-4 text-center md:text-left">Core Courses</h1>
        <p className="leading-8 hover:text-blue-600 cursor-pointer text-center md:text-left">Programming Fundamentals</p>
        <p className="leading-8 hover:text-blue-600 cursor-pointer text-center md:text-left">Web2 Using NextJS</p>
        <p className="leading-8 hover:text-blue-600 cursor-pointer text-center md:text-left">Earn as You Learn</p>
      </div>

      {/* Advanced Courses Section */}
      <div className="w-full md:w-auto mb-8 md:mb-0">
        <h1 className="font-semibold text-lg mb-4 text-center md:text-left">Advanced Courses</h1>
        <p className="leading-8 hover:text-blue-600 cursor-pointer text-center md:text-left">Web 3 and Metaverse</p>
        <p className="leading-8 hover:text-blue-600 cursor-pointer text-center md:text-left">Cloud-Native Computing</p>
        <p className="leading-8 hover:text-blue-600 cursor-pointer text-center md:text-left">Artificial Intelligence (AI) and Deep Learning</p>
        <p className="leading-8 hover:text-blue-600 cursor-pointer text-center md:text-left">Ambient Computing and IoT</p>
        <p className="leading-8 hover:text-blue-600 cursor-pointer text-center md:text-left">Genomics and Bioinformatics</p>
        <p className="leading-8 hover:text-blue-600 cursor-pointer text-center md:text-left">Network Programmability and Automation</p>
      </div>

      {/* Social Links Section */}
      <div className="w-full md:w-auto">
        <h1 className="font-semibold text-lg mb-4 text-center md:text-left">Social Links</h1>
        <div className="flex justify-center md:justify-start space-x-4 mb-4">
          <a href="#"><FaFacebook className="text-2xl text-blue-600 hover:scale-125 transition-transform cursor-pointer" /></a>
          <a href="#"><FaYoutube className="text-2xl text-red-600 hover:scale-125 transition-transform cursor-pointer" /></a>
          <a href="#"><FaTwitter className="text-2xl text-blue-400 hover:scale-125 transition-transform cursor-pointer" /></a>
          <a href="#"><FaInstagram className="text-2xl text-pink-500 hover:scale-125 transition-transform cursor-pointer" /></a>
          <a href="#"><FaTiktok className="text-2xl text-black hover:scale-125 transition-transform cursor-pointer" /></a>
        </div>
        <p className="text-sm hover:text-blue-600 cursor-pointer text-center md:text-left">education@governorsindh.com</p>
      </div>
    </div>
  );
};

export default Footer;
