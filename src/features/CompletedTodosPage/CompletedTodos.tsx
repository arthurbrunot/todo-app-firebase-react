import React, { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { useNavigate } from "react-router-dom"
import { auth, db } from "../../firebase"
import * as Styles from "./CompletedTodos.styles"
import { collection, deleteDoc, doc, getDocs, query, updateDoc, where } from "firebase/firestore"
import { CompactLayout } from "../Navigation"
import { Navbar } from "../Navigation/Navbar"
import { Icon } from "features/components"
import "firebase/compat/firestore"

export const CompletedTodos = () => {
  const [user, loading] = useAuthState(auth)
  const [todos, setTodos] : any = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    if (loading) {return}
    if (!user) {return navigate("/")}
    const fetchTodos = async () => {
      try {
        const q = query(collection(db, "todos"), where("userId", "==", user?.uid), where("completed", "==", true))
        const doc = await getDocs(q)
        setTodos(doc.docs.map(d => {
          return {
            ...d.data(),
            id: d.id,
            ref: d.ref,
          }
        }))
      } catch (err) {
        console.error(err)
      }
    }
    fetchTodos().then(r => console.log(r))
  }, [user, loading, navigate])

  const restoreTodo = async (id: string) => {
    try {
      await updateDoc(doc(db, `todos/${id}`), { completed: false })
      setTodos(todos.filter((t:any) => t.id !== id))
    } catch (err) {
      console.error(err)
    }
  }

  const deleteTodo = async (id: string) => {
    try {
      await deleteDoc(doc(db, `todos/${id}`))
      setTodos(todos.filter((t:any) => t.id !== id))
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
                <div>
                  <button onClick={() => deleteTodo(todo.id)}>
                    <Icon name={"delete"}/>
                  </button>
                  <button onClick={() => restoreTodo(todo.id)}>
                    <Icon name={"settings_backup_restore"}/>
                  </button>
                </div>
              </Styles.Todo>
            )
          })}
        </Styles.TodosContainer>
      </Styles.HomepageContainer>
    </CompactLayout>
  )
}
