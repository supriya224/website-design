import MainLayout from "@/layouts/MainLayouts";
import Image from "next/image";
import React from "react";
import IMG from "../../assets/motionarteffect-img11.png";
import IMG1 from "../../assets/motionarteffect-img10.png";


const SectionPage = () => {
  return (
    <MainLayout>
      <section>
        <div>
            {/* first section */}
          <div>
            <h4>Apply On Section</h4>
            <p>
              Apply on section is a game-changer, offering an unparalleled way
              to manage applications directly from your website.
            </p>
            <Image src={IMG} width={600} height={900} alt="" />
          </div>
        </div>
        <div>
            {/* second page */}
          <div>
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
