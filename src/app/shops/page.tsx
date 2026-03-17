import ShopCard from "@/components/ShopCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Metadata } from "next";

interface Shop {
  _id: string;
  name: string;
  imageUrl?: string;
  category: string;
}

export const metadata: Metadata = {
  title: "দোকানপাট | নারুয়া বাজার",
  description: "নারুয়া বাজারের বিভিন্ন দোকানপাটের তথ্য এবং তালিকা।",
};

async function getShops(searchParams: {
  category?: string;
  search?: string;
}): Promise<Shop[]> {
  const { category, search } = searchParams;
  const url = new URL("http://localhost:5000/api/v1/shop");
  if (category) url.searchParams.append("category", category);
  if (search) url.searchParams.append("search", search);

  try {
    const res = await fetch(url.toString(), {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Failed to fetch shops");
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching shops:", error);
    return [];
  }
}

export default async function ShopsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; search?: string }>;
}) {
  const resolvedSearchParams = await searchParams;
  const shops = await getShops(resolvedSearchParams);

  // Predefined categories in Bengali
  const categories = [
    "মুদিখানা",
    "হোটেল",
    "মাংসের দোকান",
    "চায়ের দোকান",
    "ফার্মেসী",
    "ফলের দোকান",
    "মিষ্টির দোকান",
    "আসবাবপত্র",
    "টেইলার্স",
    "সেলুন",
    "মেরামতকারী দোকান",
    "প্রসাধনী",
    "ফ্লেক্সিলোড ও বিকাশ",
    "মাছ ও মাংস",
    "ইলেকট্রনিক্স",
    "হার্ডওয়্যার",
    "পোশাকের দোকান",
  ];

  return (
    <div>
      <div className="bg-gradient-to-r from-cyan-100/10 to-blue-200/30">
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold text-center text-gray-800 pt-10 pb-5">
            নারুয়া বাজারের দোকানপাট
          </h1>
          <p className="text-center text-gray-600 pb-5">
            নারুয়া বাজারে বিভিন্ন ধরনের দোকানপাট রয়েছে যেখানে আপনি পাবেন মুদি,
            কাপড়, ইলেকট্রনিক্স এবং আরও অনেক কিছু।
          </p>
        </div>
      </div>

      <div className="container flex flex-col md:flex-row md:justify-between md:items-center gap-4 mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-4">
          দোকানের ধরন অনুসারে ফিল্টার করুন
        </h2>
        <form className="flex items-center gap-4">
          <select
            name="category"
            defaultValue={resolvedSearchParams.category || ""}
            className="border border-gray-300 rounded-lg px-4 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">সব দোকান</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <div className="flex items-center">
            <Input
              name="search"
              defaultValue={resolvedSearchParams.search || ""}
              className="rounded-r-none"
              placeholder="দোকান খুঁজুন..."
            />
            <Button
              type="submit"
              className="bg-blue-500 text-white hover:bg-blue-600 rounded-l-none cursor-pointer"
            >
              অনুসন্ধান করুন
            </Button>
          </div>
        </form>
      </div>

      <div className="container mx-auto py-5 lg:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 lg:gap-6 mt-6">
          {shops.map((shop: Shop) => (
            <ShopCard
              key={shop._id}
              shop={{
                id: shop._id,
                name: shop.name,
                image: shop.imageUrl || "https://placehold.co/300x200.png",
                category: shop.category,
              }}
            />
          ))}
          {shops.length === 0 && (
            <p className="col-span-full text-center text-gray-500 py-10">
              কোনো দোকান পাওয়া যায়নি।
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
