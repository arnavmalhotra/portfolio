"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <>
      <div className="flex justify-center w-full h-16 p-4 border-solid border-b-2 border-gray-600">
        <div className="flex gap-4 items-center">
            <Button variant={pathname === "/" ? "secondary" : "ghost"}>
              <Link href="/">Home</Link>
            </Button>
            <Button variant={pathname === "/about" ? "secondary" : "ghost"}>
              <Link href="/about">About</Link>
            </Button>
            <Button variant={pathname === "/projects" ? "secondary" : "ghost"}>
              <Link href="/projects">Projects</Link>
            </Button>

        </div>
      </div>
    </>
  );
}
