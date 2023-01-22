import React, { useEffect } from "react";
import { useState } from "react";
import Values from "values.js"
import SingleColor from "./SingleColor";

export default function App() {

    const [color, setColor] = useState("")
    const [error, setError] = useState(false)
    const [list, setList] = useState(new Values(`#0b1c3b`).all(10))
    
    const handleSubmit = (e) => {
        e.preventDefault()
        try {
            let colors = new Values(color).all(10)
            setList(colors)
            setError(false)
        } catch (error) {
            setError(true)
            console.log(error)
        }
    }

    return (
        <>
            <section className="container">
                <h3>Color Generator</h3>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        value={color} 
                        onChange={(e) => setColor(e.target.value)} 
                        placeholder="#0b1c3b"
                        className={error ? "error" : ""}
                    />
                    <button className="btn" type="submit">SUBMIT</button>
                </form>
            </section>
            <section className="colors">
                {
                    list.map((item, index) => {
                        return (
                            <SingleColor
                                key = {index}
                                {...item}
                                index={index}
                            />
                        )
                    })
                }
            </section>
        </>
    )
}