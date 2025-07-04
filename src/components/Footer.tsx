export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          {/* Description of Narua Bazar */}
          <h2 className="text-2xl font-bold mb-4">নারুয়া বাজার</h2>
          <p className="text-gray-400 mb-4">
            নারুয়া বাজার একটি ঐতিহ্যবাহী বাজার যেখানে আপনি পাবেন বিভিন্ন ধরনের
            পণ্য ও সেবা। আমাদের লক্ষ্য হল নারুয়া বাজারকে একটি আধুনিক ও সুবিধাজনক
            বাজারে পরিণত করা।
          </p>
          <div>
            {/* social icon */}
            <div className="flex justify-center space-x-4">
              <a
                href="https://www.facebook.com/naruabazar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-500"
              >
                Facebook
              </a>
              <a
                href="https://www.twitter.com/naruabazar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400"
              >
                Twitter
              </a>
              <a
                href="https://www.instagram.com/naruabazar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-pink-500"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          {/* Quick Links */}
          <h3 className="text-lg font-semibold mb-4">দ্রুত লিঙ্ক</h3>
          <ul className="space-y-2">
            <li>
              <a href="/about" className="text-gray-400 hover:text-white">
                আমাদের সম্পর্কে
              </a>
            </li>
            <li>
              <a href="/contact" className="text-gray-400 hover:text-white">
                যোগাযোগ
              </a>
            </li>
            <li>
              <a href="/privacy" className="text-gray-400 hover:text-white">
                গোপনীয়তা নীতি
              </a>
            </li>
          </ul>
        </div>
        <div>
          {/* Other Page Links */}
          <h3 className="text-lg font-semibold mb-4">অন্যান্য পৃষ্ঠা</h3>
          <ul className="space-y-2">
            <li>
              <a href="/news" className="text-gray-400 hover:text-white">
                সর্বশেষ সংবাদ
              </a>
            </li>
            <li>
              <a href="/shops" className="text-gray-400 hover:text-white">
                নতুন দোকান
              </a>
            </li>
            <li>
              <a href="/events" className="text-gray-400 hover:text-white">
                ইভেন্টস
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center">
          {/* Contact Information */}
          <h3 className="text-lg font-semibold mb-4">যোগাযোগ</h3>
          <p className="text-gray-400">
            ফোন:{" "}
            <a href="tel:+8801234567890" className="text-white">
              +880 123 456 7890
            </a>
          </p>
          <p className="text-gray-400">
            ইমেইল:{" "}
            <a href="mailto:nazmul0w1@gmail.com" className="text-white">
              info@naruabazar.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
