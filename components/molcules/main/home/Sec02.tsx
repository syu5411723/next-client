import React from 'react'
import styled from 'styled-components'
import { Sec02Item } from '../../../atoms/main/home/sec02/Sec02Item'
import { Sec02Title } from '../../../atoms/main/home/sec02/Sec02Title'

const data = [""]

const Container = styled.section``
const RightWrapper = styled.div``
const LeftWrapper = styled.div``
const ListWrapper = styled.div``

export const Sec02 = () => {
    return (
        <Container>
            <LeftWrapper>
                <Sec02Title title="" />
                <ListWrapper>
                    {data.map(item => <Sec02Item text={item} />)}
                </ListWrapper>
            </LeftWrapper>
        </Container>
    )
}
