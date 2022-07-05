import React, { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../../../firebase"
import * as Styles from "./LoginForm.styles"
import { CompactLayout } from "../../Navigation"
import { useAuthState } from "react-firebase-hooks/auth"
import { PrimaryButton, SecondaryButton, TextInput } from "../../components"

export const LoginForm = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [emailError, setEmailError] = useState("")
  const [user, loading] = useAuthState(auth)
  const [ isLoginLoading, setIsLoginLoading ] = useState(false)
  const navigate = useNavigate()
  console.log(emailError)

  useEffect(() => {
    if (loading) {
      return
    }
    if (user) {
      setIsLoginLoading(false)
      navigate("/dashboard")
    }
  }, [user, loading, navigate])

  return (
    <CompactLayout>
      <Styles.LoginForm>
        <h1>Connexion</h1>
        <Styles.FormContainer>
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
            onClick={() => {
              setIsLoginLoading(true)
              try {
                logInWithEmailAndPassword(email, password).then(r => {
                  console.log(r)
                  setIsLoginLoading(false)
                  setEmailError(r)
                })
              } catch (error: any) {
                console.log(error)
                setIsLoginLoading(false)
                setEmailError(error)
              }
            }}
            state={isLoginLoading ? "loading" : "idle"}
          >
                        Connexion
          </PrimaryButton>
          <SecondaryButton onClick={signInWithGoogle}>
            <img
              /* eslint-disable-next-line max-len */
              src={"https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png"} width={20} height={20} alt={""}/>
            Connexion avec Google
          </SecondaryButton>

        </Styles.FormContainer>
        <div>
          <Link to="/reset">Mot de passe oublié ?</Link>
        </div>
        <div>
                    Pas encore de compte ? <Link to="/register">S'inscrire</Link> maintenant.
        </div>
      </Styles.LoginForm>
    </CompactLayout>
  )
}
