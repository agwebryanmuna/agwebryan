import assets from "@/assets/assets.ts";
import { useEffect, useState } from "react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  })
  
  return (
    <footer id='contact' className='w-full bg-muted'>
    <div className=' py-20 mt-36 w-full px-4 sm:px-[5vw] md:px-[7vw] max-w-[1000px] mx-auto'>
      <h2 className='text-2xl sm:text-3xl font-bold text-center md:text-left tracking-wide'>Contact Me</h2>
      <p className='text-muted-foreground mt-8 text-center md:text-left'>I’m currently open to new opportunities and actively seeking a full-time position in web development. I’m available for remote roles globally, or hybrid positions based anywhere in Cameroon. With experience in full-stack development, mobile app development, and a strong focus on clean, maintainable code, I’m eager to contribute to impactful projects and collaborate with forward-thinking teams.</p>
      <div className='mt-10 flex flex-col gap-3 text-center md:text-left'>
        <span className='tracking-wide text-2xl text-muted-foreground'>agwebryan1@gmail.com</span>
        <span className='tracking-wide text-2xl text-muted-foreground'>+237 673 807 818</span></div>
      <div className='flex gap-3 mt-8 justify-center md:justify-start'>
        <a href='https://github.com/agwebryanmuna' target='_blank'>
          <img className='invert' width={40} height={40} src={assets.github} alt='Github' title='Github' />
        </a><a href='https://www.linkedin.com/in/bryan-muna-a73224369/' target='_blank'>
          <img className='invert' width={40} height={40} src={assets.linkedin} alt='LinkedIn' title='LinkedIn' />
        </a>
      </div>
    </div>
      {isVisible && <button onClick={() => window.scroll({ top: 0, behavior: 'smooth' })}
               className="fixed right-[60px] bottom-[60px] bg-black py-1 px-3 rounded-full border">Go up</button>}
      
    </footer>
  )
}

export default Footer
