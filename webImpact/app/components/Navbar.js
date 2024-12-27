"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Home() {
    return <Navbar />;
  }
  
  function Navbar() {
    const pathname = usePathname();
    if (!pathname.includes("/studio")) {
      return (
        <nav className="sticky top-0 bg-primary-900 text-primary-100 border-primary-800 z-10 font-mono">
          <div className="h-14 max-w-7xl p-4 mx-auto flex items-center justify-between">
            <Link href="/" className="font-medium text-lg md:hover:underline">
              Home
            </Link>
            <ul className="hidden md:flex items-center justify-end space-x-4 text-sm font-medium">
            <li className="md:hover:underline">
                <Link href="/about">About</Link>
              </li>
              <li className="md:hover:underline">
                <Link href="/projects">Projects</Link>
              </li>
              <li className="md:hover:underline">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
      );
    }
}