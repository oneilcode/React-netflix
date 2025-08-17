import { useEffect, useState } from "react"

export function useDebounce<T>(value: T, delay: number = 500) : T  {
    const [debounceValue, setdebounceValue] = useState<T>(value)

    useEffect(() => {
       const handler = setTimeout(() => {
        setdebounceValue(value)
       }, delay)

       return() => {
        clearTimeout(handler)
       }
    
    }, [value, delay])

    return debounceValue
}