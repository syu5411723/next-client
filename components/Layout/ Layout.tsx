import styled from "styled-components"
import { Footer } from "./templates/Footer"
import { Header } from "./templates/Header"

const Container = styled.div`
    
`


export const Layout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}
