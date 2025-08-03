import { type ReactNode } from 'react'
import Navbar from "@/components/Navbar.tsx";
import Footer from "@/components/Footer.tsx";

const Layout = ({children}: {children: ReactNode}) => {
  return (
    <>
      <Navbar/>
      <div className='mt-36 w-full px-4 sm:px-[5vw] md:px-[7vw] max-w-[1000px] mx-auto'>
        {children}
      </div>
      <Footer/>
    </>
  )
}
export default Layout
