import Link from "next/link";
import {Button} from "./ui/button";

// components
import Nav from "./Nav";

const Header = () => {
  return <header className="py-8 xl:py-12 text-white"> 
    <container className="container mx-auto">
        {/* logo */}
        <Link href="/">
        <h1 className="text-4x1 font-semibold">
            Marlon <span className="text-accent">.</span></h1>
        </Link>
         {/* desktop nav */}
         <div className="hidden xl:flex">
         <Nav />
         </div>
        
    </container>
  </header>
}

export default Header
