import React, { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import * as Styles from "./Reset.styles"
import { auth, sendPasswordReset } from "../../../firebase"

export const Reset = () => {
  const [email, setEmail] = useState("")
  const [user, loading, error] = useAuthState(auth)
  const navigate = useNavigate()
  useEffect(() => {
    if (loading) {return}
    if (user) {navigate("/dashboard")}
  }, [user, loading, navigate])
  return (
    <Styles.ResetForm>
      <div className="reset__container">
        <input
          type="text"
          className="reset__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <button
          className="reset__btn"
          onClick={() => sendPasswordReset(email)}
        >
                    Send password reset email
        </button>
        <div>
                    Don't have an account? <Link to="/register">Register</Link> now.
        </div>
      </div>
    </Styles.ResetForm>
  )
}
