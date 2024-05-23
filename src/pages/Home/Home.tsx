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
      <section className="bg-[#0D051F] text-white h-full font-customFont    ">
      {/* <Component {...pageProps} /> */}
      {/* <MouseHover /> */}
        <div className="container mx-auto w-auto py-9">
          <Header />
          {/* main section */}
          <div className="mx-5 flex flex-col md:flex-row lg:flex-row xl:flex-row md:gap-48 lg:gap-48 xl:gap-48  pt-24 ">
            <div className="xl:w-1/2 ">
              <h4 className="text-lg text-indigo-700 flex gap-2 font-bold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F87516] from-90%  to-[ #5E11FF] to-100%">
                  Transform
                </span>
                   your
                  Website                                     
              </h4>

              <h4>With Motion Art Effect</h4>
            </div>
            <div className="w-full font-semibold leading-9">
              <h4 className="text-4xl md:text-7xl lg:text-7xl xl:text-7xl   ">
                Attract Your Visitors Attention With Colorful
              </h4>
              <h4 className="text-4xl md:text-7xl lg:text-7xl xl:text-7xl  text-indigo-700">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F87516] from-90%  to-[ #5E11FF] to-100%">
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
