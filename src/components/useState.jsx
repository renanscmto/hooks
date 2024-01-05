import { useState } from "react"

export default function UseState() {
    const [count, setCount] = useState(0)

    const IncrementCount = () => {
        // A forma recomendada de atualizar o estado é usando uma função que recebe o estado anterior e retorna o novo estado.
        setCount((prevState) => prevState + 1);
    }

    return (
        <div>
            <h1>useState</h1>
            <h2>0</h2>
            <button onClick={IncrementCount}>Increment</button>
        </div>
    )
}