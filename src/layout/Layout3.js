import Head from 'next/head'
import React from 'react'
import Header3 from './Header3'
import Footer from './Footer'

export default function Layout3({ children, headName, switcherBtn }) {
    return (

        <>
            <Head>

                {/* metas */}
                <meta charSet="utf-8" />
                <meta name="author" content="TrendyCoder" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="keywords" content="Andrew - Portfolio" />
                <meta name="description" content="Andrew - Portfolio" />
                {/*title*/}
                <title>Andrew Lew - Portfolio </title>
                {/* Favicon */}
                <link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />

            </Head>
            <Header3 switcherBtn={switcherBtn}/>                      
            {/* Main */}
            <main className="wrapper">
                {children}
            </main>
            {/* Main */}
            <Footer/>

        </>

    )
}
