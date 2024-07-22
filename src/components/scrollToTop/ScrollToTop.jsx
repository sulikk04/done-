import { useEffect } from "react"
import { useLocation } from "react-router-dom"

//компонент по нажатию ссылки которого переносит на верх страницы @sulikk

export const ScrollToTop = () => {
    const { pathname } = useLocation()

    useEffect(() => {
    window.scrollTo(0, 0);
    }, [pathname])

    return null
}

