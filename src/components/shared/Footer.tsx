import React from "react";

const Footer = () => {
  return (
    <footer  className=" bg-gradient-to-r from-[#ff6900]  to-indigo-800 ">
      <div className="container mx-auto w-auto flex justify-between p-5 text-gray-300 text-xs  text-center items-center">
        <h3 > © 2023 Copywrite. All rights reserved by QodeMatrix</h3>

        <ul className="flex gap-12">
          <li>Documentation</li>
          <li>Support</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
