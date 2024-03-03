"use client";

import Link from "next/link";

import Button from "@/components/Button";

export default function Error() {
  return (
    <article className="flex flex-col">
      <p className="bg-amber-50 rounded-md text-xl text-amber-900 p-6 disabled:bg-zinc-100">
        Hoppsan, här dök visst ett litet problem upp!
      </p>

      <Link className="self-center mt-4" href="/">
        <Button className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
        </Button>
      </Link>
    </article>
  );
}
