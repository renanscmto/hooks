import { useState } from "react"

export default function UseState() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('Renan')

    const IncrementCount = () => {
        // A forma recomendada de atualizar o estado é usando uma função que recebe o estado anterior e retorna o novo estado.
        setCount((prevState) => prevState + 1);
        setName("Renan Nascimento da Silva")
    }

    return (
        <div>
            <h1>useState</h1>
            <h2>{count}</h2>
            <p>{name}</p>
            <button onClick={IncrementCount}>Increment</button>
        </div>
    )
}