import React from 'react'
import Project from '../components/Project'
import projects from '../assets/js/projects'
import '../assets/css/Projects.css'



function Projects() {
  return (
    <section id="projects" className='pageContainer' >
      <h1 className="title" > Projects </h1>
        <div className='projectsContainer'>
          {projects.map((project) => (
              <Project
                key={project.id}
                name={project.name}
                githubLink={project.githubLink}
                imageUrl={project.imageUrl}
                technologies={project.technologies}
              />
            ))}
        </div>
      </section>
  )
}

export default Projects