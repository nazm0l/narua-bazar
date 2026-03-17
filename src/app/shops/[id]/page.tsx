import Image from "next/image";

async function getShop(id: string) {
  try {
    const res = await fetch(`http://localhost:5000/api/v1/shop/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Failed to fetch shop");
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching shop:", error);
    return null;
  }
}

export default async function SingleShopPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const shop = await getShop(id);

  if (!shop) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold">দোকান পাওয়া যায়নি</h1>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-center text-gray-800 bg-primary/30 pt-10 pb-10">
        দোকানের বিস্তারিত
      </h1>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white flex flex-col lg:flex-row items-center gap-8 p-6 rounded-lg shadow-md">
          <div className="w-full lg:w-1/2 aspect-video overflow-hidden rounded-lg">
            <Image
              src={shop.imageUrl || "https://placehold.co/800x450.png"}
              alt={shop.name}
              width={800}
              height={450}
              className="w-full h-full object-cover shadow-md hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {shop.name}
            </h2>
            <p className="text-gray-600 mb-4">{shop.description}</p>
            <div className="flex flex-col gap-2">
              <span className="text-gray-500">📍 অবস্থান: {shop.address}</span>
              {shop.phoneNumber && (
                <span className="text-gray-500">
                  📞 ফোন: {shop.phoneNumber}
                </span>
              )}
              <span className="text-gray-500">👤 মালিক: {shop.ownerName}</span>
              <span className="text-gray-500">🏷️ বিভাগ: {shop.category}</span>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            দোকানের পণ্যসমূহ
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-8 gap-4">
            {shop.products && shop.products.length > 0 ? (
              shop.products.map((product: any, index: number) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 overflow-hidden border border-gray-100"
                >
                  <div className="aspect-square overflow-hidden">
                    <Image
                      src={product.imgUrl || "https://placehold.co/300x300.png"}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-2">
                    <h4 className="text-sm text-center font-semibold text-gray-800 truncate">
                      {product.name}
                    </h4>
                  </div>
                </div>
              ))
            ) : (
              <p className="col-span-full text-center text-gray-500 py-10">
                এই দোকানে কোনো পণ্য যোগ করা হয়নি।
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
