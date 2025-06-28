import { Metadata } from "next";

export const metadata: Metadata = {
  title: " সংবাদ | নারুয়া বাজার",
  description: "নারুয়া বাজারের সর্বশেষ সংবাদ ও আপডেট।",
};

export default function NewsPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-10 bg-amber-500 text-white p-5 rounded-lg shadow-lg">
        নারুয়া বাজারের সংবাদ
      </h1>
      <p className="text-center mt-5">
        এখানে আপনি নারুয়া বাজারের সর্বশেষ সংবাদ ও আপডেট পাবেন।
      </p>
    </div>
  );
}
