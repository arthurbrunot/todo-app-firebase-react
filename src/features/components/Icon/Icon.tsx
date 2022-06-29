import { Component } from "utilities/types"
import { Variants, motion } from "framer-motion"

export const Icon: Component<IconProps> = props => (
  <motion.i
    className={["material-icons", props.className].join(" ")}
    variants={props.variants}
  >
    {props.name}
  </motion.i>
)

export interface IconProps {
  name: string,
  variants?: Variants,
}
