import MainLayout from "@/layouts/MainLayouts";
import React from "react";
import IMG from "../../assets/motionarteffect-img9.png";
import IMG1 from "../../assets/motionarteffect-img6.png";
import IMG2 from "../../assets/motionarteffect-img7.png";
import Image from "next/image";

const Feature = () => {
  const Features = [
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
  ];
  return (
    <MainLayout>
      <section>
        <div>
          <div>
            <h4>An All-Round Plugin With Powerful Features</h4>
            <p>
              Whether you are a seasoned web designer or just starting out,
              Motion Art for Elementor seamlessly integrates with the Elementor
              platform, providing you with a seamless and intuitive experience.
            </p>
          </div>
          {Features.map((item, index) => {
            return (
              <div key={index}>
                <Image src={item.img} width={100} height={100} alt="" />
                <h3>{item.title}</h3>
                <h3>{item.tag}</h3>
              </div>
            );
          })}
        </div>
      </section>
    </MainLayout>
  );
};

export default Feature;
