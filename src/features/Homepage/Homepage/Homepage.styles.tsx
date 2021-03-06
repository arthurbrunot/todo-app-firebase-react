import styled from "styled-components"

export const HomepageContainer = styled.div`
  h1 {
    margin-bottom: 3rem;
  }
`

export const TodosContainer = styled.div`
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 500px;
  overflow-y: auto;
`

export const Todo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
border-radius: 0.5rem;
  background: #f0ece2;
  
  button {
    text-decoration: none;
    color:white;
    background: #1a1a1a;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    
    &:hover {
      background: green;
    }
  }
`

export const AddTodoContainer = styled.div`
  display: flex;
  flex-direction: row;
  
  form {
    display: flex;
    flex-direction: row;
    width: 100%;
  }
  
  input[type="text"] {
    border: none;
    background: #f0ece2;
    padding: 1.4rem;
    border-radius: 0.5rem;
    width: 100%;
    font-size: 1.5rem;
    
  }
  input[type="submit"] {
    outline: none;
    border: none;
    background: #1a1a1a;
    padding: 1.4rem 3rem;
    border-radius: 0.5rem;
    width: auto;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
  }
`

