"use client";

import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Constants } from "@/utils/constants";
import { navLinks } from "@/utils/navLinks";
import { icons_svg } from "../icons/icons_svgs";

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <span className="text-[32px] text-accent">
          {icons_svg.hamburgerMenu}
        </span>
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* logo */}
        <div className="mt-32 mb-40 text-center text-3xl">
          <Link href="/">
            {Constants.logo}
            <span className="text-accent">_</span>
          </Link>
        </div>
        {/* nav */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {navLinks.map((link, index) => {
            return (
              <Link
                key={index}
                href={link.path}
                className={`${
                  link.path === pathname &&
                  "text-accent border-b-2 border-accent"
                } text-xl capitalize hover:text-accent transition-all`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;