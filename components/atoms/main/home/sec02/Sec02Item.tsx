import {VFC} from 'react';
import styled from 'styled-components';

type Props = {
    text: string
}

const Wrapper = styled.div``
const Text = styled.p``


export const Sec02Item:VFC<Props> = ({text}) => {
    return (
        <Wrapper>
            <Text>{text}</Text>
        </Wrapper>
    )
}
