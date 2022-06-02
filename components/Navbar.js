import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav>
      <Link href="/">
        <a className="logo">
          <Image src="/spider-man-logo.png" width={50} height={50} alt="test logo" />
        </a>
      </Link>

      <Link href="/">
        <a>Home</a>
      </Link>

      <Link href="/IssueList">
        <a>Issues</a>
      </Link>
    </nav>
  );
}
