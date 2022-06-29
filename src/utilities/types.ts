import React from "react"

export interface BaseProps {
  className?: string,
  role?: string,
  "data-test"?: string,
}

/** A generic FunctionComponent containing default BaseProps */
export type Component<Props = unknown> = React.FC<BaseProps & Props>
