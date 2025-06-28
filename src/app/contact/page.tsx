import { Metadata } from "next";

export const metadata: Metadata = {
  title: " যোগাযোগ | নারুয়া বাজার",
  description: "নারুয়া বাজারের সাথে যোগাযোগের তথ্য এবং ফর্ম।",
};

export default function ContactPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-10 bg-amber-500 text-white p-5 rounded-lg shadow-lg">
        নারুয়া বাজারের যোগাযোগ
      </h1>
      <p className="text-center mt-5">
        এখানে আপনি নারুয়া বাজারের সাথে যোগাযোগের তথ্য পাবেন।
      </p>
    </div>
  );
}
