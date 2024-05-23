import React from "react";

const Footer = () => {
  return (
    <footer  className=" bg-gradient-to-r from-[#ff6900]  to-indigo-800 ">
      <div className="container mx-auto w-auto flex flex-wrap justify-between p-5 text-gray-300 text-[10px]  text-center items-center">
        <h3 > © 2023 Copywrite. All rights reserved by QodeMatrix</h3>

        <ul className="flex flex-col md:flex-row lg:flex-row xl:flex-row">
          <li>Documentation</li>
          <li>Support</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
