"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Event {
  _id: string;
  title: string;
  description: string;
  imgUrl: string;
  date: string;
}

export default function UpComingEvents() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events`, {
          cache: "no-store",
        });
        if (!res.ok) throw new Error("Failed to fetch events");
        const data = await res.json();
        setEvents(data.data.slice(0, 4)); // Show first 4 events on home page
      } catch (error) {
        console.error("Error fetching upcoming events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return (
      <div className="py-10 px-4 text-center">
        <p>ইভেন্ট লোড হচ্ছে...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div>
        <h1 className="text-4xl font-bold mt-10">আসন্ন ইভেন্ট</h1>
        <p className="mt-2 text-primary">
          নারুয়া বাজারের আসন্ন ইভেন্ট এবং কার্যক্রম সম্পর্কে জানুন।
        </p>
      </div>
      <div className="mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((item) => (
            <Link
              key={item._id}
              href={`/events/${item._id}`}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 overflow-hidden border border-gray-100 flex flex-col"
            >
              <div className="aspect-video overflow-hidden">
                <Image
                  src={item.imgUrl || "https://placehold.co/400x225.png"}
                  alt={item.title}
                  width={400}
                  height={225}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm line-clamp-2 flex-1">
                  {item.description}
                </p>
                <span className="text-sm text-gray-500">
                  তারিখ: {new Date(item.date).toLocaleDateString("bn-BD")}
                </span>
              </div>
            </Link>
          ))}
        </div>
        {events.length === 0 && (
          <p className="text-center text-gray-500 py-10">
            বর্তমানে কোনো ইভেন্ট নেই।
          </p>
        )}
      </div>
    </div>
  );
}
