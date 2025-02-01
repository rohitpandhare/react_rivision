// here we will pass the data from the parent to the grandchild using the useContext hook.

import { useContext } from "react"
import { ThemeContext } from "../ThemeContext"

export function Grandchild() {
    const theme = useContext(ThemeContext);

    return (
        <div>
            <p>Current Theme: {theme}</p>
        </div>
    )
    } 