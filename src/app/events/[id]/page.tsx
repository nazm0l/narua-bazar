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

async function getEventById(id: string): Promise<Event | null> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Failed to fetch event");
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching event:", error);
    return null;
  }
}

export default async function SingleEventPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const event = await getEventById(id);

  if (!event) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold">ইভেন্ট পাওয়া যায়নি</h1>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen pb-12">
      {/* Banner Ads Top */}
      <div className="container mx-auto pt-20 px-4">
        <Image
          src="https://placehold.co/1200x80.png"
          alt="Banner Ads"
          width={1200}
          height={80}
          className="w-full object-cover rounded-md shadow-sm"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Event Content */}
          <div className="lg:w-3/4 bg-white p-6 rounded-lg shadow-md">
            <div className="relative aspect-video mb-6 overflow-hidden rounded-lg">
              <Image
                src={event.imgUrl || "https://placehold.co/800x450.png"}
                alt={event.title}
                fill
                className="object-cover"
              />
            </div>

            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              {event.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-8 pb-4 border-b">
              <span className="flex items-center gap-1">
                🗓️ তারিখ: {new Date(event.date).toLocaleDateString("bn-BD")}
              </span>
              <span className="flex items-center gap-1">
                🕔 সময়: {event.time}
              </span>
              <span className="flex items-center gap-1">
                📍 স্থান: {event.location}
              </span>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 text-justify whitespace-pre-wrap leading-relaxed">
                {event.description}
              </p>
            </div>
          </div>

          {/* Sidebar Ads */}
          <div className="lg:w-1/4 space-y-6">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <p className="text-xs text-gray-400 mb-2 uppercase tracking-wider font-semibold">
                বিজ্ঞাপন
              </p>
              <Image
                src="https://placehold.co/300x250.png"
                alt="Square Ads"
                width={300}
                height={250}
                className="w-full h-auto object-cover rounded"
              />
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <p className="text-xs text-gray-400 mb-2 uppercase tracking-wider font-semibold">
                বিজ্ঞাপন
              </p>
              <Image
                src="https://placehold.co/300x600.png"
                alt="Tall Ads"
                width={300}
                height={600}
                className="w-full h-auto object-cover rounded"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Banner Ads Bottom */}
      <div className="container mx-auto px-4 mt-8">
        <Image
          src="https://placehold.co/1200x80.png"
          alt="Banner Ads"
          width={1200}
          height={80}
          className="w-full object-cover rounded-md shadow-sm"
        />
      </div>
    </div>
  );
}
