import React from "react"
import { useEffect } from "react"
import { useState } from "react"

const Button = (props) => {
    const [click, setClick] = useState(0)

    useEffect(() => {
        document.title = `You clicked ${click} times`
    })

    return (
        <button onClick={() => setClick(click + 1)}>{props.text} {click}</button>
    )
}

Button.defaultProps = {
    text: "Кнопка"
}

export default Button