import { useState, useRef, useEffect } from "react"

export default function UseState() {
    const [name, setName] = useState('')

    // useRef é usado para guardar valores mutáveis que não causam a renderização do componente.
    const render = useRef(1)
    const inputRef = useRef()
    const previousRednderName = useRef()

    // inputRefFocus é uma função que recebe o estado anterior e retorna o novo estado.
    const inputRefFocus = () => {
        // current é usado para acessar o valor atual da referência.
        inputRef.current.focus()
    }

    // useEffect é usado para executar efeitos colaterais em componentes funcionais.
    useEffect(() => { 
        // render.current é usado para acessar o valor atual da referência.
        render.current = render.current + 1
        previousRednderName.current = name
    }, [name, render])

    return (
        <div>
            <h1>useRef</h1>
            <input ref={inputRef} type="text" value={name} name="name" onChange={(e) => setName(e.target.value)} />
            <p>Olá, meu nome é: {name}</p>
            <p>Meu nome foi: {previousRednderName.current}</p>
            <p>Número: {render.current}</p>
            <button onClick={inputRefFocus}>Focus</button>
        </div>
    )
}