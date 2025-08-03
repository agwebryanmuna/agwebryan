import GradientText from "@/components/GradientText.tsx"
import { EXPERIENCE } from "@/assets/assets.ts";
import ExperienceCard from "@/components/ExperienceCard.tsx";

const Experience = () => {
  
  return (
    <section id='experience' className='mt-30'>
      <h2 className='text-3xl uppercase text-center font-bold tracking-wide'><GradientText text={'Experience'} from={'from-green-500'}/></h2>
      <div className='mt-9 flex flex-col gap-10'>
        {EXPERIENCE.map((experience, index)=>(<ExperienceCard key={index} experience={experience}/>))}
      </div>
    </section>
  )
}

export default Experience
