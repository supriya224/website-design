import MainLayout from "@/layouts/MainLayouts";
import React, { useMemo } from "react";
import IMG from "../../assets/motionarteffect-img9.png";
import IMG1 from "../../assets/motionarteffect-img6.png";
import IMG2 from "../../assets/motionarteffect-img7.png";
import Image, { StaticImageData } from "next/image";

// interface of features item
interface FeatureItem {
  title: string;
  img: StaticImageData;
  tag: string;
}
const Feature: React.FC = () => {
  const features: FeatureItem[] = useMemo(
    () => [
      {
        title: "Light Weight",
        img: IMG,
        tag: "Motion Art for Elementor is designed to be lightweight.",
      },
      {
        title: "100% Responsive",
        img: IMG1,
        tag: "Create a consistent visual experience across all devices.",
      },
      {
        title: "User Friendly Interface",
        img: IMG2,
        tag: "Ensure a smooth experience for both applicants and administrators.",
      },
    ],
    []
  );
  return (
    <MainLayout>
      <section className="">
        <div className="my-9 mx-5">
          <div>
            <h4 className="text-4xl text-center">
              An All-Round Plugin With Powerful Features
            </h4>
            <p className="text-center text-md  py-5">
              Whether you are a seasoned web designer or just starting out,
              Motion Art for Elementor seamlessly integrates with the Elementor
              platform, providing you with a seamless and intuitive experience.
            </p>
          </div>
          <div className="w-auto flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row gap-9 pt-3  ">
            {features.map((item, index) => {
              return (
                <div key={index} className="w-full ">
                  <div className=" w-full bg-gradient-to-b from-[#150b26]  to-[rgb(22,12,43)] rounded-xl shadow-inner shadow-gray-600 p-9 px-8 ">
                    <Image src={item.img} width={200} height={200} alt="" />
                    <h3 className="text-3xl">{item.title}</h3>
                    <h3 className="text-gray-400 pt-2">{item.tag}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Feature;
