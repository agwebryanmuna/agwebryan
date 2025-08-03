import type { Experience } from "@/utils/definitions.ts";

const ExperienceCard = ({experience}:{experience:Experience}) => {
  return (
    <div>
      <div className='flex justify-between items-center flex-wrap'>
        <h4 className='text-2xl sm:text-3xl'>{experience.position} at {experience.company}</h4>
        <p className='text-muted-foreground'>{experience.duration}</p>
      </div>
      <p className='text-muted-foreground mt-6 text-justify'>{experience.description}</p>
    </div>
  )
}
export default ExperienceCard
