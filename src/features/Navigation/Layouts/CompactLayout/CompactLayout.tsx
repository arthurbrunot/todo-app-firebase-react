import React, { useEffect } from "react"
import * as Styles from "./CompactLayout.styles"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth, logout } from "../../../../firebase"
import { Icon } from "../../../components"

export const CompactLayout = (props: { children: any }) => {
  const [user] = useAuthState(auth)

  return (
    <Styles.MainContainer>
      { user && (
        <Styles.UserContainer>
          <div>
            <h3>Connecté en tant que :</h3>
            <p>{user?.email}</p>
          </div>
          <button onClick={logout}>
            <Icon name={"power_settings_new"}/>
          </button>
        </Styles.UserContainer>
      )}
      <Styles.CompactContainer>
        {props.children}
      </Styles.CompactContainer>
    </Styles.MainContainer>
  )
}
