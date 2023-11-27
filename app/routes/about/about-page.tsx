import type { LinksFunction } from "@remix-run/node";
import styles from "~/styles/about_style.css";


export const aboutStyles: LinksFunction = () => [
    {
        rel: "stylesheet", href: styles
    }
]

export default function About() {
    return (
        <h1>This is about page..!</h1>
    )
}