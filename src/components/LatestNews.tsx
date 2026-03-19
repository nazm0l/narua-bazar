"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface News {
  _id: string;
  title: string;
  imgUrl: string;
  createdAt: string;
}

export default function LatestNews() {
  const [newsItems, setNewsItems] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/news`, {
          cache: "no-store",
        });
        if (!res.ok) throw new Error("Failed to fetch news");
        const data = await res.json();
        setNewsItems(data.data.slice(0, 10)); // Show latest 10 news
      } catch (error) {
        console.error("Error fetching latest news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return (
      <div className="py-10 px-4 text-center">
        <p>সংবাদ লোড হচ্ছে...</p>
      </div>
    );
  }

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
        >
          {newsItems.map((item) => (
            <SwiperSlide key={item._id}>
              <Link href={`/news/${item._id}`}>
                <div className="w-full mx-auto bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer mt-6 hover:shadow-xl transition-shadow duration-300 ">
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={item.imgUrl || "https://placehold.co/400x225.png"}
                      alt={item.title}
                      width={400}
                      height={225}
                      className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="text-lg font-semibold text-gray-800 line-clamp-2">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {new Date(item.createdAt).toLocaleDateString("bn-BD")}
                    </p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
          {newsItems.length === 0 && (
            <p className="text-center text-gray-500 py-10">
              কোনো সংবাদ পাওয়া যায়নি।
            </p>
          )}
        </Swiper>
      </div>
    </div>
  );
}
