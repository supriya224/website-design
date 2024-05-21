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
      <section className="bg-[#0D051F] h-full text-gray-400 py-9">
        <div className="container mx-auto w-auto  ">
          <Header />
          {/* main section */}
          <div className="container mx-auto w-auto">
            <div>
              <h4>Transform Your Website</h4>
              <h4>With Motion Art Effect</h4>
            </div>
            <div>
              <h4>Attract Your Visitors Attention With Colorful</h4>
              <h4>Motion Art Effect</h4>
              <p>
                Unleash the power of creativity with Motion Art for Elementor -
                your ultimate solution for seamlessly integrating captivating
                animations into your website.{" "}
              </p>
            </div>
          </div>
          {/* review section */}
          <Review />
          <Visitors />
          <SectionPage />
          <Support />
          <Feature />
          <Footer />
        </div>
      </section>
    </MainLayout>
  );
};

export default Home;
