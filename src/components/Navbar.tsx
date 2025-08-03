import Logo from "@/components/Logo.tsx";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className={`z-20 flex items-center justify-between fixed left-0 top-0 right-0 w-full px-4 sm:px-[5vw] md:px-[7vw] max-w-[1000px] mx-auto
    ${isScrolled ? 'bg-background/80 shadow-md backdrop-blur-lg py-3 md:py-4':'py-7'}`}>
    {/*  Logo  */}
    <Logo/>
      
      {/*  Links */}
      <ul className='flex items-center gap-3'>
        <li><a href='#home' className='px-3 py-2 rounded-md hover:bg-muted transition-all duration-300'>Home</a></li>
        <li><a href='#projects' className='px-3 py-2 rounded-md hover:bg-muted transition-all duration-300'>Projects</a></li>
        <li><a href='#experience' className='px-3 py-2 rounded-md hover:bg-muted transition-all duration-300'>Experience</a></li>
        <li><a href='#contact' className='px-3 py-2 rounded-md hover:bg-muted transition-all duration-300'>Contact</a></li>
      </ul>
    </header>
  )
}
export default Navbar
