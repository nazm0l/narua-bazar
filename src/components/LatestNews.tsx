"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";

const newsItems = [
  {
    title: "নারুয়াতে ছাগল চুরির অভিযোগে কিশোর কে মারপিট",
    date: "১২ ফেব্রুয়ারি, ২০২৫",
    image: "https://placehold.co/300x200.png",
  },
  {
    title: "নতুন বাজার চালু হচ্ছে আগামী মাসে",
    date: "২০ মার্চ, ২০২৫",
    image: "https://placehold.co/300x200.png",
  },
  {
    title: "নারুয়াতে বিদ্যুৎ সমস্যার সমাধান হচ্ছে",
    date: "১০ এপ্রিল, ২০২৫",
    image: "https://placehold.co/300x200.png",
  },
  {
    title: "স্থানীয় স্কুলে বার্ষিক ক্রীড়া প্রতিযোগিতা",
    date: "১৫ জানুয়ারি, ২০২৫",
    image: "https://placehold.co/300x200.png",
  },
  {
    title: "নারুয়াতে প্রথমবারের মতো হস্তশিল্প মেলা",
    date: "৫ ফেব্রুয়ারি, ২০২৫",
    image: "https://placehold.co/300x200.png",
  },
  {
    title: "পানি সংকট নিরসনে নতুন উদ্যোগ নেওয়া হচ্ছে",
    date: "২ মার্চ, ২০২৫",
    image: "https://placehold.co/300x200.png",
  },
  {
    title: "নারুয়া বাজারে নতুন রেস্টুরেন্ট উদ্বোধন",
    date: "২ মার্চ, ২০২৫",
    image: "https://placehold.co/300x200.png",
  },
  {
    title: "নারুয়াতে নতুন সড়ক নির্মাণের কাজ শুরু",
    date: "২ মার্চ, ২০২৫",
    image: "https://placehold.co/300x200.png",
  },
];

export default function LatestNews() {
  return (
    <div className="py-10 lg:pt-24 px-4 sm:px-6 lg:px-8 ">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold">সর্বশেষ সংবাদ</h1>
        <p className="mt-2 text-primary">
          এখানে আপনি নারুয়া বাজারের সর্বশেষ সংবাদ এবং আপডেট পাবেন।
        </p>
      </div>
      <div className="">
        <Swiper
          className="relative pb-12"
          spaceBetween={20}
          freeMode={true}
          pagination={{ clickable: true }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
          modules={[FreeMode, Pagination]}
          // className="mySwiper"
        >
          {newsItems.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="w-full mx-auto bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer mt-6 hover:shadow-xl transition-shadow duration-300 ">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={300}
                  height={200}
                  className="object-cover w-full h-48"
                />
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-500">{item.date}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
