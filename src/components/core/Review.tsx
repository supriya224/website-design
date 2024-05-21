import Image from "next/image";
import React from "react";
import IMG from "../../assets/motionarteffect-img1.png"
import IMG1 from "../../assets/motionarteffect-img2.png"
import IMG2 from "../../assets/motionarteffect-img3.png"
import MainLayout from "@/layouts/MainLayouts";

const Review = () => {
  const Review = [
    {

      img: IMG1,
      title: "4.5 Score, 9 Reviews",
    },
    {
        img: IMG,
      title: "4.5 Score, 9 Reviews",
    },
    {
      img:IMG2,
      title: "4.5 Score, 9 Reviews",
    },
  ];
  
  return (
    <MainLayout>
      <div>
        {Review.map((item, index) => {
          return (
            <div key={index}>
              <div>
                <Image src={item.img} width={100} height={100} alt="" />
                <h3>{item.title}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </MainLayout>
  );
};

export default Review;
