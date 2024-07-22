import { Constants } from "@/utils/profiles/ram/constants";
import Link from "next/link";
import Nav from "../Nav/Nav";
import { Button } from "../ui/button";
import MobileNav from "../Nav/MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            {Constants.logo}
            <span className="text-accent">_</span>
          </h1>
        </Link>

        {/* deskstop nav && hire me button */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
