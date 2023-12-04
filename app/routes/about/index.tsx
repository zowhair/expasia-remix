import type { LinksFunction } from "@remix-run/node";
import styles from "./about_style.css";


export const aboutStyles: LinksFunction = () => [
    {
        rel: "stylesheet", href: styles
    }
]

export default function About() {
    return (
        <h1 className="about-container">This is about page..!</h1>
    )
}