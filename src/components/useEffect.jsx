import { useState, useEffect } from "react"

export default function UseEffect() {
    const [resourceType, setResourceType] = useState("posts")
    const [itemsResourceType, setItemsResourceType] = useState([])

    // useEffect é usado para executar efeitos colaterais em componentes funcionais, que podem ser pasarados como argumentos para o array de dependencias.
    useEffect(() => {
        // Usando o fetch para fazer uma requisição a uma API e retornar os dados em formato JSON com o Async.
        const fetchResource = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            const json = await response.json()
            setItemsResourceType(json)
        }
        fetchResource()
    }, [resourceType]); // Se o array de dependencias estiver vazio, o useEffect só será executado uma vez, quando o componente for montado ComponentDidMount.

    const changeResourceType = (resourceType) => {
        setResourceType(resourceType)
    }
    return (
        <div>
            <h1>useEffect</h1>
            <h2>{resourceType}</h2>
            <div>
                <button onClick={() => changeResourceType("posts")}>Posts</button>
                <button onClick={() => changeResourceType("comments")}>Comments</button>
                <button onClick={() => changeResourceType("todos")}>Todos</button>
            </div>

            {itemsResourceType.map((item) => {
                if(item.id <= 10) {
                    return <pre key={item.id}>{JSON.stringify(item.id)}</pre>
                }
            })}
        </div>
    )
}

