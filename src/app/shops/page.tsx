import { Button } from "@/components/ui/button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "দোকানপাট | নারুয়া বাজার",
  description: "নারুয়া বাজারের বিভিন্ন দোকানপাটের তথ্য এবং তালিকা।",
};

export default function ShopsPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-10 bg-amber-500 text-white p-5 rounded-lg shadow-lg">
        নারুয়া বাজারের দোকানপাট
      </h1>
      <p className="text-center mt-5">
        এখানে আপনি নারুয়া বাজারের বিভিন্ন দোকানপাটের তথ্য পাবেন।
      </p>
      <div>
        <Button className="mt-5 mx-auto block hover:bg-green-800 text-white font-bold py-2 px-4 rounded cursor-pointer bg-primary">
          দোকানপাটের তালিকা দেখুন
        </Button>
      </div>
    </div>
  );
}
