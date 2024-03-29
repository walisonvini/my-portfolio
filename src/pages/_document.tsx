import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com"/>
                    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600&family=Quicksand:wght@300;400;500;600;700&family=Roboto:wght@300;400;500;700&family=Inconsolata&family=VT323&family=Orbitron&family=Bebas+Neue&family=Montserrat&family=Raleway&display=swap" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css2?family=DynaPuff&display=swap" rel="stylesheet" />
                    <link rel="icon" type="image/x-icon" href="/favicon.png"></link>
                    <title>Walison.io</title>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}