import Link from "next/link";
import {Button} from "./ui/button";

// components
import Nav from "./Nav";

const Header = () => {
  return <header className="py-8 xl:py-12 text-white"> 
    <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/">
            <h1 className="text-4x1 font-semibold text-accent">
                Marlon 
            </h1>
        </Link>

         {/* desktop nav */}
        <div className="hidden xl:flex items-center gap-8">
            <Nav />
                <Link href="/contact">
                <Button className="text-accent bg-gray-950 hover:text-slate-950 hover:bg-accent">
                     Hire me
                </Button>

                </Link>
        </div>
        
        {/* mobile nav */}
        <div className="xl:hidden">mobile nav</div>
    </div>
  </header>
}

export default Header
