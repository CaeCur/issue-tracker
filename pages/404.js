import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  });

  return (
    <div className="not-found">
      <h1>Uh Oh...</h1>
      <h2>This page cannot be found</h2>
      <p>
        We are taking you back to the{" "}
        <Link href="/">
          <a>Homepage</a>
        </Link>{" "}
        in 3 seconds...
      </p>
    </div>
  );
}
