import { createContext } from 'react'
import Head from 'next/head'

import { Data } from '../../lib/data/Sec01Data';
import { Home } from '../../components/pages/Home';

type ContextProps = {
    postData: any
}

export const getStaticPaths = async () => {
    const paths = Data.map(data => ({
        params: {
            id: data.id
        }
    }))
    return { paths, fallback: false }
}

export const getStaticProps = async (context) => {
    const data = await Data
    const { id } = context.params
    const postData = data.filter(item => item.id === id);

    return {
        props: {
            postData,
        }
    }
}


export const DataContext = createContext({} as ContextProps)

const DetailPage = ({ postData }) => {
    return (
        <>
            <Head>

            </Head>
            <DataContext.Provider value={{ postData }}>
                <Home />
            </DataContext.Provider>
        </>
    )
}

export default DetailPage
