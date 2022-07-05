import React, { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { useNavigate } from "react-router-dom"
import { auth, db } from "../../../firebase"
import * as Styles from "./Homepage.styles"
import { addDoc, collection, doc, getDocs, query, updateDoc, where } from "firebase/firestore"
import { CompactLayout } from "../../Navigation"
import { Navbar } from "../../Navigation/Navbar"
import { Icon } from "../../components"
import { useForm } from "react-hook-form"

export const Homepage = () => {
  const [user, loading] = useAuthState(auth)
  const [todos, setTodos] : any = useState([])
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm()
  const onSubmit = (data:any) => addTodo(data)

  useEffect(() => {
    if (loading) {return}
    if (!user) {return navigate("/")}
    const fetchTodos = async () => {
      try {
        const q = query(collection(db, "todos"), where("userId", "==", user?.uid), where("completed", "==", false))
        const doc = await getDocs(q)
        setTodos(doc.docs.map(d => {
          return {
            ...d.data(),
            id: d.id,
          }
        }))
      } catch (err) {
        console.error(err)
      }
    }
    fetchTodos().then(r => console.log(r))
  }, [user, loading, navigate])

  const deleteTodo = async (id: string) => {
    try {
      await updateDoc(doc(db, `todos/${id}`), { completed: true })
      setTodos(todos.filter((t:any) => t.id !== id))
    } catch (err) {
      console.error(err)
    }
  }

  const addTodo = async (data: any) => {
    try {
      const todo = {
        userId: user?.uid,
        completed: false,
        name: data.name,
      }
      await addDoc(collection(db, "todos"), todo)
      setTodos([...todos, todo])
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <CompactLayout>
      <Styles.HomepageContainer>
        <h1>Tâches à faire</h1>
        <Navbar/>
        <Styles.TodosContainer>
          {todos.map((todo:any) => {
            return (
              <Styles.Todo key={todo.id}>
                <p>{todo.name}</p>
                <button onClick={() => deleteTodo(todo.id)}>
                  <Icon name={"check"}/>
                </button>
              </Styles.Todo>
            )
          })}
        </Styles.TodosContainer>
        <Styles.AddTodoContainer>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="First name" {...register("name", { required: true, maxLength: 80 })} />
            <input type="submit" />
          </form>
        </Styles.AddTodoContainer>

      </Styles.HomepageContainer>
    </CompactLayout>
  )
}
