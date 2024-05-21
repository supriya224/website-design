import MainLayout from "@/layouts/MainLayouts";
import Image from "next/image";
import React from "react";
import IMG from "../../assets/motionarteffect-img8.png";

const Support = () => {
  return (
    <MainLayout>
      <section>
        <div className="  bg-gradient-to-b from-[#190e2c]  to-[rgb(41,24,75)] border border-gray-400 rounded-lg my-28 py-12 text-center items-center shadow-inner  shadow-white">
          <h4 className="text-2xl ">Supported by All Popular Browsers</h4>
          <p className="py-5  px-96">
            Rest assured, Motion Art is designed to be compatible with all major
            web browsers.
          </p>
          <div className="flex bg-center justify-center">
            <Image src={IMG} alt="" />
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Support;
