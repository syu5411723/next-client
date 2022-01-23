import {VFC} from "react"

type Props = {
    title: string
}

export const Sec01Title:VFC<Props> = ({title}) => {
    return (
        <>
            {title}
        </>
    )
}