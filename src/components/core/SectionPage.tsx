import MainLayout from "@/layouts/MainLayouts";
import Image from "next/image";
import React from "react";
import IMG from "../../assets/motionarteffect-img11.png";
import IMG1 from "../../assets/motionarteffect-img10.png";

const SectionPage = () => {
  return (
    <MainLayout>
      <section className="mx-5 font-customFont ">
        <h4 className="text-center text-lg pb-7  ">Apply On Any Section Or Enable For Whole Page</h4>
        <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row gap-12">
            {/* first section */}
            <div className="p-12 bg-gradient-to-b from-[#150b26]  to-[rgb(22,12,43)] rounded-lg shadow-inner shadow-gray-600">
              <h4>Apply On Section</h4>
              <p className="text-sm py-5 text-gray-400">
                Apply on section is a game-changer, offering an unparalleled way
                to manage applications directly from your website.
              </p>
              <Image src={IMG} width={600} height={900} alt="" />
          </div>
            {/* second page */}
            <div className="p-12 bg-gradient-to-b from-[#150b26]  to-[rgb(22,12,43)] rounded-lg shadow-inner shadow-gray-600">
              <h4>Apply On Section</h4>
              <p className="text-sm py-5 text-gray-400">
                Apply on section is a game-changer, offering an unparalleled way
                to manage applications directly from your website.
              </p>
              <Image src={IMG1} width={600} height={900} alt="" />
            </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default SectionPage;
