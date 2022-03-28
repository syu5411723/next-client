import { motion } from "framer-motion"
import {VFC} from "react"
import styled from "styled-components"

type Props = {
    title: string
}

const TitleWrapper = styled(motion.div)``

const titleV = {
    hidden: {opacity: 0},
    visible: {opacity: 1,transition:{duration:0.4}}
}

export const Sec01Title:VFC<Props> = ({title}) => {
    return (
        <TitleWrapper
            variants={titleV}
            initial='hidden'
            animate="visible"
        >
            {title}
        </TitleWrapper>
    )
}