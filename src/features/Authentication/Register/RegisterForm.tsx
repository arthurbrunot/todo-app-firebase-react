import React, { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { Link, useNavigate } from "react-router-dom"
import * as Styles from "./RegisterForm.styles"
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../../../firebase"
import { CompactLayout } from "../../Navigation"
import { PrimaryButton, SecondaryButton, TextInput } from "../../components"
export const RegisterForm = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [ isRegisterLoading, setIsRegisterLoading ] = useState(false)
  const [emailError] = useState("")
  const [name, setName] = useState("")
  const [user, loading] = useAuthState(auth)

  const navigate = useNavigate()

  const register = (name: string, email: string, password: string) => {
    if (!name) {alert("Please enter name")}
    setIsRegisterLoading(true)
    registerWithEmailAndPassword(name, email, password).catch(r => {
      console.log(r)
    }).then(() => (
      navigate("/dashboard")
    ))
  }
  useEffect(() => {
    if (loading) {return}
    //  if (user) history.replace("/dashboard");
  }, [user, loading])
  return (
    <>
      <CompactLayout>
        <Styles.RegisterForm>
          <h1>Inscription</h1>
          <Styles.FormContainer>
            <TextInput
              label={"Nom complet"}
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="E-mail Address"
            />
            <TextInput
              label={"Adresse e-mail"}
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail Address"
            />
            { emailError && <Styles.ErrorMessage>{emailError}</Styles.ErrorMessage> }
            <TextInput
              type="password"
              label={"Mot de passe"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <PrimaryButton
              onClick={() => register(name, email, password)}
              state={isRegisterLoading ? "loading" : "idle"}
            >
              Inscription
            </PrimaryButton>
            <SecondaryButton onClick={signInWithGoogle}>
              <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png"} width={20} height={20} alt={""}/>
              Inscription avec Google
            </SecondaryButton>

          </Styles.FormContainer>
          <div>
            Already have an account? <Link to="/">Login</Link> now.
          </div>
        </Styles.RegisterForm>
      </CompactLayout>
    </>

  )
}
