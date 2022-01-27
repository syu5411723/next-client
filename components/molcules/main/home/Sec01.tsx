export {Sec01Title, Sec01Image, Sec01Button, Sec01Content} from "../../../atoms/main/home/Sec01/index"



import styled from "styled-components"
import { Data } from "../../../../lib/data/Sec01Data"

const Container = styled.div``

const RigghtWrapper = styled.div``
const LeftWrapper = styled.div``

export const Sec01 = () => {
    return (
        <>
        <LeftWrapper>
            <Sec01Title />
            <Sec01Content />
            <Sec01Button />
        </LeftWrapper>
        <RigghtWrapper>
            <Sec01Image />
        </RigghtWrapper>
        </>
    )
}
