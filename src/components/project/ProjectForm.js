import React, {useEffect, useState} from "react";
import "./ProjectForm.css";
import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";

function ProjectForm({btnText}) {

const [categories, setCategories] = useState([])

const url = "http://localhost:5000"

useEffect(() => {
  fetch(`${url}/categories`, {
    method: "GET",
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then((resp) => resp.json())
  .then((data) => setCategories(data))
  .catch((e) => console.log(e))
}, [])



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
      <Select name='category_id' text='Selecione a categoria'
      options={categories}  />
      <SubmitButton text={btnText} />
    </form>
  );
}

export default ProjectForm;
