import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="manifest" href="/manifest.json" />
                <link rel="shortcut icon" href="/icons/favicon.ico" type="image" />
                <link rel="apple-touch-icon" href="/icons/icon-512x512.png" />
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
    )
}