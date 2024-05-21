import MainLayout from "@/layouts/MainLayouts";
import Image from "next/image";
import React from "react";
import IMG from "../../assets/motionarteffect-img8.png";

const Support = () => {
  return (
    <MainLayout>
      <section>
        <div>
          <h4>Supported by All Popular Browsers</h4>
          <p>
            Rest assured, Motion Art is designed to be compatible with all major
            web browsers.
          </p>
          <Image src={IMG} width={1000} height={1000} alt=""/>
        </div>
      </section>
    </MainLayout>
  );
};

export default Support;
