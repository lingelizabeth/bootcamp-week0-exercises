import React, { Component, useState, useReducer} from 'react'
import {Button} from './styles.js'
import {Input, ContainerDiv, Title} from './styles.js'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
//import Container from './components/Container.js';
import TaskListComponent from './components/TaskList.js';

//const tasks = [{id:1, text: "style todo app"}, {id:2, text:"hello"}];
const formReducer = (prevState, payload) => ({ ...prevState, ...payload })

const App = () => {
  const [form, setForm] = useReducer(formReducer, {tasks: []});
  const [searchText, setSearchText] = useState("");
  return(
    <ThemeProvider theme={theme}>
    <Container value={searchText} setValue={setSearchText} form={form} setForm={setForm}> 
    </Container>
    <TaskListComponent searchText={searchText} form={form} setForm={setForm}></TaskListComponent>
    
    </ThemeProvider>
  )
}

const Container = ({value, setValue, form, setForm}) => (

    <ContainerDiv>
      <Title>
        To Do List
      </Title>

      <SearchBar value={value} setValue={setValue} form={form} setForm={setForm}></SearchBar>
      <ToDo form={form} setForm={setForm}></ToDo>
    </ContainerDiv>
)

const SearchBar = ({value, setValue, form, setForm}) => {
  
    return(
      <div>
        <FormInput value={value} setValue={setValue}/>
          
        <FormButton text={<img 
          src = "https://image.flaticon.com/icons/png/512/49/49116.png" 
          alt = "magnifying lens" 
          style={{width: 15}}
        />} action={()=>console.log("buttonpressed")}
          isDelete={false}>
       
        </FormButton>
      </div>
    )
  }
  //below: was action for FormButton
  //()=>setForm({tasks: form['tasks'].filter(task => task.text.includes(value))})
  
  const nanoid = require('nanoid')
  const ToDo = ({form, setForm}) => {
    const [todoText, setTodoText] = useState("");
    return(
    <div>
      <FormInput  label="Enter a task" value={todoText} setValue={setTodoText}></FormInput>
      <FormButton text="Add" action={()=>setForm(form['tasks'].push({id:nanoid(), text: todoText}))} isDelete={false}></FormButton>
    </div>
    )
  }
  
  const FormInput = ({label, value, setValue}) => {
    return(
    <Input placeholder = {label}
        value={value} 
        onChange={e=>setValue(e.target.value)} //setForm({ [label]: newToDo(e.target.value)})
        ></Input>)
  
  }

export const FormButton = ({text, action, isDelete}) => {
  return (
    <Button isDelete={isDelete} onClick={action}>
      {text}
    </Button>
  )
}

export default App