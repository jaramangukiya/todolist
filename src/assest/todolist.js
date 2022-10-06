import React from "react";
import Listing from "./listing";

export default class Todolist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task: "red"
        }
        changeTask = (e) => {
            this.setState([e.target.value])
            console.log("value = ", e.target.value);
        }
    }
}


render() {
    const Todotask = [];
    return (
        <div className="container">
            <h1 className="text-center mt-4">To do list</h1>
            <div className="input-group my-4">
                <input type="text" placeholder="New Task" className="form-control" id="task" onChange={this.changeTask}>
                    <h1>{e.target.value}</h1>
                </input>
                <input type="button" value="Add" className="input-group-text text-bg-primary border border-2 border-primary"></input>
            </div>
            <div>
                {
                    Todotask.map((value, index) => {
                        return <Listing item={value} />
                    })
                }
            </div>

        </div>
    )
}
