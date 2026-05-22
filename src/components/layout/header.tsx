"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export default function Header() {
  //  routers 
  const navlinks = [
    {
      label: "home",
      href: "/",
    },

    {
      label: "post",
      href: "/post",
    },
  ];

  const router=useRouter()
  return (
    <header className='flex justify-between items-center px-6 py-4 border-b bg-background' >
      <div className='flex justify-between items-center gap-6'>
        <div>
          {" "}
          <h1 className='text-2xl font-bold'>Next Blog</h1>{" "}
        </div>
        <div className='flex justify-between items-center gap-4'>
          {navlinks.map((link) => {
            return (
              <Link key={link.href} href={link.href} className="capitalize">
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
      <div  className="hidden md:block">
        {/* placeholder for search */}
      </div>
      {/* placeholdder for toggle theme  */}
      <div>
        <Button className="cursor-pointer"
         onClick={() => router.push("/auth")}>Login</Button>
      </div>
    </header>
  );
}
