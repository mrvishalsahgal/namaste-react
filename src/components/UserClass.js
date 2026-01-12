import React from "react"

class UserClass extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            count2: 10,
            user: {
                name: "Vishal",
                age: 22,
                city: "Bhopal"
            }        }
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/mrvishalsahgal")
        const json = await data.json()
        console.log(json)
        this.setState({user: json})
    }
    
    render() {

        // const {name, age, city} = this.props
        const {count, count2} = this.state
        const {login, age, location} = this.state.user
        return (
            <div className="user-card">
                <h1>User Details</h1>
                <h2>Name: {login} </h2>
                <h2>Age: {age} </h2>
                <h2>City: {location} </h2>
                <h1>Count: {count}</h1>
                <h1>Count2: {count2}</h1>
                <button onClick={() => this.setState({count: count + 1, count2: count2 + 2})}>Count</button>
               
            </div>
        )
    }
}

export default UserClass