import React from "react";
import "./ProjectForm.css";
import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";

function ProjectForm({btnText}) {
  return (
    <form className="form">
      <Input
        type="text"
        text="Nome do projeto"
        name="name"
        placeholder="Insira o nome do projeto"
      />
      <Input
        type="number"
        text='Orçamento do projeto'
        placeholder="Insira o orçamento total"
        name="budget"
      />
      <Select name='category_id' text='Selecione a categoria'  />
      <SubmitButton text={btnText} />
    </form>
  );
}

export default ProjectForm;
