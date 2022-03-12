import {VFC} from "react"
import styled from "styled-components"
import { FooterMenuItem } from "../atoms/footer/middle/FooterMenuItem"
import { FooterMiddleHead } from "../atoms/footer/middle/FooterMiddleHead"
import { FooterIcons } from "../atoms/footer/up/FooterIcons"

type Props = {
    data: any
}


const ContentWrapper = styled.div``
const data = [
    {
        id: 1,
        text: "",
    },
    {
        id: 2,
        text: "",
    },
    {
        id: 3,
        text: "",
    },
    {
        id: 4,
        text: "",
    },
    {
        id: 5,
        text: "",
    },
]

export const FooterMidele = () => {
    return (
        <>
            <ContentWrapper>
                <FooterMiddleHead data={data}  />
                <FooterMenuItem data={data} />
            </ContentWrapper>
        </>
    )
}
