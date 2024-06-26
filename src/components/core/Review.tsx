import Image, { StaticImageData } from "next/image";
import React, { useMemo } from "react";
import IMG from "../../assets/motionarteffect-img1.png";
import IMG1 from "../../assets/motionarteffect-img2.png";
import IMG2 from "../../assets/motionarteffect-img3.png";
import Star from "../../assets/motionarteffect-img4.png";
import MainLayout from "@/layouts/MainLayouts";

interface ReviewItem {
  img: StaticImageData;
  title: string;
}

const Review: React.FC = () => {
  const reviews: ReviewItem[] = useMemo(
    () => [
      {
        img: IMG1,
        title: "4.5 Score, 9 Reviews",
      },
      {
        img: IMG,
        title: "4.5 Score, 9 Reviews",
      },
      {
        img: IMG2,
        title: "4.5 Score, 9 Reviews",
      },
    ],
    []
  );
  return (
    <MainLayout>
      <section className="min-h-screnn my-9">
        <div className="mx-5 pb-12">
          <h4 className="text-center text-4xl font-bold py-9">
            Trusted by thousands of users around the world
          </h4>
          <div className="flex flex-col gap-12 sm:flex-row md:flex-row lg:flex-row xl:flex-row md:gap-48 lg:gap-48 xl:gap-48  justify-center">
            {reviews.map((item, index) => {
              return (
                <div key={index}>
                  <div className="mx-auto flex justify-center items-center text-center gap-6">
                    <Image src={item.img} width={100} height={100} alt="" />
                    <div>
                      <Image src={Star} alt="" />
                      <h3 className="text-md ">{item.title}</h3>
                    </div>
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

export default Review;
