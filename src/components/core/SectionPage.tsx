import MainLayout from "@/layouts/MainLayouts";
import Image from "next/image";
import React from "react";
import IMG from "../../assets/motionarteffect-img11.png";
import IMG1 from "../../assets/motionarteffect-img10.png";

const SectionPage = () => {
  return (
    <MainLayout>
      <section>
        <h4>Apply On Any Section Or Enable For Whole Page</h4>
        <div className="flex justify-between gap-12">
            {/* first section */}
            <div className="border border-gray-400 p-12 rounded-lg">
              <h4>Apply On Section</h4>
              <p>
                Apply on section is a game-changer, offering an unparalleled way
                to manage applications directly from your website.
              </p>
              <Image src={IMG} width={600} height={900} alt="" />
          </div>
            {/* second page */}
            <div className="border border-gray-400 p-12 rounded-lg pt-32">
              <h4>Apply On Section</h4>
              <p>
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
