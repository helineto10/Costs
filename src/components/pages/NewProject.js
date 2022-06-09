import React from 'react'
import ProjectForm from '../project/ProjectForm'
import './NewProject.css'

function NewProject() {
  return (
    <div className="newProjectContainer">
        <h1>Criar Projeto</h1>
        <p>Crie seu projeto para depois adicionar os serviços</p>
        <ProjectForm btnText='Criar Projeto' />
    </div>
  )
}

export default NewProject