import type { Project } from "@/utils/definitions.ts";

const ProjectCard = ({project}:{project:Project}) => {

  return (
    <div className=''>
      <div className='rounded-lg overflow-hidden'><img src={project.thumbnail} alt={project.name} className="w-full object-cover h-[250px]"/></div>
      <div className='p-4'>
        <h4 className='text-2xl mb-3'>{project.name}</h4>
        <p className='text-muted-foreground mb-3 line-clamp-3'>{project.description}</p>
        <a className='hover:underline text-blue-400 text-sm mr-5' href={project.liveDemo} target='_blank'>View Project</a>
        <a className='hover:underline text-blue-400 text-sm' href={project.github} target='_blank'>View on Github</a>
      </div>
    </div>
  )
}
export default ProjectCard
