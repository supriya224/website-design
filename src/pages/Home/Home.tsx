import Feature from "@/components/core/Feature";
import Review from "@/components/core/Review";
import SectionPage from "@/components/core/SectionPage";
import Support from "@/components/core/Support";
import Visitors from "@/components/core/Visitors";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import MainLayout from "@/layouts/MainLayouts";
import React from "react";

const Home: React.FC = () => {
  return (
    <MainLayout>
      <section className="bg-[#0D051F] text-white h-full ">
        <div className="container mx-auto w-auto py-9">
          <Header />
          {/* main section */}
          <div className="flex gap-48 pt-24">
            <div className="w-2/1">
              <h4 className="text-lg text-indigo-700 flex gap-2 font-bold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6900]  to-indigo-800">
                  Transform
                </span>
                   your
                  Website
              </h4>

              <h4>With Motion Art Effect</h4>
            </div>
            <div className="w-1/2 font-semibold leading-9">
              <h4 className="text-7xl  ">
                Attract Your Visitors Attention With Colorful
              </h4>
              <h4 className="text-7xl text-indigo-700">
                <span className="  text-transparent bg-clip-text bg-gradient-to-r from-[#ff6900]  to-indigo-800">
                  Motion
                </span>{" "}
                Art Effect
              </h4>
              <p className="text-lg font-normal">
                Unleash the power of creativity with Motion Art for Elementor -
                your ultimate solution for seamlessly integrating captivating
                animations into your website.
              </p>
            </div>
          </div>
          {/* review section */}
          <Review />
          <Visitors />
          <SectionPage />
          <Support />
          <Feature />
        </div>
        <Footer />

      </section>
    </MainLayout>
  );
};

export default Home;
