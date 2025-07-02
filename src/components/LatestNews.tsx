"use client";
import React from "react";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

export default function LatestNews() {
  return (
    <div className="py-24">
      <div>
        <h1 className="text-4xl font-bold mt-10">সর্বশেষ সংবাদ</h1>
        <p className="mt-2 text-primary">
          এখানে আপনি নারুয়া বাজারের সর্বশেষ সংবাদ এবং আপডেট পাবেন।
        </p>
      </div>
      <div className="">
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          freeMode={true}
          // pagination={{
          //   clickable: true,
          // }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="w-72 items-center shadow-lg rounded-lg mt-6 bg-white">
              <Image
                src="https://placehold.co/300x200.png"
                alt="Latest News"
                width={300}
                height={300}
                className="cursor-pointer rounded-t-lg object-cover w-full h-48"
              />
              <div className="p-4">
                <h4 className="text-xl font-semibold text-gray-800">
                  নারুয়াতে ছাগল চুরির অভিযোগে কিশোর কে মারপিট
                </h4>
                <p className="text-sm text-gray-500">১২ ফেব্রুয়ারি, ২০২৫</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-72 items-center shadow-lg rounded-lg mt-6 bg-white">
              <Image
                src="https://placehold.co/300x200.png"
                alt="Latest News"
                width={300}
                height={300}
                className="cursor-pointer rounded-t-lg object-cover w-full h-48"
              />
              <div className="p-4">
                <h4 className="text-xl font-semibold text-gray-800">
                  নারুয়াতে ছাগল চুরির অভিযোগে কিশোর কে মারপিট
                </h4>
                <p className="text-sm text-gray-500">১২ ফেব্রুয়ারি, ২০২৫</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-72 items-center shadow-lg rounded-lg mt-6 bg-white">
              <Image
                src="https://placehold.co/300x200.png"
                alt="Latest News"
                width={300}
                height={300}
                className="cursor-pointer rounded-t-lg object-cover w-full h-48"
              />
              <div className="p-4">
                <h4 className="text-xl font-semibold text-gray-800">
                  নারুয়াতে ছাগল চুরির অভিযোগে কিশোর কে মারপিট
                </h4>
                <p className="text-sm text-gray-500">১২ ফেব্রুয়ারি, ২০২৫</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-72 items-center shadow-lg rounded-lg mt-6 bg-white">
              <Image
                src="https://placehold.co/300x200.png"
                alt="Latest News"
                width={300}
                height={300}
                className="cursor-pointer rounded-t-lg object-cover w-full h-48"
              />
              <div className="p-4">
                <h4 className="text-xl font-semibold text-gray-800">
                  নারুয়াতে ছাগল চুরির অভিযোগে কিশোর কে মারপিট
                </h4>
                <p className="text-sm text-gray-500">১২ ফেব্রুয়ারি, ২০২৫</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-72 items-center shadow-lg rounded-lg mt-6 bg-white">
              <Image
                src="https://placehold.co/300x200.png"
                alt="Latest News"
                width={300}
                height={300}
                className="cursor-pointer rounded-t-lg object-cover w-full h-48"
              />
              <div className="p-4">
                <h4 className="text-xl font-semibold text-gray-800">
                  নারুয়াতে ছাগল চুরির অভিযোগে কিশোর কে মারপিট
                </h4>
                <p className="text-sm text-gray-500">১২ ফেব্রুয়ারি, ২০২৫</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-72 items-center shadow-lg rounded-lg mt-6 bg-white">
              <Image
                src="https://placehold.co/300x200.png"
                alt="Latest News"
                width={300}
                height={300}
                className="cursor-pointer rounded-t-lg object-cover w-full h-48"
              />
              <div className="p-4">
                <h4 className="text-xl font-semibold text-gray-800">
                  নারুয়াতে ছাগল চুরির অভিযোগে কিশোর কে মারপিট
                </h4>
                <p className="text-sm text-gray-500">১২ ফেব্রুয়ারি, ২০২৫</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
