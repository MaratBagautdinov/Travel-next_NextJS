import Head from 'next/head'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { onlyText } from './clearText'

interface IMeta {
    title: string
    description?: string
}

const Meta: FC<IMeta> = ({ title, description }) => {
    const { asPath } = useRouter()
    const currentUrl = `${process.env.APP_URL}${asPath}`

    return (
        <Head>
            <title itemProp='headline'>{title} | Travel App</title>
            {description ? (
                <>
                    <meta
                        itemProp='description'
                        name='description'
                        content={onlyText(description, 152)}
                    />
                    <link rel='canonical' href={currentUrl} />
                    <meta property='og:locale' content='en' />
                    <meta property='og:title' content={title} />
                    <meta property='og:url' content={currentUrl} />
                    <meta property='og:image' content={'/icons/favicon.ico'} />
                    <meta property='og:site_name' content='Travel App' />
                </>
            ) : (
                <meta name='robots' content='noindex, nofollow' />
            )}
        </Head>
    )
}

export default Meta