import GradientText from "@/components/GradientText.tsx";
import ProjectCard from "@/components/ProjectCard.tsx";
import { projectsList, techStack } from "@/assets/assets.ts";
import { useEffect, useState } from "react";
import type { Project } from "@/utils/definitions.ts";


const Projects = () => {
  const [projectsNum, setProjectsNum] = useState<number | 'All'>(4);
  const [selectedTechs, setSelectedTechs] = useState<string[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projectsList);
  const [projects, setProjects] = useState<Project[]>([]);
  
  const handleSelectTech = (selectedTech: string) => {
    setSelectedTechs((prev)=>prev.includes(selectedTech)?[...selectedTechs.filter((tech)=>tech!=selectedTech)]:[...prev, selectedTech]);
  }
  
  const filterProjects = () => {
    if(selectedTechs.length === 0)
    {
      setFilteredProjects(projectsList)
      return;
    }
    
    const postFilteredProjects:Project[] = [];
    
    for (const project of projectsList) {
      for (const tech of selectedTechs) {
        const isIncluded = project.technologies.includes(tech);
        if (isIncluded) {
          if(!postFilteredProjects.includes(project)) {
            postFilteredProjects.push(project);
            break;
          }
        }
      }
    }
    
    return setFilteredProjects(postFilteredProjects);
  }
  
  const showProjects = () => {
    if(filteredProjects.length > 6) {
      if(projectsNum === 'All'){
        setProjects(filteredProjects);
      } else {
        setProjects(filteredProjects.slice(0, 4));
      }
    } else {
      setProjects(filteredProjects);
    }
  }
  
  useEffect(() => {
    filterProjects()
  },[selectedTechs])
  
  useEffect(() => {
    showProjects()
  },[filteredProjects, projectsNum])
  
  return (
    <section id='projects' className='mt-30'>
      <h2 className='text-3xl uppercase text-center font-bold tracking-wide'><GradientText text={'Projects'} from={'from-red-500'}/></h2>
      <div className='flex flex-wrap gap-2 mt-8 justify-center'>
        {techStack.map((tech, index)=>(
          <span onClick={() => handleSelectTech(tech)} key={index} className={`py-1 px-3 border rounded-full text-sm cursor-pointer ${selectedTechs.includes(tech)?'bg-primary text-black':''}`}>{tech}</span>
        ))}
      </div>
      
     <div className='mt-8 grid grid-cols-1 gap-4 gap-y-6 sm:grid-cols-2'>
       {projects.map((project, index) =><ProjectCard key={index} project={project}/>)}
     </div>
      <div className='text-center mt-10'>
        <button onClick={()=>setProjectsNum((prev)=>prev === 'All'? 4:'All')} className='border border-primary font-bold py-2 px-6 rounded-full hover:bg-primary hover:text-muted transition-all'>{projectsNum === 'All'? 'View less':'View All'}</button>
      </div>
    </section>
  )
}
export default Projects
