import styled from "styled-components"
import { FooterBottom } from "../molcules/footer/FooterBottom"
import { FooterMiddle } from "../molcules/footer/FooterMiddle"
import { FooterUp } from "../molcules/footer/FooterUp"

const Container = styled.footer``

export const Footer = () => {
    return (
        <Container>
            <FooterUp />
            <FooterMiddle />
            <FooterBottom />
        </Container>
    )
}
