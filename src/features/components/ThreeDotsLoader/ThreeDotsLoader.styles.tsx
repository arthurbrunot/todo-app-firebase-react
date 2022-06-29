import styled from "styled-components/macro"
import { Transition, Variants, motion } from "framer-motion"

const ContainerVariants: Variants = {
  end: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  start: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const dotVariants: Variants = {
  end: {
    y: "150%",
  },
  start: {
    y: "50%",
  },
}

const dotTransition: Transition = {
  duration: 0.5,
  ease: "easeInOut",
  repeat: Infinity,
  repeatType: "reverse",
}

export const AnimatedContainer = styled(motion.div).attrs({
  animate: "end",
  initial: "start",
  variants: ContainerVariants,
})`
width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: space-around;
`

export const AnimatedDot = styled(motion.span).attrs({
  transition: dotTransition,
  variants: dotVariants,
})`
display: block;
  width: 0.5rem;
  height: 0.5rem;
  background: white;
  border-radius: 0.25rem;
`
