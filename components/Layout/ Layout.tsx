import styled from "styled-components"
import { Footer } from "./templates/Footer"
import { Header } from "./templates/Header"


export const Layout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}
