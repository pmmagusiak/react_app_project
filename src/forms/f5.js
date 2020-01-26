import React from "react";

export default class MyForms extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            age: null
        };
    }

    mySubmitHandler = (event) => {
        event.preventDefault();
        let age = this.state.age;
        if (!Number(age)) {
            alert("Your age must be a number!")
        }
    }

    myChangeHandler = (event) => {
        let key = event.target.name;
        let val = event.target.value;
        this.setState({[key]: val});
    }

    render() {
        return (
            <form onSubmit={this.mySubmitHandler}>
                <h1>Hello {this.state.username} age {this.state.age}</h1>
                <p>Enter your name:</p>
                <input
                    type="text"
                    name="username"
                    onChange={this.myChangeHandler}
                />
                <p>Enter your age:</p>
                <input
                    type="text"
                    name="age"
                    onChange={this.myChangeHandler}
                />
                <br/>
                <br/>
                <input type="submit" value="Sprawdź!"/>

            </form>
        )
    }
}