import React from 'react'
import styled from 'styled-components'

import { Sec01 } from '../molcules/main/home/Sec01'
import { Sec02 } from '../molcules/main/home/Sec02'
import { Sec03 } from '../molcules/main/home/Sec03'

const Container = styled.div``
const Inner = styled.div``


export const Home = () => {
    return (
        <Container>
            <Inner>
                <Sec01 />
                {/* <Sec02 title="" data="" img="/img/icon.jpg" imgText="" content="" />
                <Sec03 reverse={true} />
                <Sec02 title="" data="" img="/img/icon.jpg" imgText="" content=""  /> */}
            </Inner>
        </Container>
    )
}
