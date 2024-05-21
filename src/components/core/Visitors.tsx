import MainLayout from "@/layouts/MainLayouts";
import Image from "next/image";
import React from "react";
import IMG from "../../assets/motionarteffect-img5.png"
import {ArrowRight} from "react-feather"

const Visitors = () => {
  return (
    <MainLayout>
      <section className="min-h-auto flex justify-between leading-8 py-12">
        <div className="w-2/4">
          <h4 className="text-4xl font-bold">
            Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors
          </h4>
          <p>
            Motion Art for Elementor is a groundbreaking plugin that empowers
            you to effortlessly infuse your website with visually stunning
            motion art elements. Purchase From Envato
          </p>
          <button className=" bg-gradient-to-r from-[#ff6900] to-indigo-800 py-5 px-9 rounded-2xl text-xl flex gap-5 text-center items-center">Purchase From Envato <ArrowRight/>    </button>
        </div>
      
        <div>
          <Image src={IMG} alt="" />
        </div>
      </section>
    </MainLayout>
  );
};

export default Visitors;
