import { motion } from "framer-motion"
import {VFC} from "react"
import styled from "styled-components"

type Props = {
    title: string
}

const TitleWrapper = styled(motion.div)``

const titleV = {
    hidden: {x: -20, y: 0},
    visible: {x: 0, y: 0},
}

export const Sec01Title:VFC<Props> = ({title}) => {
    return (
        <TitleWrapper
            variants={titleV}
            initial="hidden"
            animate="visible"
        >
            {title}
        </TitleWrapper>
    )
}