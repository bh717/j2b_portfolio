import {useEffect, useState, useCallback} from 'react'

export const useMediaQuery = (query) => {
    const [is, setIs] = useState(false)

    const handler = widht => {
        if (widht < query) setIs(true)
        else setIs(false)
    }

    const handleResize = useCallback(() => {
        handler(window.innerWidth)
    })

    useEffect(() => {
        handler(window.innerWidth)
        window.addEventListener('resize', handleResize, false)
        return () => {
            window.removeEventListener('resize', handleResize, false)
        }
    }, [])
    return is
}