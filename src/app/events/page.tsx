import Link from "next/link";
import Image from "next/image";

interface Event {
  _id: string;
  title: string;
  description: string;
  imgUrl: string;
  date: string;
  time: string;
  location: string;
}

async function getEvents(): Promise<Event[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events`, {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Failed to fetch events");
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching events:", error);
    return [];
  }
}

export default async function EventsPage() {
  const events = await getEvents();

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-cyan-100/10 to-blue-200/30">
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-extrabold text-center text-gray-800 pt-10 pb-5">
            নারুয়া বাজারের ইভেন্টস
          </h1>
          <p className="text-center text-gray-700 pb-5">
            নারুয়া বাজারের সর্বশেষ ইভেন্ট সম্পর্কে জানুন।
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-10">
          {/* Events Section */}
          <div className="lg:col-span-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2 border-b pb-2 border-gray-300">
              <span>আসন্ন ইভেন্ট</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map((item) => (
                <div
                  key={item._id}
                  className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 overflow-hidden border border-gray-100"
                >
                  <Link href={`/events/${item._id}`}>
                    <div className="aspect-video overflow-hidden">
                      <Image
                        src={item.imgUrl || "https://placehold.co/600x338.png"}
                        alt={item.title}
                        width={600}
                        height={338}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </Link>
                  <div className="p-5">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                      {item.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">
                        {new Date(item.date).toLocaleDateString("bn-BD")}
                      </span>
                      <Link
                        href={`/events/${item._id}`}
                        className="text-blue-600 font-medium hover:underline"
                      >
                        আরও পড়ুন →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
              {events.length === 0 && (
                <p className="col-span-full text-center text-gray-500 py-10">
                  কোনো ইভেন্ট পাওয়া যায়নি।
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
