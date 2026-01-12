import { useState } from "react"

const User = ({name, age, city}) => {
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(10)
    return (
        <div className="user-card">
            <h1>User Details</h1>
            <h2>Name: {name} </h2>
            <h2>Age: {age} </h2>
            <h2>City: {city} </h2>
            <h1>Count: {count}</h1>
            <h1>Count2: {count2}</h1>
        </div>
    )
}

export default User
