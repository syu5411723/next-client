import styled from "styled-components"
import { FooterBottom } from "../molcules/FooterBottom"
import { FooterMidele } from "../molcules/FooterMidele"
import { FooterUp } from "../molcules/FooterUp"

const Container = styled.footer``

export const Footer = () => {
    return (
        <Container>
            <FooterUp />
            <FooterMidele />
            <FooterBottom />
        </Container>
    )
}
