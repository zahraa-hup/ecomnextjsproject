import React from 'react'
import Link from "next/link";
function Nav() {
  return (
    <nav aria-label="Global" className="hidden md:block">
      <ul className="flex items-center gap-6 text-sm">
        <li>
          <Link
            href={"/"}
            className="text-gray-500 transition hover:text-gray-500/75"
          >
            Home{""}
          </Link>
        </li>
        <li>
          <Link
            href={"/testpage/About"}
            className="text-gray-500 transition hover:text-gray-500/75"
          >
            About{""}
          </Link>
        </li>

        <li>
          <Link
            className="text-gray-500 transition hover:text-gray-500/75"
            href="/testpage/Careers"
          >
            {" "}
            Careers{" "}
          </Link>
        </li>

        <li>
          <Link
            className="text-gray-500 transition hover:text-gray-500/75"
            href="/testpage/History"
          >
            {" "}
            History{" "}
          </Link>
        </li>

        <li>
          <Link
            className="text-gray-500 transition hover:text-gray-500/75"
            href="/testpage/Services"
          >
            {" "}
            Services{" "}
          </Link>
        </li>

        <li>
          <Link
            className="text-gray-500 transition hover:text-gray-500/75"
            href="/testpage/Projects"
          >
            {" "}
            Projects{" "}
          </Link>
        </li>

        <li>
          <Link
            className=" transition hover:text-gray-500/75 text-blue-600 text-xl"
            href="/form"
          >
            {" "}
            Contact Us{" "}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav
