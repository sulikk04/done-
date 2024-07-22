import React from 'react'
import { Header } from '../header'
import { Footer } from '../footer'
import { ScrollToTop } from '../scrollToTop'

export const PageLayout = ({children}) => {
    return (
        <div>
            <ScrollToTop/>
            <Header/>
            <main>{children}</main>
            <Footer/>
        </div>
    )
}