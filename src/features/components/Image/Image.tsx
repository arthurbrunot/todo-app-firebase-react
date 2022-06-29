import React, { ImgHTMLAttributes } from "react"
import { Component } from "utilities/types"
import * as Styles from "./Image.styles"

export const Image: Component<ImgHTMLAttributes<HTMLImageElement>> = ({ src, alt, ...props }) => {
  const [ imageIsLoaded, setImageIsLoaded ] = React.useState(false)

  return (
    <Styles.ImageContainer>
      <Styles.Image
        src={src}
        alt={alt}
        onLoad={() => setImageIsLoaded(true)}
        $isLoaded={imageIsLoaded}
        {...props}
      />
    </Styles.ImageContainer>
  )
}
