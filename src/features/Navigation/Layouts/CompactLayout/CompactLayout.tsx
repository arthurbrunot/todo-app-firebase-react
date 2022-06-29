import React from "react"
import * as Styles from "./CompactLayout.styles"

export const CompactLayout = (props: { children: any }) => {
  return (
    <Styles.MainContainer>
      <Styles.CompactContainer>
        {props.children}
      </Styles.CompactContainer>
    </Styles.MainContainer>
  )
}
