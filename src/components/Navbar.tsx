import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white/10 p-4 shadow-lg backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center text-xl">
        <Link href="/" className="text-primary text-2xl font-bold">
          নারুয়া বাজার
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="text-primary hover:underline">
              হোম
            </Link>
          </li>
          <li>
            <Link href="/shops" className="text-primary hover:underline">
              দোকান সমূহ
            </Link>
          </li>
          <li>
            <Link href="/news" className="text-primary hover:underline">
              সংবাদ
            </Link>
          </li>
          <li>
            <Link href="/information" className="text-primary hover:underline">
              তথ্য
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-primary hover:underline">
              যোগাযোগ
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
